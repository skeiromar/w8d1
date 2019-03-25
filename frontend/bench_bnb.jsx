import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import {Root} from './components/root';
import {login, logout, signup} from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {
        let preLoadedState = {
            entities: 
            {
                users: {
                    [window.currentUser.id] : window.currentUser
                }
            },
            session: {
                id: [window.currentUser.id]
            }
        }
        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.fetchBenches = fetchBenches;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    
    ReactDOM.render(<Root store={store}/>, root);
});

