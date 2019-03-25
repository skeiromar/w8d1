import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import Search from './search';
import {updateFilter} from '../actions/filter_actions';
import * as bench_actions from '../actions/bench_actions';

const msp = state => {

    const benches = Object.values(state.entities.benches) || [];
    const max_seating = state.ui.filters.max_seating || 100;
    const min_seating = state.ui.filters.min_seating || 0;

    return {
        benches: benches,
        min_seating: min_seating,
        max_seating: max_seating
    }
}

const mdp = dispatch => {

    return {
        fetchBenches: () => dispatch(fetchBenches()),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        newUpdateFilter: (filter, value) => dispatch(bench_actions.updateFilter(filter, value))
    }   
}



export default connect(msp, mdp)(Search);