import Errors, { Modules } from "@wei/types/src/lib/types/Errors";
import File from "@wei/ts/src/lib/File";
import { Obj } from "@wei/types/src/lib/types/ArrayJsonSet";

import { get } from "lodash";
import PythonCode from "@wei/ts/src/lib/python/PysthonCode";
import assert from "node:assert";

const { PythonShell } = require("python-shell");
// 使用模板字符串构建 Python 代码
const { loadPyodide } = require("pyodide");
// class Python {
//   static #codePython: { [key: string]: string } | undefined | null = null;

//   static async setCodePython(name = "replace") {
//     if (!name) return;

//     try {
//       let py = await File.readVFile(
//         `C:/dev/wei/apps/python/src/${name}Code.py`,
//       ).catch(async () => {
//         return await File.readVFile(`C:/dev/wei/apps/python/src/${name}.py`);
//       });

//       if (typeof py !== "string" || !py) {
//         throw new TypeError(`Error reading Python file`);
//       }

//       if (!Python.#codePython) {
//         Python.#codePython = {};
//       }

//       Python.#codePython[name] = py;
//       return Python.#codePython[name];
//     } catch (error) {
//       console.error("Error setting Python code:", error);
//       throw error;
//     }
//   }

//   static async getCodePython(name: string) {
//     if (!Python.#codePython?.[name]) {
//       await Python.setCodePython(name);
//     }
//     return Python.#codePython?.[name];
//   }

//   _inStr: unknown = null;
//   constructor(inStr) {
//     this._inStr = inStr;
//   }

//   set replaceCode(value) {}
//   set inStr(value) {
//     this._inStr = value;
//   }
//   get inStr() {
//     return this._inStr;
//   }
//   // static inStr: unknown | null | undefined = null;
//   _replace = (regexp?, replacement?, inStr?) => {
//     if (inStr === undefined) {
//       inStr = this._inStr;
//     }
//     return Python.replace(regexp, replacement, inStr);
//   };

//   static replace = (regexp?, replacement?, inStr?) => {
//     if (!regexp) {
//       return inStr;
//     }

//     if (inStr === null) {
//       inStr = "";
//     }
//     try {
//       regexp = typeof regexp === "string" ? new RegExp(regexp) : regexp;
//       if (regexp.test(inStr)) {
//         return inStr.replace(regexp, replacement);
//       } else {
//         console.warn(`尝试 Python`);
//         throw new TypeError(`尝试 Python`);
//       }
//     } catch (error) {
//       return Python.replacePython(regexp, replacement, inStr);
//     }
//   };
//   static replacePython(regexp, replacement, inStr, print = false) {
//     let args = { regexp, replacement, inStr };
//     let code = Python._replaceCode(args);
//     return Python.run(code, print);
//   }
//   static changeReMode(regex) {
//     if (regex instanceof RegExp) {
//       let source = `"${regex.source.toString()}"`;
//       let flags = regex.flags;
//       return (source = flags.length > 0 ? `(?${flags})${source}` : source);
//     }

//     return regex;
//   }
//   // 准备 replace 语句
//   static _replaceCode(values, code = Python.replaceCode) {
//     if (typeof values === "object" && (Obj._length(values) || false)) {
//       Object.entries(values).forEach(([key, value]) => {
//         if (value instanceof RegExp) {
//           // 检查参数 处理 flags
//           value = Python.changeReMode(value);
//         } else {
//           if (typeof value === "number") {
//             value = value.toString();
//           }
//           value = JSON.stringify(value);
//         }

//         code = code.replace(
//           new RegExp(
//             `(${key}\\w*\\s*=\\s*r?)(['"])((?:(?=\\\\).{2}|(?!\\2).)*)\\2`,
//             "gm",
//           ),
//           `$1${value} `,
//         );
//       });
//     }
//     return code;
//   }
//   static async run(code = Python.replaceCode, print = true) {
//     let result = await PythonShell.runString(code, null)
//       .then((messages) => {
//         print && console.log(`Python Code:\n${code}\nResult:`, messages);
//         messages = messages[0];
//         return messages;
//       })
//       .catch((e) => {
//         print && console.log(Python.replaceCode);
//         throw e;
//       });
//     return result;
//   }
// }

// const toVFile = require("to-vfile");
(async () => {
  const { loadPyodide } = require("pyodide");
  const pythonCode = `
    import pcre2
    str = "Hi Python"
    pattern = r"(?i).*\K(?=P)(\w)(?-1){1,}$"
    replacement = "Pcre2"

    regex = pcre2.compile(pattern)
    matches = regex.match(string)
    `;
  async function main() {
    try {
      const pyodide = await loadPyodide();
      pyodide.runPython(pythonCode);
      // 获取并打印匹配结果
      const matches = pyodide.globals.get("matches").toJs();
      console.log(matches);
    } catch (error) {
      console.error(`\nPythonCode:\n${pythonCode}\nError:\n${error}`);
    }
    // 执行Python代码，使用re模块
  }

  main().catch(console.error);
})();
