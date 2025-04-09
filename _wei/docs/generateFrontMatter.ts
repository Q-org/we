interface FrontMatterParams {
  id?: string;
  title?: string;
  description?: string;
  slug?: string;
  sidebarLabel?: string;
  sidebarPosition?: number;
  tags?: string[];
  keywords?: string[];
  image?: string;
  hideTitle?: boolean;
  hideTableOfContents?: boolean;
  paginationNext?: string | null;
  paginationPrev?: string | null;
}

export default class MarkdownGenerator {
  #content: string;
  #matters: string | object;

  static allKeys = [
    "id",
    "title",
    "description",
    "slug",
    "sidebarLabel",
    "sidebarPosition",
    "tags",
    "keywords",
    "image",
    "hideTitle",
    "hideTableOfContents",
    "paginationNext",
    "paginationPrev",
  ];
  static smallKeys = ["id", "title", "description", "tags", "slug"];
  // static verymallKeys = ["id", "title", "description", "tags", "slug"];

  constructor(content: string, ...args: any[]) {
    this.#content = content;
    this.#matters = MarkdownGenerator.handleParams(...args);
  }

  static handleParams(...args: any[]): FrontMatterParams {
    if (args.length === 1 && typeof args[0] === "object") {
      return args[0];
    } else {
      const keys =
        args.length <= MarkdownGenerator.smallKeys.length
          ? MarkdownGenerator.smallKeys
          : MarkdownGenerator.allKeys;

      const params: FrontMatterParams = {};
      keys.forEach((key, index) => {
        //@ts-ignore
        params[key] = args[index];
      });

      return params;
    }
  }

  frontMatter(...args: any[]): string | void {
    const params = MarkdownGenerator.handleParams(...args);
    if (Object.keys(params).length > 0) {
      return MarkdownGenerator.generateFrontMatter(params);
    }
  }

  static generateFrontMatter(params: FrontMatterParams): string {
    const {
      id,
      title,
      description,
      slug,
      sidebarLabel,
      sidebarPosition,
      tags,
      keywords,
      image,
      hideTitle,
      hideTableOfContents,
      paginationNext,
      paginationPrev,
    } = params;

    const frontMatter = [
      id && `id: ${id}`,
      title && `title: "${title}"`,
      description && `description: "${description}"`,
      slug && `slug: ${slug}`,
      sidebarLabel && `sidebar_label: "${sidebarLabel}"`,
      sidebarPosition !== undefined && `sidebar_position: ${sidebarPosition}`,
      tags?.length && `tags: [${tags.map((tag) => `"${tag}"`).join(", ")}]`,
      keywords?.length &&
        `keywords: [${keywords.map((keyword) => `"${keyword}"`).join(", ")}]`,
      image && `image: "${image}"`,
      hideTitle !== undefined && `hide_title: ${hideTitle}`,
      hideTableOfContents !== undefined &&
        `hide_table_of_contents: ${hideTableOfContents}`,
      paginationNext && `pagination_next: ${paginationNext}`,
      paginationPrev && `pagination_prev: ${paginationPrev}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `---
${frontMatter}
---`;
  }

  static generateMarkdownContent(frontMatter: string, content: string): string {
    return `${frontMatter}

${content}`;
  }
}
