
import { UPDATE_BOUNDS, CHANGE_FILTER } from '../actions/filter_actions';
import { UPDATE_FILTER } from '../actions/bench_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        // case UPDATE_BOUNDS:
        //     return {bounds: action.bounds};
        case CHANGE_FILTER:
            return {[action.filter]: action.value};

        case UPDATE_FILTER:
            return {[action.filter]: action.value};
        default: 
            return state;
    }
}