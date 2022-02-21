import styles from './Chart.module.css'
import React, {useRef} from "react";
import {createChart} from 'lightweight-charts';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();

    // Initially, `data` could be an empty array. Chart will be updated on state change.
    this.state = {
      data: [
        {time: '2019-04-11', value: 80.01},
        {time: '2019-04-12', value: 96.63},
        {time: '2019-04-13', value: 76.64},
        {time: '2019-04-14', value: 81.89},
        {time: '2019-04-15', value: 74.43},
        {time: '2019-04-16', value: 80.01},
        {time: '2019-04-17', value: 96.63},
        {time: '2019-04-18', value: 76.64},
        {time: '2019-04-19', value: 81.89},
        {time: '2019-04-20', value: 74.43},
      ]
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.lineSeries.setData(this.state.data);
  }

  componentDidMount() {
    this.chart = createChart(this.container.current, {width: 400, height: 300});
    this.lineSeries = this.chart.addLineSeries();
    this.setState({data: this.state.data});
  }

  render() {
    return (
      <div className={styles.chart} ref={this.container}>
      </div>
    )
  }
}
