import Image from "next/image";
import FoodSlider from "../components/ui/FoodSlider";
import Category from "../components/ui/Category";
import Reservation from "../components/ui/Reservation";
import Footer from "../components/ui/Footer";
import { Reviews } from "@/components/ui/Reviews";



export default function Home() {
  return (
    <main className='container mx-auto px-4 md:px-[100px] lg:px-[170px] relative overflow-x-hidden'>
      <div className='flex md:flex-row flex-col-reverse md:space-x-20'>

        <div className='flex justify-center md:w-2/3  flex-col gap-6 '>
          <h1 className='text-black text-7xl text-center md:text-start text-primary'>Welcome to Foodie</h1>
          <h1 className='text-black text-5xl text-center md:text-start text-red'>Delicious</h1>
          <p className=' text-lg text-secondary text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio potenti morbi accumsan, convallis ultricies diam auctor. Est augue velit pulvinar ultrices orci, dapibus ultrices morbi. .</p>

          <div className='flex justify-center md:justify-start w-full'>
            <button className='text-white text-lg px-8 items-center py-2 border bg-black rounded-tr-2xl rounded-br-2xl rounded-tl-2xl '>
              Reserve
            </button >


          </div>
        </div>

        <div className=' top-0 items-center md:w-[400px] md:h-[500px] h-[600px] rounded-b-full bg-black flex flex-col gap-10 py-4 shadow-2xl sm:w-full sm:mt-4'>
          <div className='bg-black flex'>
            <h1 className='text-white text-5xl bg-black text-center md:mb-10 mb-[120px]'>FOODIE</h1>

          </div>
          <img src='/hero1.png' className='bg-black rounded-b-full items-center object-cover ' />

        </div>



      </div>


      <section className='mt-20'>
        <div>
          <FoodSlider />
        </div>
      </section>

      <section className='mt-20'>
        <div>
          <div><h1 className='text-center text-4xl  text-primary'>MADE WITH LOVE</h1></div>
          <Category />
        </div>
      </section>


      <section className='mt-20'>
        <div>
          <Reviews />
        </div>
      </section>

      <section className='mt-6 mb-6'>
        <div>
          <div><h1 className='text-center text-4xl mb-10 text-primary'>MAKE A RESERVATION</h1></div>
          <Reservation />
        </div>
      </section>

      <section className='mt-6 md:mb-6 mb-14'>
        <div>
          <Footer />
        </div>
      </section>

    </main>
  );
}
