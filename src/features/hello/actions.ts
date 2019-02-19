import { createAction, createAsyncAction } from 'typesafe-actions';

import * as contants from './constants';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';

export const getHello = createAction(contants.GET_HELLO);
export const getHelloResponse = createAction(
  contants.GET_HELLO_RESPONSE,
  resolve => (response: AjaxResponse) => resolve(response)
);

export const getWorld = createAsyncAction(
  contants.GET_WORLD_REQUEST,
  contants.GET_WORLD_RESPONSE,
  contants.GET_WORLD_ERROR
)<undefined, AjaxResponse, AjaxError>();
