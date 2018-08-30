/**
 * Created by Administrator on 2018/4/24.
 */
const MyPlugin = {
  // install方法是必需的
// // 包含两个参数：Vue 构造器，一个可选的选项对象

  install(Vue, options) {
    console.log(Vue)
    Vue.prototype.test = function test(type,data) {
      console.log(type)
       let option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: type,
            data: data
          }]
        }
      return option
    }
  }
};
export default MyPlugin

