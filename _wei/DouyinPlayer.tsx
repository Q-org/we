import React from "react";
import { Box } from "@mui/material";

const DouyinPlayer = ({ videoId }) => {
  return (
    <Box
      component="iframe"
      sx={{
        width: "100%",
        height: "500px",
        border: "none",
      }}
      src={`https://www.douyin.com/video/${videoId}`}
      allowFullScreen
    />
  );
};

export default DouyinPlayer;
