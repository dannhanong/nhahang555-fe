import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import BarChart from '../chart/BarChart';
import { ChartDataRevenue } from '../../models/ChartDataRevenue';
import BarChartExpense from '../chart/BarChartExpense';
import { ChartDataExpense } from '../../models/ChartDataExpense';
import LineChartStatiscal from '../chart/LineChartStatiscal';
import { LineChartData } from '../../models/LineChartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticalIndex: React.FC = () => {
  const [chartDataRevenue, setChartDataRevenue] = useState<ChartDataRevenue[]>([]);
  const [chartDataExpense, setChartDataExpense] = useState<ChartDataExpense[]>([]);
  const [chartData, setChartData] = useState<LineChartData[]>([]);

  const getDataRevenue = async () => {
    const result = await axios.get('http://localhost:5000/chartData');
    setChartDataRevenue(result.data);
  };

  const getDataExpense = async () => {
    const result = await axios.get('http://localhost:5000/chartData');
    setChartDataExpense(result.data);
  };

  const getDataLineChart = async () => {
    const result = await axios.get('http://localhost:5000/chartData');
    setChartData(result.data);
  };

  useEffect(() => {
    getDataRevenue();
    getDataExpense();
    getDataLineChart();
  }, []);

  return (
    // <div style={{ display: 'flex', justifyContent: 'center' }}>
    //   <div style={{ justifyContent: 'center' }} className='d-flex'>
    //     <BarChart data={chartDataRevenue} />
    //     <BarChartExpense data={chartDataExpense} />
    //   </div>
    // </div>
    <div>
    <div className='row' style={{ justifyContent: 'center' }}>
      <div className="col-12 col-lg-4 d-flex">
          <div className="card flex-fill w-100">
              <div className="card-header">
                  <h5 className="card-title mb-0">Lợi Nhuận</h5>
              </div>
              <div className="card-body pt-2 pb-3">
                  <div className="chart chart-md"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                      <BarChart data={chartDataRevenue} />
                  </div>
              </div>
          </div>
      </div>
      <div className="col-12 col-lg-4 d-flex">
          <div className="card flex-fill w-100">
              <div className="card-header">
                  <h5 className="card-title mb-0">Chi Phí</h5>
              </div>
              <div className="card-body pt-2 pb-3">
                  <div className="chart chart-md"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                      <BarChartExpense data={chartDataExpense} />
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div className='row mt-3' style={{ justifyContent: 'center' }}>
      <div className="col-12 col-lg-4 d-flex">
          <div className="card flex-fill w-100">
              <div className="card-header">
                  <h5 className="card-title mb-0">Tổng Kết</h5>
              </div>
              <div className="card-body pt-2 pb-3">
                  <div className="chart chart-md"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                      <LineChartStatiscal data={chartData} />
                  </div>
              </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default StatisticalIndex;