import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        <p className="text-xl font-montserrat text-coral-red"> Our Summer Collection  </p>

        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading=[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arraival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">
            Nike
          </span>  Shoes

        </h1>

        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.facere amet sunt deserunt doloremque. Voluptate.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img className="object-contain relative z-10" src={bigShoe1} />
      </div>
    </section>
  )
}

export default Hero