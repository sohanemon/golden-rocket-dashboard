import Actions from './actions';
import Hero from './hero';
import Statistics from './statistics';

export default function Home() {
  return (
    <main className='h-screen p-10 overflow-x-hidden overflow-y-scroll grow box'>
      <Actions />
      <Hero />
      <Statistics />
    </main>
  );
}
