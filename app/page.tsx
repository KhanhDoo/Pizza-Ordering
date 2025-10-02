import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeader from '@/components/layout/SectionHeader';  

export default function Home() {
  return (
    <> 
      <Hero />
      <HomeMenu />
      <section className="my-20 text-center">
        <SectionHeader
          subHeader="Our Story"
          mainHeader="About us" />
        <div className='text-gray-600 max-w-2xl mx-auto flex flex-col gap-4'> 
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className="my-20 text-center flex flex-col gap-6">
        <SectionHeader
          subHeader={ 'Dont\'t hesitate'}
          mainHeader={'Contact us' }
        />
        <div className='mt-8'>
          <a className='text-4xl underline text-gray-500' href="tel:+84375343172">
          +84 375 343 172
        </a>
        </div>
      </section>
    </>
  );
}
