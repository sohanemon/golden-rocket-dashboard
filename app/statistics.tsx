import Image from 'next/image';
import LineChart from './lineChart';

export default function Statistics() {
  return (
    <section className='grid grid-cols-2 gap-6 mt-6'>
      {data.map((_) => (
        <div
          className='flex items-center p-5 ring-1 ring-theme-border rounded-xl'
          key={_.title}
        >
          <div>
            <p className='text-sm text-white/60'>Statistics</p>
            <p className='my-1 text-sm font-semibold'>{_.title}</p>
            <p className='my-4 text-4xl font-semibold'>{_.amount}</p>
            {_.increasing !== undefined && (
              <button
                className={`p-2.5 rounded-lg  flex items-center gap-2 text-sm ${
                  _.increasing
                    ? 'text-theme-teal bg-theme-teal/10'
                    : 'text-theme-pink bg-theme-pink/10'
                }`}
              >
                {_.trendValue}
                <Image
                  src={`/assets/${_.increasing ? 'up' : 'down'}.svg`}
                  alt='icon'
                  width={14}
                  height={10}
                />
              </button>
            )}
          </div>
          {_.chart}
        </div>
      ))}
    </section>
  );
}
const data = [
  {
    title: 'TOTAL VALUE BURNT',
    amount: '$ 342.954,56',
    trendValue: '+21.01%',
    increasing: true,
    chart: <LineChart color='#63D2A1' />,
  },
  {
    title: 'TOTAL CIRCULATING SUPPLY',
    amount: '342.954,56',
    trendValue: '+21.01%',
    increasing: false,
  },
  {
    title: 'PERCENTAGE BURNT',
    amount: '69%',
  },
  {
    title: 'CURRENT MARKET CAP',
    amount: '$ 342.954,56',
    trendValue: '+21.01%',
    increasing: true,
  },
];
