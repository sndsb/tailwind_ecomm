import {Hero,CustomerReview,Services,PopularProduct,SpecialOffer,SuperQuality} from './sections'
import Nav from './components/Nav'
import { navLinks } from './constants'

function App() {

  return (
    <>
      <main className='relative'>
        <Nav />

        <section className='xl:padding-1 wide:padding-r padding-b'>
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
        <section className='padding-x sm:py-32 py-16 w-full'>
          Subscribe
        </section>
        <section className='bg-black padding-x pading-t pb-8'>
          Footer
        </section>
      </main>
    </>
  )
}

export default App
