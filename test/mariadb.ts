import { File } from "@wei/ts/src/lib/File";
import { RegexpOfGroup, groupReplace } from "@wei/types/src/lib/regexp";
import { notEqual } from "assert";
import { PathLike } from "fs";
import { Arr } from "@wei/js/src/lib/ArrayJsonSet";
// @ts-ignore
const repairConsoleHostHistoryRegxp: RegexpOfGroup = Arr.removeFirst([
  ["去行内格式", /(?<=(?<=\S)\s)\s+|\s+$/gm, ""],
  [" 空行", /^\s*$[\n\r]+/gm, ""],
  [
    "不起作用",
    /(^\s*(.+)\s*$)[\n\r]+(?=(^(?!\1).+$[\n\r]+)*^\2\s*$[\n\r]+)/gm,
    "",
  ],

  [/tyarn gulp 关闭/, ""],
  [/^\s*\.\\\\pipe\\\\node-cdp.+$[\n\r]+/gm, ""],
  [/^\s*(["}$'.]|-).+$[\n\r]+/gm, ""],
  [/^.+\*\s*$[\n\r]*/gm, ""],
]);
console.log(repairConsoleHostHistoryRegxp);
export const repairConsoleHostHistory = async (
  path: PathLike = "C:/Users/hi/AppData/Roaming/Microsoft/Windows/PowerShell/PSReadLine/ConsoleHost_history.txt",
  regexpOfGroup: RegexpOfGroup = repairConsoleHostHistoryRegxp,
) => {
  return await repairText(path, regexpOfGroup);
};

export const repairText = async (
  path: PathLike,
  regexpOfGroup: RegexpOfGroup,
) => {
  try {
    const vfile = await File.readVFile(path);
    const content = vfile.value.toString();
    const result = groupReplace(content, regexpOfGroup);
    // 使用 assert 的 notEqual 方法来断言内容是否有变化
    notEqual(content, result, "无可处理！");
    // 如果内容有变化，将结果转换回 Buffer 并保存
    vfile.value = Buffer.from(result);
    await File.save(); // 确保 save 方法接收一个参数，即要保存的 vfile
  } catch (error) {
    console.error("repairText:", error);
    throw error; // 可以选择是否要抛出错误
  }
};

// 调用函数
repairConsoleHostHistory();
