import service1 from 'services/service1.js';
import temp from 'services/temp/index.js';

console.log('Hello world!');
console.log(service1);
console.log(temp);

console.log(__DEV__);
if (__DEV__) {
  console.log('dev');
}

import React from 'react';
import ReactDOM from 'react-dom';

// import Game from './components/Game';

ReactDOM.render((
  <div>
    hello {JSON.stringify(service1)}
    {JSON.stringify(temp)}
  </div>),
  document.getElementById('root')
);

