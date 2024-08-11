import Brows from "@wei/ast-account/src/lib/Brows";
(async () => {
  await Brows.init({ haedless: false });
  // 使用示例
  await Brows.runWithBrowser(async (page) => {
    // 在这里执行您的操作，例如导航到一个页面
    // await page.goto("https://example.com");
    // console.log("Page title:", await page.title());
    // let isDragging = false;
    // let startX = 0;
    // let startY = 0;
    // const draggableElement = document.getElementById("draggableElement");
    // draggableElement?.addEventListener("mousedown", (event) => {
    //   isDragging = true;
    //   startX = event.clientX;
    //   startY = event.clientY;
    // });
    // document.addEventListener("mousemove", (event) => {
    //   if (isDragging) {
    //     const deltaX = event.clientX - startX;
    //     const deltaY = event.clientY - startY;
    //     draggableElement!.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    //   }
    // });
    // document.addEventListener("mouseup", () => {
    //   isDragging = false;
    // });
  });
  await Brows.close();
})();
