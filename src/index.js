import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './ShowSubscribers.css';
import PhoneDirectory from './PhoneDirectory';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <PhoneDirectory/>,document.getElementById('root')
);


serviceWorker.register();
