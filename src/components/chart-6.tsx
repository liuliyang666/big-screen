import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import china from "../geo/china.json";
import AreaArray from "../shared/area";

export const Chart6 = () => {
  const divRef = useRef(null);
  let mTime = undefined;
  const myChart = useRef(null);
  let index = -1;

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    let chartOption = {
      xAxis: { show: false },
      yAxis: { show: false },
      tooltip: {
        triggerOn: "mousemove | click",
        backgroundColor: "rgba(15, 17, 58)",
        borderColor: "rgba(84, 112, 198)",
        borderWidth: px(2),
        transitionDuration: 0.2,
        textStyle: {
          color: "white",
          fontSize: px(16),
        },
      },
      visualMap: {
        min: 0,
        max: 34,
        left: "5%",
        top: "bottom",
        text: ["高", "低"],
        inRange: {
          color: [
            "rgba(109,127,238,1)",
            "rgba(109,127,238,0.8)",
            "rgba(109,127,238,0.6)",
            "rgba(109,127,238,0.5)",
            "rgba(109,127,238,0.4)",
            "rgba(109,127,238,0.3)",
            "rgba(109,127,238,0.2)",
            "rgba(109,127,238,0.1)",
            "rgba(109,127,238,0.05)",
          ],
        },
        show: true,
        textStyle: {
          color: "white",
          fontSize: px(16),
        },
      },
      series: [
        {
          name: "分布情况",
          type: "map",
          map: "CN", // 自定义扩展图表类型
          label: { show: false, color: "white" },
          itemStyle: {
            shadowColor: "#01091f",
            shadowBlur: px(2),
            color: "rgba(255,255,255,0)",
            areaColor: "#010D3D",
            borderColor: "#2891BD",
            emphasis: {
              label: { show: true, color: "white" },
              areaColor: "#010D3D",
            },
          },
          data: AreaArray(),
        },
      ],
    };
    myChart.current.setOption(createEchartsOptions(chartOption));
  }, []);
  const mapActive = () => {
    const dataLength = china.features.length;
    mTime = setInterval(() => {
      myChart.current.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: index,
      });
      index++;
      myChart.current.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: index,
      });
      myChart.current.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: index,
      });
      if (index > dataLength) {
        return (index = 0);
      }
    }, 2000);
  };
  useEffect(() => {
    mapActive();
  }, []);
  const onMouseOver = () => {
    clearInterval(mTime);
    mTime = undefined;
    console.log(mTime);
    myChart.current.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: index,
    });
  };
  const onMouseOut = () => {
    mapActive();
  };

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          ref={divRef}
          className="chart"
        />

        <div className="notes">此地图仅显示中国部分区域</div>
      </div>
    </div>
  );
};
