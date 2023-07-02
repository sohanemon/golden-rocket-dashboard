'use client';
import * as React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  LineChart as LChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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
      className='max-sm:scale-75'
      margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
    >
      <defs>
        <linearGradient id={color.slice(1)} x1='0' y1='0' x2='0' y2='1'>
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
        fill={`url(${color})`}
      />
    </AreaChart>
  );
}
