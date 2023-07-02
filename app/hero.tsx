import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative grid grid-cols-3 p-3 ring-1 ring-theme-border rounded-xl lg:p-14'>
      <div className='text-4xl font-bold lg:col-span-2 col-span-full'>
        <p>Welcome to the </p>
        <p className='mt-2 text-transparent pointer-events-none gradient bg-clip-text'>
          Golden Rocket Dashboard
        </p>
        <p className='mt-8 text-lg font-normal leading-6'>
          Here you can track the ongoing progress regarding the $ROCKET token.
          This dashboard provides real time updates on the TVB, Circulating
          Supply, Percentage Burnt & Current Marketcap of the Golden Rocket
          token
        </p>
      </div>
      <Image
        src={'/assets/rocket.svg'}
        alt='rocket'
        height={330}
        width={330}
        className='absolute inset-0 ml-auto duration-1000 ease-linear -z-10 fly'
      />
    </section>
  );
}
