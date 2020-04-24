import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/app';
import ErrorBoundary from "./components/error-boundary";
import DBService from "./services/db-service";
import {DBServiceProvider} from "./components/db-service-context";

import store from "./store";

const dbService = new DBService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <DBServiceProvider value={dbService}>
                <Router>
                    <App />
                </Router>
            </DBServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
