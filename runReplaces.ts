import { logger } from "@docusaurus/logger";
import { diff } from "jest-diff";
import { generateBilibiliPlayer } from "src/_wei/generateBilibiliPlayer";

(async () => {
  const result = generateBilibiliPlayer();
  console.info(result);
})();
