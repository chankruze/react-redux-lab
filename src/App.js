import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'
import HotDogContainer from './components/HotDogContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <NewCakeContainer />
        {/* <HooksCakeContainer /> */}
        <IceCreamContainer />
        <HotDogContainer />
      </div>
    </Provider>
  );
}

export default App
