import React from "react";
import Badgen from "badgen";
import { CheckCircle } from "@mui/icons-material";

const JcMasterBadge = () => {
  return (
    <Badgen
      status="success"
      label="基础会计达人"
      style={{
        backgroundColor: "#1976D2", // 代表智慧与严谨的蓝色系，这里采用Material UI默认的主蓝色
        color: "white",
        borderRadius: "5px",
        padding: "5px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      <CheckCircle style={{ marginRight: "5px" }} />
      数学达人
    </Badgen>
  );
};

export default JcMasterBadge;
