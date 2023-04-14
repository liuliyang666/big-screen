import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        legend: {
          bottom: px(10),
          color: "white",
          itemWidth: px(30),
          itemHeight: px(16),
          textStyle: {
            color: "white",
            fontSize: px(16),
          },
        },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(70),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [2017, 2018, 2019, 2020, 2021, 2022],
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            name: "诈骗",
            type: "line",
            data: [0.09, 0.12, 0.15, 0.18, 0.21, 0.24].reverse(),
          },

          {
            name: "盗窃",
            type: "line",
            data: [0.03, 0.05, 0.07, 0.09, 0.11, 0.13].reverse(),
          },
          {
            name: "故意杀人",
            type: "line",
            data: [0.09, 0.11, 0.13, 0.15, 0.17, 0.19].reverse(),
          },
          {
            name: "故意伤人",
            type: "line",
            data: [
              0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15,
            ].reverse(),
          },
          {
            name: "其他",
            type: "line",
            data: [
              0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1,
            ].reverse(),
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
        })),
      })
    );
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
