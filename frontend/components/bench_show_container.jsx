import {connect} from "react-redux";
import BenchForm from './bench_form';
import { createBench } from "../actions/bench_actions";


const mapStateToProps = (state, {location}) => {
    // const currentUser = state.entities.users[state.session.id];
    // let locs = props.location.search;
    
    // debugger
    return {
        // currentUser: currentUser
        lat: new URLSearchParams(location.search).get("lat"),
        lng: new URLSearchParams(location.search).get("lng")
    }
};

const mapDispatchToProps = thunkCaller => ({
    // logout: () => thunkCaller(logout())
    createBench: (bench) => dispatch(createBench(bench)),
});


export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);