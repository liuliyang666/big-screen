import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "上海", 2021: 2, 2022: 3 },
    { name: "江苏", 2021: 2, 2022: 3 },
    { name: "浙江", 2021: 2, 2022: 3 },
    { name: "安徽", 2021: 2, 2022: 3 },
    { name: "福建", 2021: 2, 2022: 3 },
    { name: "江西", 2021: 2, 2022: 3 },
    { name: "山东", 2021: 2, 2022: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "上海", 2021: 2, 2022: Math.random() * 10 },
        { name: "江苏", 2021: 2, 2022: 3 },
        { name: "浙江", 2021: 2, 2022: 3 },
        { name: "安徽", 2021: 2, 2022: 3 },
        { name: "福建", 2021: 2, 2022: 3 },
        { name: "江西", 2021: 2, 2022: 3 },
        { name: "山东", 2021: 2, 2022: 3 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          axisTick: { show: false },
          type: "category",
          data: data.map((i) => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2021年",
            type: "bar",
            data: data.map((i) => i[2021]),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#2034F9",
                },
                {
                  offset: 1,
                  color: "#04A1FF",
                },
              ]),
            },
          },
          {
            name: "2022年",
            type: "bar",
            data: data.map((i) => i[2022]),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#B92AE8",
                },
                {
                  offset: 1,
                  color: "#6773E7",
                },
              ]),
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 2021年
        <span className="second" /> 2022年
      </div>
    </div>
  );
};
