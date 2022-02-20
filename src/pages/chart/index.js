import Head from 'next/head'
import dynamic from 'next/dynamic';
import styles from './Chart.module.css'

import { createChart } from 'lightweight-charts';

// @fixme: https://github.com/tradingview/lightweight-charts/issues/543
// https://github.com/tradingview/lightweight-charts/issues/936
const chart = createChart(document.body, { width: 400, height: 300 });
// const chart = dynamic(() => import('@/components/Chart'), { loading: () => <p>Loading ...</p>, ssr: false });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);

export default function Chart() {
  return (
    <div className={styles.container}>
    </div>
  )
}
