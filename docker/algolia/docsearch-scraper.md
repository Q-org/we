# algolia/docsearch-scraper

使用 `algolia/docsearch-scraper` 需要几个步骤，因为它需要配置才能正确地抓取和索引你的网站内容。以下是一个更详细的步骤指南，包括准备工作、配置、运行和验证：

**1. 准备工作**

* **Docker 安装:** 确保你已经安装了 Docker。 你可以在 Docker 官网下载并安装：[https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
* **Algolia 账户和 API 密钥:** 你需要一个 Algolia 账户，并获取以下凭据：
  * **Application ID:** 你的 Algolia 应用 ID。
  * **Admin API Key:** 你的 Algolia 管理员 API 密钥（务必妥善保管，不要泄露）。
  * **Index Name:** 你想要存储索引数据的 Algolia 索引名称。  如果索引不存在，爬虫会自动创建它。

**2. 创建一个配置文件 (`config.json`)**

`algolia/docsearch-scraper` 通过一个 `config.json` 文件来定义抓取的配置。这是一个示例 `config.json` 文件，你需要根据你的网站进行调整：

```json
{
  "index_name": "your_index_name",
  "start_urls": [
    "https://yourwebsite.com/"
  ],
  "selectors": {
    "lvl0": {
      "selector": "article h1",  // 修改为你的网站的实际选择器
      "global": true,
      "default_value": "Your Website"
    },
    "lvl1": "article h2",
    "lvl2": "article h3",
    "lvl3": "article h4",
    "lvl4": "article h5",
    "text": "article p, article li"
  },
  "strip_chars": " .,;:#?!(){}[]>",
  "custom_settings": {
    "attributesForFaceting": [
      "language",
      "version"
    ],
    "distinct": true,
    "attributeForDistinct": "url",
    "attributesToRetrieve": [
      "hierarchy",
      "content",
      "anchor",
      "url",
      "url_without_anchor",
      "type"
    ],
    "searchableAttributes": [
      "unordered(hierarchy.lvl0)",
      "unordered(hierarchy.lvl1)",
      "unordered(hierarchy.lvl2)",
      "unordered(hierarchy.lvl3)",
      "unordered(hierarchy.lvl4)",
      "unordered(hierarchy.lvl5)",
      "unordered(content)"
    ]
  },
  "sitemap_urls": [
        "https://yourwebsite.com/sitemap.xml"
    ],
    "js_render": false, // 如果你的网站使用 JavaScript 动态渲染内容，设置为 true
    "js_wait": 0, // 如果启用了js_render，设置等待渲染的时间(秒)
  "conversation_id": "YOUR_DOCSEARCH_CONVERSATION_ID",
  "nb_hits": 1000,
  "record_batch_size": 100
}
```

* **`index_name`:** 替换为你在 Algolia 中创建的索引名称。
* **`start_urls`:**  一个包含起始 URL 的数组，爬虫将从这些 URL 开始抓取。
* **`selectors`:**  一个对象，定义如何从网页中提取数据。  `lvl0` 到 `lvl4` 用于定义标题级别，`text` 用于提取正文内容。  **这是配置中最重要也是最容易出错的部分。**  你需要使用 CSS 选择器来准确地定位你的网站上的标题和文本内容。  使用浏览器的开发者工具 (例如 Chrome 的 "Inspect") 来找到正确的 CSS 选择器。  `global: true`  表示在所有页面上都使用该选择器。 `default_value` 在找不到匹配选择器时使用的默认值。
* **`strip_chars`:**  从文本中删除的字符。
* **`custom_settings`:**  自定义 Algolia 索引的设置。  你可以根据需要修改这些设置。 重要的是 `attributesForFaceting`（用于创建过滤器），以及 `searchableAttributes`（定义搜索的字段和顺序）。
* **`sitemap_urls`**:  指向sitemap文件的URL，爬虫会从sitemap中读取链接。
* **`js_render`**: 如果你的网站使用 JavaScript 动态渲染内容，设置为 `true`。 如果设置为 `true`，爬虫会使用无头浏览器 (Headless Chrome) 来渲染页面，然后抓取内容。 这会增加抓取的时间。
* **`js_wait`**:  当 `js_render` 为 `true` 时，`js_wait` 定义了在页面渲染后等待多少秒后再抓取内容。 默认值为 0。 增加等待时间可以确保所有内容都已完全渲染。
* **`conversation_id`**:  用于Algolia调试。一般不用设置。
* **`nb_hits`**:  每个分页中抓取多少条数据。
* **`record_batch_size`**:  每次发送给Algolia多少条数据。

**3. 运行 DocSearch Scraper**

使用以下命令运行 `algolia/docsearch-scraper` Docker 镜像，替换为你自己的 Algolia 凭据和配置文件路径：

```bash
CONFIG=$(sed 's/\/\/.*$//g;s/\/\*.*\*\///g' ./config.json | jq -r .) docker run -it --env CONFIG="${CONFIG}" algolia/docsearch-scraper

docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
docker run -it --rm    -e APPLICATION_ID="7A61BM8EKU"    -e API_KEY="a728fa9125d1a5c821713752be1e10c1"    -e CONFIG="$(jq -c . ./config.json)"    algolia/docsearch-scraper
docker run -it --rm    -e APPLICATION_ID="7A61BM8EKU"    -e API_KEY="a728fa9125d1a5c821713752be1e10c1"    -e CONFIG="$((Get-Command jq).Path -replace '\\','/') -c . ./config.json"    algolia/docsearch-scraper

```

* **`-it`:**  以交互模式运行容器。
* **`--rm`:**  在容器退出后自动删除容器。
* **`-e APPLICATION_ID="YOUR_APPLICATION_ID"`:**  设置 Algolia Application ID 环境变量。  替换 `YOUR_APPLICATION_ID` 为你的实际 Application ID。
* **`-e API_KEY="YOUR_ADMIN_API_KEY"`:**  设置 Algolia Admin API Key 环境变量。 替换 `YOUR_ADMIN_API_KEY` 为你的实际 API Key。  **务必不要将你的 API Key 泄露给任何人！**
* **`-v $(pwd)/config.json:/app/configs/config.json`:**  将当前目录下的 `config.json` 文件挂载到容器的 `/app/configs/config.json` 路径。  确保 `config.json` 文件位于你运行命令的目录中。
* **`algolia/docsearch-scraper`:**  指定要运行的 Docker 镜像。

**Windows 用户注意事项：**

* 将 `$(pwd)` 替换为你的 `config.json` 文件的绝对路径，并使用 Windows 格式，例如 `C:/path/to/config.json`。 如果使用 Docker Desktop 的 Linux 终端 (WSL)，则可以使用 Linux 风格的路径。  确保路径正确且存在。
* 如果遇到权限问题，确保 Docker 可以访问你的 `config.json` 文件。

**4. 验证**

* **查看日志输出:**  `algolia/docsearch-scraper` 会在控制台输出日志信息，你可以通过查看日志来了解抓取过程是否成功。  注意任何错误或警告信息。
* **检查 Algolia 仪表板:**  登录到你的 Algolia 账户，并进入你指定的索引。 检查是否已经成功导入了数据。
* **进行搜索:**  在 Algolia 仪表板中进行搜索，验证搜索结果是否正确。

**5. 优化 `config.json`**

`config.json` 文件的选择器至关重要，直接影响抓取的结果。 以下是一些调试和优化 `config.json` 的技巧：

* **使用浏览器的开发者工具:**  使用 Chrome 或 Firefox 的开发者工具来检查你的网站的 HTML 结构，并找到正确的 CSS 选择器。
* **从简单到复杂:**  从简单的选择器开始，例如 `h1` 或 `p`，然后逐步增加选择器的复杂性，直到你能够准确地定位到你想要抓取的内容。
* **测试选择器:**  在开发者工具的控制台中，可以使用 `$()` 或 `document.querySelector()` 来测试你的 CSS 选择器，例如：`$('article h1')`。
* **处理动态内容:** 如果你的网站使用 JavaScript 动态加载内容，则需要将 `js_render` 设置为 `true`，并可能需要调整 `js_wait` 的值。

**示例：抓取 Markdown 文档**

如果你的网站是基于 Markdown 文档生成的，你可以使用以下配置：

```json
{
  "index_name": "your_index_name",
  "start_urls": [
    "https://yourwebsite.com/docs/"
  ],
  "selectors": {
    "lvl0": {
      "selector": "h1",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "h2",
    "lvl2": "h3",
    "lvl3": "h4",
    "text": "p, li, blockquote"
  }
}
```

**重要提示：**

* **定期抓取:** 建议定期运行 `algolia/docsearch-scraper`，以保持你的索引与网站内容的同步。 你可以使用 cron 表达式或其他调度工具来自动运行 Docker 命令。
* **Robots.txt:**  确保你的 `robots.txt` 文件允许 `algolia/docsearch-scraper` 抓取你的网站内容。
* **错误处理:**  仔细阅读 Docker 和 `algolia/docsearch-scraper` 的日志输出，以便及时发现和解决问题。

通过认真配置 `config.json` 文件并定期运行 `algolia/docsearch-scraper`，你可以为你的网站创建一个强大的搜索体验。  请根据你的网站的实际情况调整配置，并进行充分的测试。
