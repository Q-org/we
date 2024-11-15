import * as React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; // 点赞
import CommentIcon from "@mui/icons-material/Comment"; // 评论
import ShareIcon from "@mui/icons-material/Share"; // 分享
import FavoriteIcon from "@mui/icons-material/Favorite"; // 收藏
import PersonAddIcon from "@mui/icons-material/PersonAdd"; // 收藏
import {
  HandleReadPage,
  SpeechReader,
} from "@wei/ui/src/lib/components/button/read-button.tsx";
import VolumeUp from "@mui/icons-material/VolumeUp";

import { useScreenShot } from "@wei/ui/src/lib/share/ScreenShotButton";

type InitialCounts = Record<string, number>;
// 获取初始次数的函数
const getInitialCounts = (): InitialCounts => {
  // 这里应该是一个API调用或数据库查询
  return {
    read: 1020,
    like: 500,
    comment: 390,
    share: 10000,
    collect: 200000,
  };
};
const initialCounts: InitialCounts = getInitialCounts(); // 获取初始次数

const speechReader = new SpeechReader();
export type Social = {
  icon: JSX.Element;
  id: string;
  counts: number;
  isDone: boolean;
};
const keyIndex: any = {};
const getSocials = (): Social[] =>
  [
    { icon: <FavoriteIcon />, id: "collect", counts: 1234, isDone: false },
    { icon: <ShareIcon />, id: "share", counts: 1234, isDone: false },
    { icon: <CommentIcon />, id: "comment", counts: 1234, isDone: false },
    { icon: <ThumbUpIcon />, id: "like", counts: 1234, isDone: false },
    { icon: <VolumeUp />, id: "read", counts: 1234, isDone: true },
    { icon: <PersonAddIcon />, id: "follow", counts: 1234, isDone: false },
  ].map((social, index) => {
    social.counts = initialCounts[social.id] ?? 0; //不能将类型“string | number | undefined”分配给类型“number”。  不能将类型“undefined”分配给类型“number”。ts(2322)
    keyIndex[social.id] = index;
    return social;
  });

const initialSocials: Social[] = getSocials();

export default function useSocialActions() {
  const [readingState, setReadingState] = React.useState(0);
  const { handleScreenShot, UrlOverlay } = useScreenShot();
  const [socials, setSocials] = React.useState<Social[]>(initialSocials);

  const getSocial = (id: string, arr: any[] = socials) => {
    return arr[keyIndex[id]];
  };
  // 动作处理函数
  const handleAction = async (actionId: keyof typeof initialCounts) => {
    const canUndo = actionId !== "share" && actionId !== "read";
    // 特殊处理分享动作
    if (actionId === "share") {
      const result = await handleScreenShot();
      //console.log(result);
      if ((!result || result?.["status"] !== "success") ?? null) {
        return;
      }
    }
    setSocials((prevSocials) => {
      return prevSocials.map((social) => {
        if (social.id !== actionId) {
          return social;
        }

        const initSocial = getSocial(actionId, initialSocials);
        const isDone = !social.isDone;
        const changed = initSocial.isDone === isDone ? false : true;

        //console.log(`本地持久化持久化`);

        return {
          ...social,
          isDone: canUndo ? isDone : true,
          counts: canUndo
            ? changed
              ? initSocial.counts + (isDone ? 1 : -1)
              : initSocial.counts
            : social.counts + 1,
        };
      });
    });

    // 特殊处理阅读动作
    if (actionId === "read") {
      const newState = speechReader.startReading("", speechReader.readingState);
      setReadingState(newState);
    }
  };

  return {
    socials,
    handleAction,
    handleScreenShot,
    UrlOverlay,
  };
}
