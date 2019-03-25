import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        case UPDATE_BOUNDS:
            return action.bounds;
        case RECEIVE_BENCH:
        // {
        //     "id": 8,
        //     "description": "asdsada",
        //     "lat": 37.7787369249504,
        //     "lng": -122.416117248535,
        //     "seating": 0
        //     }
            return {[action.bench.id] : action.bench}
        default: 
            return state;
    }
}