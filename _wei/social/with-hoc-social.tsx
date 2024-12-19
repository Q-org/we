import React, { ReactElement, useEffect, useState } from "react";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

import FloatWindow from "./float-window";

// 导入 useVheight 这个自定义的 Hook
import useVheight from "@wei/ui/src/lib/provider/ViewportSizeProvider";
import { Box } from "@mui/system";

// 定义一个高阶组件的函数，它接受一个组件作为参数，并返回一个新的组件
// 给 React.ComponentType 类型传递一个类型参数，表示按钮组件的属性
export default function withHocSocial(
  WrappedComponent: React.ComponentType<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >,
): React.ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  // 返回一个新的组件，它渲染原有的组件和 icon 组件
  return function (
    props: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ): ReactElement {
    const vheight = useVheight(
      "VIEWPORT_SIZE",
      //@ts-ignore
      320,
    );
    return (
      // 使用 React.Fragment 来包裹原有的组件和 icon 组件
      <>
        {/* 渲染原有的组件，并传递 props */}
        <WrappedComponent {...props} />
        {/* 渲染 icon 组件，并设置样式 */}
        <Box
          //@ts-ignore
          sx={{
            position: "fixed",
            top: vheight,
            right: 40,
            zIndex: 999,
            height: "20vh",
          }}
        >
          <FloatWindow />
        </Box>
      </>
    );
  };
}
