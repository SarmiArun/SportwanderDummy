import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  // {
  //   name: 'Team A',
  //   type: 'column',
  //   data: [23, 100, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  // },
  {
    name: 'Registered',
    type: 'line',
    data: [44, 100, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'Paid',
    type: 'line',
    data: [30, 100, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2, 2] },
    // plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'solid'] },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} registered`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Marathon Registrations" subheader="" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
