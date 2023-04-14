import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart12 = () => {
  const divRef = useRef(null);
  const data = [
    { value: 0.13, name: "上海" },
    { value: 0.15, name: "江苏" },
    { value: 0.17, name: "浙江" },
    { value: 0.17, name: "安徽" },
    { value: 0.12, name: "福建" },
    { value: 0.2, name: "江西" },
    { value: 0.24, name: "山东" },
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
        legend: {
          orient: "vertical",
          left: "left",
          top: "center",
          color: "white",
          textStyle: {
            fontSize: px(16),
            color: "white",
          },
          itemWidth: px(10),
          itemHeight: px(10),
          formatter(name) {
            const value = data.find((i) => i.name === name)?.value * 100 + "%";
            return name + " " + value;
          },
        },
        series: [
          {
            center: ["60%", "50%"],
            type: "pie",
            radius: "80%",
            label: { show: false },
            labelLine: { show: false },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
    </div>
  );
};
