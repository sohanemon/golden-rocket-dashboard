'use client';
import { Cell, PieChart as Chart, Pie } from 'recharts';

const data = [
  { name: 'Group B', value: 69 },
  { name: 'Group A', value: 31 },
];

export default function PieChart() {
  return (
    <Chart
      width={330}
      height={250}
      style={{ transform: 'rotate(269deg) scale(1, -1)' }}
    >
      <defs>
        <linearGradient id='lol' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#f9b51b' stopOpacity={1} />
          <stop offset='95%' stopColor='#d24b58' stopOpacity={1} />
        </linearGradient>
      </defs>
      <Pie
        data={data}
        innerRadius={100}
        outerRadius={120}
        fill='#282828'
        stroke='#282828'
        dataKey='value'
      >
        <Cell key={`cell-1`} fill={`url(#lol)`} />
      </Pie>
    </Chart>
  );
}
