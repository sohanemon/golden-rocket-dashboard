import Actions from './actions';
import Hero from './hero';
import Statistics from './statistics';

export default function Home() {
  return (
    <main className='p-10 grow'>
      <Actions />
      <Hero />
      <Statistics />
    </main>
  );
}
