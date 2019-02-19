import Types from 'Types';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ajax, AjaxRequest, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { retryBackoff, RetryBackoffConfig } from 'backoff-rxjs';

type ResponseAction = (response: AjaxResponse) => Types.RootAction;
type ErrorAction = (response: AjaxError) => Types.RootAction;

export interface AjaxObservableConfig {
  request: AjaxRequest;
  onResponseAction: ResponseAction;
  onErrorAction?: ErrorAction;
  retryConfig?: RetryBackoffConfig;
}

const defaultRetryConfig = {
  initialInterval: 1000,
  maxInterval: 3000,
  maxRetries: 3
};

const onError = (error: AjaxError) => {
  return new Observable<Types.RootAction>();
};

/* 
  Performs abortable and exponentially 
  delayed retries on AJAX errors.
*/
export const ajaxObservable = (config: AjaxObservableConfig) =>
  ajax({ crossDomain: true, timeout: 5000, ...config.request }).pipe(
    retryBackoff(config.retryConfig || defaultRetryConfig),
    map(config.onResponseAction),
    catchError((error: AjaxError) =>
      config.onErrorAction ? of(config.onErrorAction(error)) : onError(error)
    )
  );

export default ajaxObservable;
