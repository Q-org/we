"use strict";

const { readFile } = require("node:fs/promises");
const { WASI } = require("wasi");
const { argv, env } = require("node:process");
const { join } = require("node:path");

// 创建 WASI 实例
const wasi = new WASI({
  version: "preview1",
  // args: argv,
  // env,
  preopens: {
    "/local":
      "C:/dev/wasmedge_wasi_socket/dist/wasm32-wasi/debug/http_client.wasm",
  },
});

(async () => {
  // 编译 WebAssembly 模块
  const wasm = await WebAssembly.compile(
    await readFile(
      join(
        __dirname,
        "C:/dev/wasmedge_wasi_socket/dist/wasm32-wasi/debug/http_client.wasm",
      ),
    ),
  );

  // 实例化 WebAssembly 模块
  const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

  // 启动 WASI 实例
  wasi.start(instance);
})();
