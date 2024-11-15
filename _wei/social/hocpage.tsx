//   renderSimplePage.tsx

// 导入 SimplePage 组件
// import SimplePage from "./view-port";
import SimplePage from "./simple-page";
import ButtonWithIcon from "./with-hoc-social";

// 调用高阶组件函数，传入 SimplePage 组件，得到一个新的组件
const Hocpage = ButtonWithIcon(SimplePage);

// 导出或渲染新的组件
export default Hocpage;
