import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const Context = createContext(null);

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    document.getElementById('root')
);