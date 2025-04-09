function getFirstVisibleH1() {
  const viewportTop =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop ||
    0;

  // 获取视口高度
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // 计算视口底部位置
  const viewportBottom = viewportTop + viewportHeight;

  // 从视口顶部开始查找第一个可见的<h1>元素
  for (let i = viewportTop; i < viewportBottom; i++) {
    const element = document.elementFromPoint(0, i);
    if (element && element.tagName === "H1") {
      return element;
    }
  }

  return null; // 如果视口中不存在<h1>元素，则返回null
}

export const firstVisibleH1 = getFirstVisibleH1();
if (firstVisibleH1) {
  // console.log("视口中第一个可见的<h1>元素是：", firstVisibleH1.textContent);
} else {
  // console.log("视口中未找到可见的<h1>元素。");
}
