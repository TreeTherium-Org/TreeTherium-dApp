'use client';

import { Title, Text } from 'rizzui';
import WidgetCard from '@core/components/cards/widget-card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Individual', value: 2560 },
  { name: 'Groups', value: 2150 },
  { name: 'Organization', value: 2780 },
];
const COLORS = ['#B92E5D', '#6D1A36', '#D68585'];

export default function TopTrafficSource({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard title={'Tree Planting Participation'} rounded="lg" className={className}>
      <div className="h-96 w-full @sm:py-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className="[&_.recharts-sector:focus]:outline-none">
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={116}
              fill="#6D1A36"
              stroke="rgba(0,0,0,0)"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-6 @md:grid-cols-4">
        {data.map((item, index) => (
          <div key={item.name} className="text-center">
            <div className="mb-1.5 flex items-center justify-center">
              <span
                className="me-2 h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <Text as="span" className="whitespace-nowrap">
                {item.name}
              </Text>
            </div>
            <Title as="h5">{item.value}</Title>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
