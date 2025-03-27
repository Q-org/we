const cleanConsoleHostHistory = require("@wei/types/dist/src/lib/regexp");
(async () => {
  console.log(cleanConsoleHostHistory);
  // await cleanConsoleHostHistory(
  //   [/^.+明白了，.+$[\n\r]/gm],
  //   [
  //     `头`,
  //     /^\s*(?:\d+|#|nxreset|nstall|$Env:PATH|$env|cla|c;s|vls|xcls|wsl).*$\n/gim,
  //   ],

  //   [`中间`, /^.*?(?:-v-v|checkout|-v\s+).*$\n/gim],
  //   [
  //     `尾`,
  //     /^\s*(?:show|nx\s+list|prettier|yarn\s+|webpack|node\s+|nvm|cks|git --log).*$\n/gm,
  //   ],
  //   [/^\w+\s+: .+\n/gm, ""],
  // );
})();
