import React from "react";
import Badge from "@mui/material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import { styled } from "@mui/material/styles";
import { badgen } from "badgen";

// 使用 badgen 生成徽章
const mathBadge = badgen({
  label: "数学达人",
  status: "90+",
  color: "blue",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#4caf50", // 绿色背景
    color: "#fff", // 白色文字
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SubjectBadge = () => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <img
          src={`data:image/svg+xml;base64,${btoa(mathBadge)}`}
          alt="数学达人"
        />
      }
      variant="dot"
    >
      <SchoolIcon style={{ fontSize: 40, color: "#3f51b5" }} /> {/* 蓝色图标 */}
    </StyledBadge>
  );
};

export default SubjectBadge;
