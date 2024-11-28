import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './PieChart.less';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface PullRequest {
  state: 'open' | 'closed';
}

interface PieChartProps {
  data: PullRequest[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const counts = data.reduce(
    (acc, pr) => {
      if (pr.state === 'open') acc.open++;
      else if (pr.state === 'closed') acc.closed++;
      return acc;
    },
    { open: 0, closed: 0 }
  );

  const chartData = {
    labels: ['Open', 'Closed'],
    datasets: [
      {
        data: [counts.open, counts.closed],
        backgroundColor: ['#de4e2a', '#ffbb96'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h2>Pull Request Analytics</h2>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
