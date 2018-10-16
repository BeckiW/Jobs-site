import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import "font-awesome/fonts/fontawesome-webfont.eot";
import "font-awesome/fonts/fontawesome-webfont.svg";
import "font-awesome/fonts/fontawesome-webfont.ttf";
import "font-awesome/fonts/fontawesome-webfont.woff";
import "font-awesome/fonts/fontawesome-webfont.woff";

import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
