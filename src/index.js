import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from "./services/UserService";
import {AppRouter} from "./routes/AppRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
    root.render(
        <React.StrictMode>
            <AppRouter />
        </React.StrictMode>
    );
}

UserService.initKeycloak(renderApp);
