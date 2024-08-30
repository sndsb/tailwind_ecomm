import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './app/store';
import Router from './routing/route';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </PersistGate>
      </Provider>

    </>
  )
}

export default App
