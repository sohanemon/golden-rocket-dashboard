'use client';
import { Area, AreaChart, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    value: 0,
  },
  {
    name: 'Page B',
    value: 1100,
  },
  {
    name: 'Page C',
    value: 500,
  },
  {
    name: 'Page D',
    value: 2780,
  },
  {
    name: 'Page E',
    value: 1200,
  },
  {
    name: 'Page F',
    value: 1890,
  },
  {
    name: 'Page G',
    value: 0,
  },
];

export default function LineChart({ color }: { color: string }) {
  return (
    <AreaChart
      width={330}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id='value' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor={color} stopOpacity={0.8} />
          <stop offset='95%' stopColor={color} stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <Tooltip />
      <Area
        type='monotone'
        dataKey='value'
        stroke={color}
        strokeWidth={2}
        fillOpacity={1}
        fill='url(#value)'
      />
    </AreaChart>
  );
}
