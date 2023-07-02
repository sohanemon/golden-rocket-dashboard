import Image from 'next/image';
import LineChart from './lineChart';
import PieChart from './pie-chart';

export default function Statistics() {
  return (
    <section className='grid grid-cols-1 gap-6 mt-6 xl:grid-cols-2'>
      {data.map((_) => (
        <div
          className='flex flex-col items-center justify-between p-5 max-md:pt-10 md:flex-row ring-1 ring-theme-border rounded-xl'
          key={_.title}
        >
          <div>
            <p className='text-xs sm:text-sm text-white/60'>Statistics</p>
            <p className='my-1 text-xs font-semibold sm:text-sm '>{_.title}</p>
            <p className='my-4 text-2xl font-semibold md:text-4xl whitespace-nowrap'>
              {_.amount}
            </p>
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
    chart: <LineChart color='#FF718B' />,
  },
  {
    title: 'PERCENTAGE BURNT',
    amount: '69%',
    chart: <PieChart />,
  },
  {
    title: 'CURRENT MARKET CAP',
    amount: '$ 342.954,56',
    trendValue: '+21.01%',
    increasing: true,
    chart: <LineChart color='#63D2A1' />,
  },
];
