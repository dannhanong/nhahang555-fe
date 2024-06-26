import React from 'react';
import { ChartData, ChartDataset } from 'chart.js';
import { LineChartData } from '../../models/LineChartData';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController } from 'chart.js';

// Đăng ký các thành phần và bộ điều khiển cần thiết
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

interface LineChartStatiscalProps {
  data: LineChartData[];
}

const LineChartStatiscal: React.FC<LineChartStatiscalProps> = ({ data }) => {
  const lineChartData: ChartData<'line', number[], string> = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Lợi nhuận',
        data: data.map(item => item.revenue),
        fill: false,
        borderColor: '#FEAF39',
        tension: 0.1,
      },
      {
        label: 'Chi phí',
        data: data.map(item => item.expense),
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={lineChartData} />
    </div>
  );
};

export default LineChartStatiscal;
