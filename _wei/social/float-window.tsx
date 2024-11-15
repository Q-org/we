import * as React from "react";
import { makeStyles } from "@mui/styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CloseIcon from "@mui/icons-material/Close"; // 关闭
import { Theme } from "@mui/system";

import { ViewportSizeContext } from "@wei/ui/src/lib/provider/ViewportSizeProvider";
import useSocialActions /* , {
  Social,
} */ from "@wei/ui/src/lib/provider/ViewportSizeProvider";
type Social = any;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 320,
    transform: "translateZ(0px)",
    // flexGrow: 1,
  },
  speedDial: {
    position: "fixed",
    top: theme.spacing(2),
    // @ts-ignore
    top: ({ viewportHeight }) =>
      viewportHeight >= 400 ? viewportHeight - 400 : 0, // 将 SpeedDial 定位到视口底部上方 320px 处
    right: theme.spacing(2),
  },
}));

const FloatWindow = React.memo(function FloatWindow(_props: any) {
  const { height: viewportHeight } = React.useContext(ViewportSizeContext);
  const classes = useStyles({ viewportHeight });

  // 管理速拨按钮菜单的打开和关闭状态
  const [open, setOpen] = React.useState(true);
  // const { socials, handleAction, UrlOverlay } = useSocialActions();

  return (
    <>
      {/* <UrlOverlay /> */}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        className={classes.speedDial}
        icon={
          open ? (
            <SpeedDialIcon openIcon={<CloseIcon />} />
          ) : (
            <SupervisorAccountIcon />
          )
        }
        open={open}
        onClick={() => setOpen(!open)}
        hidden={open ? true : false}
      >
        {/* {socials.map((social: Social) => {
          return (
            <SpeedDialAction
              key={social.id}
              icon={social.icon}
              tooltipTitle={social.id}
              onClick={(event) => {
                event.stopPropagation();
                //@ts-ignore
                handleAction(social.id);
              }}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                color: social.isDone ? "gold" : "inherit", // 当isDone为true时，图标颜色变为金色
                boxShadow: "none",
                "::after": {
                  content: `"${social.counts}"`, //元素隐式具有 "any" 类型，因为类型为 "any" 的表达式不能用于索引类型 "{ read: number; like: number; comment: number; share: number; collect: number; }"。ts(7053)
                  position: "absolute",
                  bottom: "-20px", // 将数字移动到按钮下方
                  left: "50%", // 水平居中
                  transform: "translateX(-50%)", // 确保数字水平居中
                  borderRadius: "50%",
                  padding: "2px 5px",
                  fontSize: "12px",
                },
              }}
            />
          );
        })} */}
      </SpeedDial>
    </>
  );
});

export default FloatWindow;
