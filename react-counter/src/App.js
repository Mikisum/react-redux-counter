import './app.css';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

function App({counter, disabled, increment, decrement, reset, url, fetchBackground, loading, error }) {

  return (
    <div 
      className="App"
      style={{backgroundImage:`url(${url})`}}>
      <div className='filter'>
        <h2 className='title'>счетчик: {counter}<span id='counter'></span></h2>
        <div className='group-buttons'>
          <button disabled={disabled} onClick={increment}><span>+ ({counter+1})</span></button>
          <button disabled={disabled} onClick={decrement}><span>- ({counter-1})</span></button>
          <button disabled={disabled} onClick={reset}><span>сброс</span></button>
          <button 
            style={{width: '170px'}}
            disabled={disabled} onClick={fetchBackground}>
            {loading 
              ?<span>loading...</span> 
              : error
                ? <span>Error</span>
                :<span>Сменить  фон</span>} 
          </button>
        </div>
      </div>  
      
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.counterReducer,
    disabled: state.buttonsReducer,
    url: state.backgroundReducer.url,
    loading: state.backgroundReducer.loading,
    error: state.backgroundReducer.error
  }
};

export default connect(mapStateToProps, actions)(App);
