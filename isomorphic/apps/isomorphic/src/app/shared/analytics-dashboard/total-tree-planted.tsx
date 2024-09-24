'use client';
import WidgetCard from '@core/components/cards/widget-card';
import { Area, Bar, XAxis, YAxis, Tooltip, ComposedChart, ResponsiveContainer } from 'recharts';
import { Badge } from 'rizzui';
import cn from '@core/utils/class-names';
import { useMedia } from '@core/hooks/use-media';
import { CustomYAxisTick } from '@core/components/charts/custom-yaxis-tick';
import { CustomTooltip } from '@core/components/charts/custom-tooltip';
import ButtonGroupAction from '@core/components/charts/button-group-action';
import SimpleBar from '@core/ui/simplebar';
import { useState } from 'react';


// Dummy data
const yearData = [
    { label: 'Jan', newUser: 5000, user: 1600 },
    { label: 'Feb', newUser: 8500, user: 2000 },
    { label: 'Mar', newUser: 7000, user: 3000 },
    { label: 'Apr', newUser: 5780, user: 3908 },
    { label: 'May', newUser: 4890, user: 2500 },
    { label: 'Jun', newUser: 8000, user: 3200 },
    { label: 'Jul', newUser: 4890, user: 2500 },
    { label: 'Aug', newUser: 3780, user: 3908 },
    { label: 'Sep', newUser: 7800, user: 2800 },
    { label: 'Oct', newUser: 5780, user: 1908 },
    { label: 'Nov', newUser: 4780, user: 1908 },
    { label: 'Dec', newUser: 7500, user: 3000 },
];


const weekData = [
    { label: 'Day 1', newUser: 100, user: 50 },
    { label: 'Day 2', newUser: 200, user: 100 },
    { label: 'Day 3', newUser: 150, user: 80 },
    { label: 'Day 4', newUser: 300, user: 120 },
    { label: 'Day 5', newUser: 250, user: 150 },
    { label: 'Day 6', newUser: 400, user: 180 },
    { label: 'Day 7', newUser: 350, user: 200 },
];


const monthData = [
    { label: 'Week 1', newUser: 1200, user: 600 },
    { label: 'Week 2', newUser: 1500, user: 800 },
    { label: 'Week 3', newUser: 1700, user: 900 },
    { label: 'Week 4', newUser: 2000, user: 1000 },
];


const filterOptions = ['Week', 'Month', 'Year'];


export default function UserMetrics({ className }: { className?: string }) {
    const isMediumScreen = useMedia('(max-width: 1200px)', false);
    const isTablet = useMedia('(max-width: 800px)', false);
    const [filteredData, setFilteredData] = useState(yearData); // default to year data


    function handleFilterBy(option: string) {
        console.log('Audience Metrics Filter:', option);


        switch (option) {
            case 'Week':
                setFilteredData(weekData);
                break;
            case 'Month':
                setFilteredData(monthData);
                break;
            case 'Year':
                setFilteredData(yearData);
                break;
            default:
                setFilteredData(yearData);
        }
    }


    return (
        <WidgetCard
            title={'Total Tree Planted'}
            description={
                <>
                    <Badge renderAsDot className="me-0.5 bg-[#d4dcfa] dark:bg-[#7c88b2]" /> New Users
                    <Badge renderAsDot className="me-0.5 ms-4 bg-[#5a5fd7]" /> Users
                </>
            }
            descriptionClassName="text-gray-500 mt-1.5 mb-3 @lg:mb-0"
            action={
                <ButtonGroupAction
                    options={filterOptions}
                    onChange={(data) => handleFilterBy(data)}
                    className="-ms-2 mb-3 @lg:mb-0 @lg:ms-0"
                />
            }
            headerClassName="flex-col @lg:flex-row"
            rounded="lg"
            className={className}
        >
            <SimpleBar>
                <div className={cn('h-[420px] w-full pt-9 @7xl:h-[480px]')}>
                    <ResponsiveContainer width="100%" {...(isTablet && { minWidth: '700px' })} height="100%">
                        <ComposedChart
                            data={filteredData}
                            barSize={isMediumScreen ? 20 : 28}
                            className="[& .recharts-cartesian-axis-tick-value]:fill-gray-500 [& .recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
                        >
                            <XAxis dataKey="label" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} tick={<CustomYAxisTick />} />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar
                                dataKey="user"
                                fill="#d4dcfa"
                                radius={[4, 4, 0, 0]}
                                className="dark:fill-[#7c88b2]"
                                {...(isTablet && { stackId: 'userMetrics' })}
                            />
                            <Bar
                                dataKey="newUser"
                                fill="#5a5fd7"
                                {...(isTablet ? { stackId: 'userMetrics' } : { radius: [4, 4, 0, 0] })}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>


                </div>
            </SimpleBar>
        </WidgetCard>
    );
}


