import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartsProps {
  chartType: 'line' | 'bar' | 'pie' | 'doughnut';
}

export default function Charts(props: Partial<ChartsProps>) {
  const { chartType } = props;
  const canvasEl = useRef(null);

  const colors = {
    purple: {
      default: 'rgba(149, 76, 233, 1)',
      half: 'rgba(149, 76, 233, 0.5)',
      quarter: 'rgba(149, 76, 233, 0.25)',
      zero: 'rgba(149, 76, 233, 0)',
    },
    indigo: {
      default: 'rgba(80, 102, 120, 1)',
      quarter: 'rgba(80, 102, 120, 0.25)',
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const aktif = [1849, 2039, 3399, 2832, 2538, 3103, 3281, 2495, 2593, 2532];
    const tidakAktif = [120, 302, 250, 253, 279, 180, 59, 392, 123, 420];

    const labels = [
      'Ganjil 2017',
      'Genap 2017',
      'Ganjil 2018',
      'Genap 2018',
      'Ganjil 2019',
      'Genap 2019',
      'Ganjil 2020',
      'Genap 2020',
      'Ganjil 2021',
      'Genap 2021',
    ];

    const data = {
      labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: 'Aktif',
          data: aktif,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
        {
          backgroundColor: 'green',
          label: 'Tidak Aktif',
          data: tidakAktif,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };

    const config = {
      type: chartType,
      data,
    };

    const myLineChart = new Chart(ctx, config as any);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div>
      {/* <span>Data Mahasiswa</span> */}
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
