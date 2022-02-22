/**
 * @see
 * - https://github.com/tradingview/lightweight-charts/
 * - https://www.tradingview.com/lightweight-charts/
 */

import styles from './Chart.module.css'
import React, {useRef} from "react";
import {createChart} from 'lightweight-charts';

export default class Chart extends React.Component {

  constructor(props) {
    super(props);

    this.container = React.createRef();

    // Initially, `data` could be an empty array. Chart will be updated on state change.
    this.state = {
      dummy_data_ohlc: [
        { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
        { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
        { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
        { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
        { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
        { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
        { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
        { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
        { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
        { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
      ],
      dummy_data_values: [
        { time: '2018-12-22', value: 32.51 },
        { time: '2018-12-23', value: 31.11 },
        { time: '2018-12-24', value: 27.02 },
        { time: '2018-12-25', value: 27.32 },
        { time: '2018-12-26', value: 25.17 },
        { time: '2018-12-27', value: 28.89 },
        { time: '2018-12-28', value: 25.46 },
        { time: '2018-12-29', value: 23.92 },
        { time: '2018-12-30', value: 22.68 },
        { time: '2018-12-31', value: 22.67 },
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
      ]
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.lineSeries.setData(this.state.dummy_data_values);
    this.candlestickSeries.setData(this.state.dummy_data_ohlc);
    this.volumeSeries.setData(this.state.dummy_data_values);
  }

  componentDidMount() {
    // Chart config.
    this.chart = createChart(this.container.current, {
      width: this.clientWidth,
      height: 300,
      grid: {
        vertLines: {
          color: 'rgba(31, 31, 31, 0)',
        },
        horzLines: {
          color: 'rgba(31, 31, 31, 0.3)',
        },
      },
      layout: {
        backgroundColor: '#313131',
        textColor: '#777777',
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.2,
          bottom: 0.2,
        },
        borderVisible: true,
      },
    });
    this.candlestickSeries = this.chart.addCandlestickSeries();
    this.lineSeries = this.chart.addLineSeries();
    this.setState({data: this.state.dummy_data_values});
    this.volumeSeries = this.chart.addHistogramSeries({
      color: 'rgba(76, 175, 80, 0.5)',
      priceFormat: {
        type: 'volume',
      },
      priceLineVisible: false,
      overlay: true,
      scaleMargins: {
        top: 0.85,
        bottom: 0,
      },
    });
  }

  render() {
    return (
      <div className={styles.chart} ref={this.container}>
      </div>
    )
  }
}
