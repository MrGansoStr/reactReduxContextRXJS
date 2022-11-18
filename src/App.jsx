import Component1 from './components/RxJS/Component1.jsx';
import Component2 from './components/RxJS/Component2.jsx';

import './App.css';
import Page1 from './Pages/Page1/Page1.jsx';
import { Provider } from 'react-redux';
import PageStore from './redux/store.js';
import ComponentRedux1 from './components/Redux/ComponentRedux1.jsx';
function App() {

  return (
    <div className="App">
      <Provider store={PageStore}>
        <h2>RxJS</h2>
        <Component1 />
        <Component2 />
        <h2>Context</h2>
        <Page1 />
        <h2>Redux</h2>
        <ComponentRedux1 />
      </Provider>
    </div>
  )
}

export default App
