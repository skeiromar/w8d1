
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
import * as BenchApiUtil from '../util/bench_api_util';
export const CHANGE_FILTER = "CHANGE_FILTER";
import {fetchBenches} from './bench_actions';

export const updateBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
});

export const changeFilter = (filter, value) => ({
    type: CHANGE_FILTER,
    filter,
    value
});

// export const updateBounds = (bounds) => dispatch => 
// BenchApiUtil.fetchBenches(bounds)
// .then(bounds => dispatch(updateNewBounds(bounds)));

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
      dispatch(changeFilter(filter, value));
    //   debugger
      return fetchBenches(getState().ui.filters)(dispatch);
      // delicious curry!
    }
  }
  