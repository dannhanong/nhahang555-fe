import React from 'react'
import { Bar } from 'react-chartjs-2'

const StatisticalIndex: React.FC = () => {
    const data = async () => {
        const response = await fetch('http://localhost:5000/statistical');
        const data = await response.json();
        return data;
    }

  return (
    <div>
      {/* <Bar
        options={}
        data={}
        {...props}
        /> */}
    </div>
  )
}

export default StatisticalIndex
