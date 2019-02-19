import Types from 'Types';
import { Epic } from 'redux-observable';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { getHello, getHelloResponse, getWorld } from './actions';

/* 
  Note: Use 'switchMap' to cancel previous ajax calls.
        Use 'mergeMap' to launch multiple concurrent connections.
*/

const getHelloEpic: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store, { ajaxObservable }) =>
  action$.pipe(
    filter(isActionOf(getHello)),
    switchMap(action =>
      ajaxObservable({
        request: { url: `/hello` },
        retryConfig: {
          initialInterval: 1000,
          maxRetries: 0
        },
        onResponseAction: getHelloResponse
      })
    )
  );

const getWorldEpic: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store, { ajaxObservable }) =>
  action$.pipe(
    filter(isActionOf(getWorld.request)),
    switchMap(action =>
      ajaxObservable({
        request: { url: `/world` },
        retryConfig: {
          initialInterval: 1000,
          maxRetries: 0
        },
        onResponseAction: getWorld.success,
        onErrorAction: getWorld.failure
      })
    )
  );

export default [getHelloEpic, getWorldEpic];
