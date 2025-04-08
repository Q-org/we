import { File } from "@wei/ts/src/lib/File";
import CheerioHtml from "@wei/ts/src/lib/html/cheerio";

(async () => {
  const CheerioFile = Object.assign(File, CheerioHtml);
  const vfile = await CheerioFile.readVFile(
    "apps/wtest/static/pages/kjpz_jzpz00_tyv2v.jsp",
  );
  const path = "_test_\\kjpz_jzpz00_tyv2v.jsp";

  await CheerioFile.delete("_test_\\kjpz_jzpz00_tyv2v.jsp");
  console.log(1, CheerioFile.VFile);
  const result = await CheerioFile.isVFile(vfile);

  console.log(2, CheerioFile.VFile, result);
})();
