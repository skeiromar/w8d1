import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import {Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
// import BenchIndexContainer from '../components/bench_index_container';
import SearchContainer from './search_container';
import BenchFormContainer from '../components/bench_form_container';

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            
            <GreetingContainer />

        </header>
        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        <Route exact path="/" component={ SearchContainer } />
        {/* <Route exact path="/benches/new" component={ BenchFormContainer } /> */}
        <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />

    </div>
);
export default App;