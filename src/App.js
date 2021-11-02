import logo from './logo.svg';
import './App.css';
import { store } from './redux/configStore.js';
import { Provider } from 'react-redux';
import BaiTapGameOanTuTi from './BaiTapGameOanTuTi/BaiTapGameOanTuTi';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapGameOanTuTi />
      </Provider>
    </div>
  );
}

export default App;
