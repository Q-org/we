[
apps/w/src/theme/ColorModeToggle/index.js,
apps/w/src/theme/Footer/Layout/index.js,
apps/w/src/theme/Navbar/Content/index.js,
apps/w/src/theme/NavbarItem/ComponentTypes.js
apps/w/src/theme/Navbar/MobileSidebar/SecondaryMenu/index.tsx
apps/w/src/theme/ErrorPageContent.tsx

]
 Navbar/Logo
Admonition/Layout
theme

# {test : [NavbarItem/ComponentTypes, NavbarItem/DefaultNavbarItem ]}

[apps\w\src\theme\Layout\index.js,apps\w\src\theme\Layout\Provider\index.js]?

pnpm swizzle @docusaurus/theme-classic TOC --typescript --eject
pnpm swizzle @docusaurus/theme-classic TOCCollapsible --typescript --eject
pnpm swizzle @docusaurus/theme-classic DocSidebarItem/Category --typescript --eject

yarn workspace @wei/w docusaurus swizzle @docusaurus/theme-classic Layout --typescript --eject
yarn workspace @wei/w swizzle @docusaurus/theme-classic  NotFound      --typescript --eject
yarn workspace @wei/w swizzle @docusaurus/theme-classic ColorModeToggle  --typescript --eject
yarn workspace @wei/w swizzle @docusaurus/theme-classic Navbar  --typescript --eject
yarn workspace @wei/w swizzle @docusaurus/theme-classic NavbarItem  --typescript --eject
yarn workspace @wei/w swizzle @docusaurus/theme-classic  Navbar/Logo  --typescript --eject

yarn workspace @wei/w swizzle  --list
Components available for swizzle in @docusaurus/theme-classic:
┌──────────────────────────────────────────┬───────────┬───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Component name                           │ Wrap      │ Eject     │ Description                                                         
                                                             │

│ Admonition/Icon/Danger                   │ Safe      │ Safe      │ The admonition danger icon                                          
                                                             │

│ Admonition/Icon/Info                     │ Safe      │ Safe      │ The admonition info icon                                            
                                                             │

│ Admonition/Icon/Note                     │ Safe      │ Safe      │ The admonition note icon                                            
                                                             │

│ Admonition/Icon/Tip                      │ Safe      │ Safe      │ The admonition tip icon                                             
                                                             │

│ Admonition/Icon/Warning                  │ Safe      │ Safe      │ The admonition warning icon                                         
                                                             │

│ Admonition/Layout                        │ Safe      │ Safe      │ The standard admonition layout applied to all default admonition types                                                           │

│ Admonition/Type/Caution                  │ Safe      │ Safe      │ The component responsible for rendering a :::caution admonition type
                                                             │

│ Admonition/Type/Danger                   │ Safe      │ Safe      │ The component responsible for rendering a :::danger admonition type 
                                                             │

│ Admonition/Type/Info                     │ Safe      │ Safe      │ The component responsible for rendering a :::info admonition type   
                                                             │

│ Admonition/Type/Note                     │ Safe      │ Safe      │ The component responsible for rendering a :::note admonition type   
                                                             │

│ Admonition/Type/Tip                      │ Safe      │ Safe      │ The component responsible for rendering a :::tip admonition type    
                                                             │

│ Admonition/Type/Warning                  │ Safe      │ Safe      │ The component responsible for rendering a :::warning admonition type
                                                             │

│ CodeBlock                                │ Safe      │ Safe      │ The component used to render multi-line code blocks, generally used in Markdown files.                                           │

│ ColorModeToggle                          │ Safe      │ Safe      │ The color mode toggle to switch between light and dark mode.        
                                                             │

│ DocCardList                              │ Safe      │ Safe      │ The component responsible for rendering a list of sidebar items cards.                                                           │
│                                          │           │           │ Notable used on the category generated-index pages.                 
                                                             │

│ Footer                                   │ Safe      │ Safe      │ The footer component of your site's layout                          
                                                             │

│ Footer/Copyright                         │ Safe      │ Safe      │ The footer copyright                                                
                                                             │

│ Footer/Layout                            │ Safe      │ Safe      │ The footer main layout component                                    
                                                             │

│ Footer/LinkItem                          │ Safe      │ Safe      │ The footer link item component                                      
                                                             │

│ Footer/Links                             │ Safe      │ Safe      │ The footer component rendering the footer links                     
                                                             │

│ Footer/Links/MultiColumn                 │ Safe      │ Safe      │ The footer component rendering the footer links with a multi-column layout                                                       │

│ Footer/Links/Simple                      │ Safe      │ Safe      │ The footer component rendering the footer links with a simple layout (single row)                                                │

│ Footer/Logo                              │ Safe      │ Safe      │ The footer logo                                                     
                                                             │

│ Icon/Arrow                               │ Safe      │ Safe      │ The arrow icon component                                            
                                                             │

│ Icon/DarkMode                            │ Safe      │ Safe      │ The dark mode icon component.                                       
                                                             │

│ Icon/Edit                                │ Safe      │ Safe      │ The edit icon component                                             
                                                             │

│ Icon/LightMode                           │ Safe      │ Safe      │ The light mode icon component.                                      
                                                             │

│ Icon/Menu                                │ Safe      │ Safe      │ The menu icon component                                             
                                                             │

│ MDXComponents/A                          │ Safe      │ Safe      │ The component used to render <a> tags and Markdown links in MDX     
                                                             │

│ MDXComponents/Code                       │ Safe      │ Safe      │ The component used to render <code> tags and Markdown code blocks in MDX                                                         │

│ MDXComponents/Details                    │ Safe      │ Safe      │ The component used to render <details> tags in MDX                  
                                                             │

│ MDXComponents/Heading                    │ Safe      │ Safe      │ The component used to render heading tags (<h1>, <h2>...) and Markdown headings in MDX                                           │

│ MDXComponents/Img                        │ Safe      │ Safe      │ The component used to render <img> tags and Markdown images in MDX  
                                                             │

│ MDXComponents/Pre                        │ Safe      │ Safe      │ The component used to render <pre> tags in MDX                      
                                                             │

│ MDXComponents/Ul                         │ Safe      │ Safe      │ The component used to render <ul> tags and Markdown unordered lists in MDX                                                       │

│ MDXContent                               │ Safe      │ Safe      │ A component wrapping all MDX content and providing the MDXComponents to the MDX context                                          │

│ NotFound                                 │ Safe      │ Safe      │ The global 404 page of your site, meant to be ejected and customized
                                                             │

│ SearchBar                                │ Safe      │ Safe      │ The search bar component of your site, appearing in the navbar.     
                                                             │

│ SkipToContent                            │ Safe      │ Safe      │ The component responsible for implementing the accessibility "skip to content" link (https://www.w3.org/TR/WCAG20-TECHS/G1.html) │

│ DocSidebar                               │ Safe      │ Unsafe    │ The sidebar component on docs pages                                 
                                                             │

│ Admonition/Icon                          │ Forbidden │ Safe      │ The folder containing all admonition icons                          
                                                             │

│ Admonition/Type                          │ Forbidden │ Safe      │ The folder containing all the admonition type components.           
                                                             │

│ Admonition/Types                         │ Forbidden │ Safe      │ The object mapping admonition type to a React component.            
                                                             │
│                                          │           │           │ Use it to add custom admonition type components, or replace existing ones.                                                       │
│                                          │           │           │ Can be ejected or wrapped (only manually, see our documentation).   
                                                             │

│ MDXComponents                            │ Forbidden │ Safe      │ The MDX components to use for rendering MDX files. Meant to be ejected.                                                          │

│ NavbarItem/ComponentTypes                │ Forbidden │ Safe      │ The Navbar item components mapping. Can be ejected to add custom navbar item types.                                              │
│                                          │           │           │ See https://github.com/facebook/docusaurus/issues/7227.             
                                                             │

│ prism-include-languages                  │ Forbidden │ Safe      │ The Prism languages to include for code block syntax highlighting. Meant to be ejected.                                          │

│ Admonition                               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ AnnouncementBar                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ AnnouncementBar/CloseButton              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ AnnouncementBar/Content                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BackToTopButton                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Blog                                     │ Forbidden │ Forbidden │ N/A                                                                 
                                                             │

│ Blog/Components                          │ Forbidden │ Forbidden │ N/A                                                                 
                                                             │

│ Blog/Components/Author                   │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Blog/Components/Author/Socials           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Blog/Pages                               │ Forbidden │ Forbidden │ N/A                                                                 
                                                             │

│ Blog/Pages/BlogAuthorsListPage           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Blog/Pages/BlogAuthorsPostsPage          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogArchivePage                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogLayout                               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogListPage                             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogListPage/StructuredData              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogListPaginator                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem                             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Container                   │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Content                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Footer                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Footer/ReadMoreLink         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Header                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Header/Authors              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Header/Info                 │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItem/Header/Title                │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostItems                            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostPage                             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostPage/Metadata                    │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostPage/StructuredData              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogPostPaginator                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogSidebar                              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogSidebar/Content                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogSidebar/Desktop                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogSidebar/Mobile                       │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogTagsListPage                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ BlogTagsPostsPage                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ CodeBlock/Container                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ CodeBlock/Content                        │ Forbidden │ Unsafe    │ The folder containing components responsible for rendering different types of CodeBlock content.                                 │

│ CodeBlock/Content/Element                │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ CodeBlock/Content/String                 │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ CodeBlock/CopyButton                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ CodeBlock/Line                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ CodeBlock/WordWrapButton                 │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ CodeInline                               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ ContentVisibility                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ ContentVisibility/Draft                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ ContentVisibility/Unlisted               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Details                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocBreadcrumbs                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocBreadcrumbs/Items                     │ Forbidden │ Unsafe    │ The components responsible for rendering the breadcrumb items       
                                                             │

│ DocBreadcrumbs/Items/Home                │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocCard                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocCategoryGeneratedIndexPage            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem/Content                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem/Footer                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem/Layout                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem/Metadata                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem/Paginator                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem/TOC                              │ Forbidden │ Forbidden │ The DocItem TOC is not directly swizzle-able, but you can swizzle its sub-components.                                            │

│ DocItem/TOC/Desktop                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocItem/TOC/Mobile                       │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocPaginator                             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocRoot                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocRoot/Layout                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocRoot/Layout/Main                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocRoot/Layout/Sidebar                   │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocRoot/Layout/Sidebar/ExpandButton      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebar/Desktop                       │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebar/Desktop/CollapseButton        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebar/Desktop/Content               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebar/Mobile                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebarItem                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebarItem/Category                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebarItem/Html                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebarItem/Link                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocSidebarItems                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocTagDocListPage                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocTagsListPage                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocVersionBadge                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocVersionBanner                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocVersionRoot                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ DocsRoot                                 │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ EditMetaRow                              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ EditThisPage                             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ ErrorPageContent                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Heading                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon                                     │ Forbidden │ Forbidden │ The Icon folder is not directly swizzle-able, but you can swizzle its sub-components.                                            │

│ Icon/Close                               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Copy                                │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/ExternalLink                        │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Home                                │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Language                            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials                             │ Forbidden │ Forbidden │ The Icon/Socials folder is not directly swizzle-able, but you can swizzle its sub-components.                                    │

│ Icon/Socials/Bluesky                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/Default                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/GitHub                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/Instagram                   │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/LinkedIn                    │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/Mastodon                    │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/StackOverflow               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/Threads                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/Twitch                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/Twitter                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/X                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Socials/YouTube                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/Success                             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Icon/WordWrap                            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ LastUpdated                              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Layout                                   │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Layout/Provider                          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Logo                                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ MDXComponents/Li                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ MDXPage                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Mermaid                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar                                   │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/ColorModeToggle                   │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/Content                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/Layout                            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/Logo                              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/MobileSidebar                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/MobileSidebar/Header              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/MobileSidebar/Layout              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/MobileSidebar/PrimaryMenu         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/MobileSidebar/SecondaryMenu       │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/MobileSidebar/Toggle              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Navbar/Search                            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem                               │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/DefaultNavbarItem             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/DocNavbarItem                 │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/DocSidebarNavbarItem          │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/DocsVersionDropdownNavbarItem │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/DocsVersionNavbarItem         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/DropdownNavbarItem            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/HtmlNavbarItem                │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/LocaleDropdownNavbarItem      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/NavbarNavLink                 │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NavbarItem/SearchNavbarItem              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ NotFound/Content                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ PaginatorNavLink                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ SearchMetadata                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ SiteMetadata                             │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TOC                                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TOCCollapsible                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TOCCollapsible/CollapseButton            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TOCInline                                │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TOCItems                                 │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TOCItems/Tree                            │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TabItem                                  │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Tabs                                     │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ Tag                                      │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TagsListByLetter                         │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ TagsListInline                           │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │

│ ThemedImage                              │ Unsafe    │ Unsafe    │ N/A                                                                 
                                                             │
└──────────────────────────────────────────┴───────────┴───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘


Components available for swizzle in @docusaurus/theme-search-algolia:
┌────────────────────┬────────┬────────┬─────────────┐
│ Component name     │ Wrap   │ Eject  │ Description │

│ SearchBar          │ Unsafe │ Unsafe │ N/A         │

│ SearchPage         │ Unsafe │ Unsafe │ N/A         │

│ SearchTranslations │ Unsafe │ Unsafe │ N/A         │
└────────────────────┴────────┴────────┴─────────────┘


Components available for swizzle in @docusaurus/plugin-debug:
┌───────────────────┬────────┬────────┬─────────────┐
│ Component name    │ Wrap   │ Eject  │ Description │

│ DebugConfig       │ Unsafe │ Unsafe │ N/A         │

│ DebugContent      │ Unsafe │ Unsafe │ N/A         │

│ DebugGlobalData   │ Unsafe │ Unsafe │ N/A         │

│ DebugJsonView     │ Unsafe │ Unsafe │ N/A         │

│ DebugLayout       │ Unsafe │ Unsafe │ N/A         │

│ DebugRegistry     │ Unsafe │ Unsafe │ N/A         │

│ DebugRoutes       │ Unsafe │ Unsafe │ N/A         │

│ DebugSiteMetadata │ Unsafe │ Unsafe │ N/A         │
└───────────────────┴────────┴────────┴─────────────┘


Components available for swizzle in changelog-plugin:
┌──────────────────────────────┬───────────┬────────┬─────────────┐
│ Component name               │ Wrap      │ Eject  │ Description │

│ ChangelogItem                │ Unsafe    │ Unsafe │ N/A         │

│ ChangelogItem/Header         │ Unsafe    │ Unsafe │ N/A         │

│ ChangelogItem/Header/Author  │ Unsafe    │ Unsafe │ N/A         │

│ ChangelogItem/Header/Authors │ Unsafe    │ Unsafe │ N/A         │

│ ChangelogList                │ Unsafe    │ Unsafe │ N/A         │

│ ChangelogList/Header         │ Unsafe    │ Unsafe │ N/A         │

│ ChangelogPage                │ Unsafe    │ Unsafe │ N/A         │

│ ChangelogPaginator           │ Unsafe    │ Unsafe │ N/A         │

│ Icon                         │ Forbidden │ Unsafe │ N/A         │

│ Icon/Expand                  │ Unsafe    │ Unsafe │ N/A         │
└──────────────────────────────┴───────────┴────────┴─────────────┘


Swizzle actions:
┌─────────┬────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Actions │ CLI option │ Description                                                                      │

│ Wrap    │ `--wrap`   │                                                                                  │
│         │            │ Creates a wrapper around the original theme component.                           │
│         │            │ Allows rendering other components before/after the original theme component.     │
│         │            │                                                                                  │
│         │            │ Tip: prefer `--wrap` whenever possible to reduce the amount of code to maintain. │
│         │            │                                                                                  │

│ Eject   │ `--eject`  │                                                                                  │
│         │            │ Ejects the full source code of the original theme component.                     │
│         │            │ Allows overriding of the original component entirely with your own UI and logic. │
│         │            │                                                                                  │
│         │            │ Tip: `--eject` can be useful for completely redesigning a component.             │
│         │            │                                                                                  │
└─────────┴────────────┴──────────────────────────────────────────────────────────────────────────────────┘

Swizzle safety statuses:
┌───────────┬────────────┬─────────────────────────────────────────────────────────────────────────────┐
│ Status    │ CLI option │ Description                                                                 │

│ Safe      │            │                                                                             │
│           │            │ This component is safe to swizzle and was designed for this purpose.        │
│           │            │ The swizzled component is retro-compatible with minor version upgrades.     │
│           │            │                                                                             │

│ Unsafe    │ `--danger` │                                                                             │
│           │            │ This component is unsafe to swizzle, but you can still do it!               │
│           │            │ Warning: we may release breaking changes within minor version upgrades.     │
│           │            │ You will have to upgrade your component manually and maintain it over time. │
│           │            │                                                                             │
│           │            │ Tip: your customization can't be done in a Safe way?                        │
│           │            │ Report it here: https://github.com/facebook/docusaurus/discussions/5468     │
│           │            │                                                                             │

│ Forbidden │            │                                                                             │
│           │            │ This component is not meant to be swizzled.                                 │
│           │            │                                                                             │
└───────────┴────────────┴─────────────────────────────────────────────────────────────────────────────┘

Swizzle guide: https://docusaurus.io/docs/swizzling
