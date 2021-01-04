import './app.css';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { AppStateType } from './redux/rootReducer';

type MapStatePropsType = {
  counter: number
  disabled: boolean
  increment: () => void
  decrement: () => void
  reset: () => void
  url: string
  fetchBackground: () => void
  loading: boolean
  error: boolean
}

let App: React.FC<MapStatePropsType> = ({counter, disabled, increment, decrement, reset, url, fetchBackground, loading, error }) => {

  return (
    <div className="App">
      <div className='bg' style={{backgroundImage:`url(${url})`}}></div>  
      <div className='content'>
        <h2 className='title'>counter: {counter}<span id='counter'></span></h2>
        <div className='group-buttons'>
          <button disabled={disabled} onClick={increment}><span>+ ({counter+1})</span></button>
          <button disabled={disabled} onClick={decrement}><span>- ({counter-1})</span></button>
          <button disabled={disabled} onClick={reset}><span>reset (0)</span></button>
          <button 
            disabled={disabled} onClick={fetchBackground}>
            {loading 
              ?<span className="loading"></span>
              : error
                ? <span>Error</span>
                :<span>theme</span>} 
          </button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state: AppStateType) => {
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
