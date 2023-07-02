import Actions from './actions';
import Hero from './hero';

export default function Home() {
  return (
    <main className='p-10 grow'>
      <Actions />
      <Hero />
    </main>
  );
}
