import React from "react";

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>类型</th>
          <th>数量</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4}>盗窃</td>
          <td>翻窗入室</td>
          <td>15</td>
          <td rowSpan={4}>94</td>
        </tr>
        <tr>
          <td>撬门入室</td>
          <td>23</td>
        </tr>
        <tr>
          <td>技术开锁</td>
          <td>20</td>
        </tr>
        <tr>
          <td>直接入室</td>
          <td>36</td>
        </tr>
        <tr>
          <td rowSpan={2}>抢劫</td>
          <td>飞车抢劫</td>
          <td>13</td>
          <td rowSpan={2}>43</td>
        </tr>
        <tr>
          <td>徒手抢劫</td>
          <td>30</td>
        </tr>
        <tr>
          <td rowSpan={3}>扒窃</td>
          <td>公交扒窃</td>
          <td>42</td>
          <td rowSpan={3}>132</td>
        </tr>
        <tr>
          <td>车站扒窃</td>
          <td>40</td>
        </tr>
        <tr>
          <td>街面扒窃</td>
          <td>50</td>
        </tr>
        <tr>
          <td rowSpan={2}>诈骗</td>
          <td>传单诈骗</td>
          <td>90</td>
          <td rowSpan={2}>200</td>
        </tr>
        <tr>
          <td>手机诈骗</td>
          <td>110</td>
        </tr>
      </tbody>
    </table>
  );
};
