import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartDataExpense } from '../../models/ChartDataExpense';

interface BarChartExpenseProps {
  data: ChartDataExpense[];
}

const BarChartExpense: React.FC<BarChartExpenseProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Chi phí',
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.6)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data.map(item => item.expense),
      }
    ],
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChartExpense;