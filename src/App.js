import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Data } from './components/Data';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Data />
      </div>
    </Provider>
  );
}

export default App;
