import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDom from 'react-dom'
import Login from './Login';
// import Oi from './waiter';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
*/

ReactDom.render(
  <>
    <Login/>
    {/* <Oi/> */}
  </>,
  document.getElementById('root')
)