import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@styles/Index.css';



// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));




document.oncontextmenu = function () {
	return false;
};
// document.onpaste = function (e) {
//     e.preventDefault();
//     alert('esta acción está prohibida');
// };
document.oncopy = function (e) {
    e.preventDefault();
    alert('esta acción está prohibida');
};


