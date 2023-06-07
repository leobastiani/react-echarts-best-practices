import ReactEChartsCore from "echarts-for-react/lib/core";
import './App.css';
import echarts from './echarts';

const option = {
  xAxis: {
    type: "category",
  },
  yAxis: {},
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line"
    }
  ]
}

function App() {
  return <ReactEChartsCore
    echarts={echarts}
    option={option}
  />
}
export default App;
