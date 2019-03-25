import React, { Component } from 'react'
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';
// import {updateBounds} from '../actions/filter_actions';

const Search = ({fetchBenches, benches, updateFilter, min_seating, max_seating, newUpdateFilter}) => (
    <div>
            <BenchMap benches={benches} updateFilter={updateFilter} />
        <BenchIndex fetchBenches={fetchBenches} benches={benches} />
        <FilterForm min_seating={min_seating} max_seating={max_seating} newUpdateFilter={newUpdateFilter} />

    </div>
  )


export default Search
