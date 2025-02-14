import Files from "@wei/ts/src/lib/File";
import _File from "@wei/types/src/lib/types/_File";
const r = String.raw;
const path = r`we\docs\ast\rtc&buil.md`;
(async () => {
  await Files.preViewOrWrite(path, true, (path) =>
    import("fs").then(async (fs) => {
      let result = fs.readFileSync(path).toString();
      result = await Files.lintAndFixMarkdownString(result);

      // console.log(result);
      result = result?.replace(/^(?!\s*#)/, `# ${_File.getName(path)}\n`);
      // expect(Files.getName(path)).toBe(2);
      return result;
    }),
  ).then((run) => {
    return run(
      true,
      [
        /^((`{3})\w+.*$(\n(?<!\2)^.*$)+?\n\2)|(<[^>]+?>)/m,
        (match, p1, p2, p3) => {
          // console.log(match);

          if (/<[^>]*?>/.test(match)) {
            console.log(match, "_________________________________________");
            return `\`${match}\``; // 如果 `$3` 被捕获，则替换成 `p3`
          }
          return match; // 否则保持原样
        },
      ],
      [/^\s*(?!#)(\s?\S+)/, "# $1"],
      [/$[\n\r]+(?=^```\w+)/gm, "\n\n"],
      [/(?<=```$)[\s]*(?=^\s*\S)/gm, "\n\n"],
      [/(?:(?![\n\r])\s)+(?=(?![\n\r])\s\S)/gm, ""],
      [/\s+(?=•\s\S)/gm, "\n"],
      [
        `http`,
        /(?<!\[)(https?:[/](?:[/][^/\s]+)+?)(?=https:[/]|\s|\.)/gi,
        `[$1]`,
      ],
      [/(^\s*$[\n\r]){2,}/gm, ""],
    );
  });
})();
