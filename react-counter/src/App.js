import './app.css';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
// import createSagaMiddleware from 'redux-saga' 

// const saga = createSagaMiddleware();

function App({counter, disabled, increment, decrement, reset }) {
  console.log(counter)
  return (
    <div className="App">
      <h2 className='title'>счетчик: {counter}<span id='counter'></span></h2>
      <div className='group-buttons'>
        <button disabled={disabled} onClick={increment}><span>+ ({counter+1})</span></button>
        <button disabled={disabled} onClick={decrement}><span>- ({counter-1})</span></button>
        <button disabled={disabled} onClick={reset}><span>сброс</span></button>
        {/* <button ><span>сменить фон</span></button> */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
    disabled: state.buttonsReducer
  }
};

export default connect(mapStateToProps, actions)(App);
