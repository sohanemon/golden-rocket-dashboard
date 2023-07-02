import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <section className='flex flex-col items-center h-screen px-2 py-10 border-r md:px-6 min-w-fit border-theme-border'>
      <div className='flex flex-col space-y-9 grow'>
        <Link href='/'>
          <Image
            src={'/assets/logo.svg'}
            alt='logo'
            height={48}
            className='rounded-full '
            width={48}
          />
        </Link>
        <Link href='/'>
          <Image
            src={'/assets/category.svg'}
            alt='logo'
            height={48}
            className='p-3 rounded-xl gradient'
            width={48}
          />
        </Link>
      </div>
      <div className='flex flex-col gap-6 '>
        {link.map((_) => (
          <Link href={_} key={_}>
            <Image src={`/assets/${_}.svg`} alt={_} height={24} width={24} />
          </Link>
        ))}
      </div>
    </section>
  );
}

const link = ['telegram', 'twitter', 'else'];
