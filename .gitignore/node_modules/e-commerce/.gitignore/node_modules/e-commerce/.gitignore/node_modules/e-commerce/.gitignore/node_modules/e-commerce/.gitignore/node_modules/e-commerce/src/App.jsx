
import { Provider } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router'
import persistor, { store} from './reducer/store'
import { PersistGate } from 'redux-persist/integration/react'






function App() {
  
  return<>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <Header/>
  <Outlet/>
  <Footer/>
  </PersistGate>
  </Provider>
  </>
}

export default App
