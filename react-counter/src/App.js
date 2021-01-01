import './app.css';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
// import createSagaMiddleware from 'redux-saga' 

// const saga = createSagaMiddleware();

function App({ count, increment, decrement, reset  }) {
  
console.log()
  return (
    <div className="App">
      <h2 className='title'>счетчик: {count}<span id='counter'></span></h2>
      <div className='group-buttons'>
        <button onClick={increment}><span id='inc'>+ ({count+1})</span></button>
        <button onClick={decrement}><span id='dec'>- ({count-1})</span></button>
        <button onClick={reset}><span>сброс</span></button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state
  }
};

export default connect(mapStateToProps, actions)(App);
