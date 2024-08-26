import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './app/store';
import Router from './routing/route';


function App() {

  
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
         <Router />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
