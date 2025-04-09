import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function CustomAccordion() {
  // 定义一个状态变量，用来存储收缩框的展开状态
  const [expanded, setExpanded] = React.useState(false);

  // 定义一个函数，用来处理收缩框的状态变化
  const handleChange = (event, isExpanded) => {
    // 设置状态变量的值为当前的展开状态
    setExpanded(isExpanded);
    // 打印日志
    // console.log(`Accordion is ${isExpanded ? "expanded" : "collapsed"}`);
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          // 根据展开状态，使用不同的图标
          expandIcon={
            expanded ? (
              <IconButton>
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            )
          }
        >
          <Typography>收缩框的标题</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>收缩框的内容</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
