
import React, { Component } from 'react'
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends Component {

    componentDidMount() {
        // this.props.fetchBenches();
    }
    render() {
        return (
        <div>
            {this.props.benches.map((el, i) => <BenchIndexItem key={i} 
            bench={el} />)}
        </div>
        )
    }
}
