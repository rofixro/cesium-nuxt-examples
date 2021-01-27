// 导入组件，组件必须声明 name
import FlButton from './src'

FlButton.install = function (Vue) {
    Vue.component(FlButton.name, FlButton)
}
// 导出组件
export default FlButton