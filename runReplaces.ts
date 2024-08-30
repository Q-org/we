import { diff } from "jest-diff";
import _File from "@wei/types/src/lib/types/_File";

(async () => {
  // console.log(diff(1, 2));
  //@ts-ignore
  await _File.diff();
  console.log(_File.diff(1, 2));
})();
