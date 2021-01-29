// 导入组件，组件必须声明 name
import FlInput from './src'

FlInput.install = function (Vue) {
    Vue.component(FlInput.name, FlInput)
}
// 导出组件
export default FlInput