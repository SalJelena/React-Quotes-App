import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// class App extends React.Component {
//   this.state = {

//   }
//   render() {
//     return ()
//   }
// }

// const App = () => {
//   return (
//     <p>Hello</p>
//   )
// }

// const citati = [
//   'Keep smiling, because life is a beautiful thing and theres so much to smile about. - ...',
//   'Life is a long lesson in humility. - ...',
//   'In three words I can sum up everything Ive learned about life: it goes on. - ...',
//   'Love the life you live. ...',
//   'Life is either a daring adventure or nothing at all. -'
// ] // prosledilo bi se dole kao props u App komponenti citati={citati}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

