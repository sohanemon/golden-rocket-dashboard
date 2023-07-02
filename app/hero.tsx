import Image from 'next/image';

export default function Hero() {
  return (
    <section className='grid grid-cols-3 ring-1 ring-theme-border rounded-xl p-14'>
      <div className='col-span-2 text-4xl font-bold'>
        <p>Welcome to the </p>
        <p className='mt-2 text-transparent gradient bg-clip-text'>
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
        height={383}
        width={383}
        className='duration-1000 ease-linear fly'
      />
    </section>
  );
}
