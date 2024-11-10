import logger from "@docusaurus/logger";

interface VideoData {
  type: string;
  codecid: number | string;
  groupId: number | string;
  itemId: number | string;
  aid: number | string;
  cid: number | string;
  bvid: string;
  p?: number | string;
  tabP?: number | string;
  tabName?: string;
  uid?: string;
  uname?: string;
  avatar?: string;
  coverUrl?: string;
  title?: string;
  duration?: number | string;
  groupTitle?: string;
  groupCoverUrl?: string;
  danmaku?: number | string;
  view?: number | string;
  pubdate?: number | string;
  status?: string;
  active?: boolean;
  loaded?: boolean;
  qn?: number | string;
  allowHEVC?: boolean;
  createTime?: number | string;
  coverPath?: string;
  groupCoverPath?: string;
  updateTime?: number | string;
  totalSize?: number | string;
  loadedSize?: number | string;
  progress?: number | string;
  speed?: number | string;
  completionTime?: number | string;
  reportedSize?: number | string;
  [key: string]: any;
}
// 示例数据
const sampleData: VideoData = {
  type: "ugc",
  codecid: 7,
  groupId: "BV1pAmiYeE1x",
  itemId: 26693930703,
  aid: 113456661465914,
  cid: 26693930703,
  bvid: "BV1pAmiYeE1x",
  p: 1,
  tabP: 0,
  tabName: "管理会计-还记得",
  uid: "602768235",
  uname: "猫叫-",
  avatar:
    "https://i0.hdslb.com/bfs/face/64eecc80ff157ae2be174d850a0109b3ae402b06.jpg",
  coverUrl:
    "http://i2.hdslb.com/bfs/archive/b0d058cafddccdeb14d0de74b536996eb107e46c.jpg",
  title: "管理会计-还记得",
  duration: 332,
  groupTitle: "管理会计-还记得",
  groupCoverUrl:
    "http://i2.hdslb.com/bfs/archive/b0d058cafddccdeb14d0de74b536996eb107e46c.jpg",
  danmaku: 0,
  view: 1,
  pubdate: 1731211665,
  vt: 0,
  status: "completed",
  active: true,
  loaded: true,
  qn: 80,
  allowHEVC: false,
  createTime: 1731212103921,
  coverPath: "d:\\Users\\hi\\Videos\\bilibili\\26693930703\\image.jpg",
  groupCoverPath: "d:\\Users\\hi\\Videos\\bilibili\\26693930703\\group.jpg",
  updateTime: 1731212107384,
  totalSize: 15677397,
  loadedSize: 15677397,
  progress: 100,
  speed: 0,
  completionTime: 1731212107297,
  reportedSize: 15677397,
};
export function generateBilibiliPlayer(data: string | VideoData): string {
  if (!data) {
    data = sampleData;
  }

  let videoData: VideoData;

  if (typeof data === "string") {
    try {
      videoData = JSON.parse(data);
    } catch (error: any) {
      logger.error(`Failed to parse JSON string: ${error?.message || error}`);
      return "";
    }
  } else {
    videoData = data;
  }

  console.log(videoData);
  logger.info(videoData.aid);

  return `
<div style="position: relative; padding: 30% 45%;">
<iframe
style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
src="https://player.bilibili.com/player.html?aid=${videoData.aid}&bvid=${videoData.bvid}&cid=${videoData.cid}&page=${videoData.p}&as_wide=1&high_quality=1&danmaku=0"
frameBorder="no"
scrolling="no"
></iframe>
</div>
`;
}
