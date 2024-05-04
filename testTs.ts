import { eInstanceOf, prettierStr } from "@wei/types/src/lib/types";
import { RegexpsOfGulp, runReplaces } from "@wei/types/src/lib/regexp";
import * as cheerio from "cheerio";
import { File } from "@wei/ts/src/lib/File";
import CheerioHtml, {
  combineStyleTags,
  cssToStyleLinks,
} from "@wei/ts/src/lib/html/cheerio";

import assert from "assert";
(async () => {
  const CheerioFile = Object.assign(File, CheerioHtml);
  const vfile = await CheerioFile.readVFile(
    "apps/wtest/static/pages/kjpz_jzpz00_tyv2v.jsp",
  );
  let path = "_test_\\kjpz_jzpz00_tyv2v.jsp";

  await CheerioFile.delete("_test_\\kjpz_jzpz00_tyv2v.jsp");
  console.log(1, CheerioFile.VFile);
  let result = await CheerioFile.isVFile(vfile);

  console.log(2, CheerioFile.VFile, result);
})();
