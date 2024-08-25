import { Hero, CustomerReview, Services, PopularProduct, SpecialOffer, SuperQuality, Footer } from './sections'
import Nav from './components/Nav'
import { navLinks } from './constants'
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './app/store';


function App() {

  
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <main className='relative'>
            <Nav />

            <section className='xl:padding-l wide:padding-r padding-b'>
              <Hero />
            </section>

            <section className='padding'>
              <PopularProduct />
            </section>
            <section className='padding'>
              <SuperQuality />
            </section>
            <section className='padding-x py-10'>
              <Services />
            </section>
            <section className='padding'>
              <SpecialOffer />
            </section>
            <section className='bg-pale-blue'>
              <CustomerReview />
            </section>

            <section className='bg-black padding-x pading-t pb-8'>
              <Footer />
            </section>
          </main>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
