import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartDataRevenue } from '../../models/ChartDataRevenue';

interface BarChartProps {
  data: ChartDataRevenue[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Lợi nhuận',
        backgroundColor: '#FEAF39',
        // borderColor: 'rgba(75,192,192,1)',
        // borderWidth: 1,
        hoverBackgroundColor: '#FEAF19',
        // hoverBorderColor: 'rgba(75,192,192,1)',
        data: data.map(item => item.revenue),
      }
    ],
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;