import React from "react";
import styles from './Chart.module.css'
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../../components/Chart"), {ssr: false});

export default class ChartPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Chart/>
      </div>
    )
  }
}
