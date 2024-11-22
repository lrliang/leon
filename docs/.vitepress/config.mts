import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Leon's Home",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: '案例', link: '/markdown-examples'},
            {text: '重构', link: '/refactoring/1-extract-method.md'},
            {
                text: "重构清单",
                items: [
                    {text: 'Extract Method', link: '/refactoring/1-extract-method.md'},
                    {text: 'Inline Method', link: '/refactoring/2-inline-method.md'}
                ]
            }
        ],

        sidebar: {
            '/refactoring/': [
                {
                    text: '重构基本功系列',
                    collapsed: true,
                    items: [
                        {text: '《重构——终极总结》', link: '/refactoring/0-introduction.md'},
                        {text: '提取方法（Extract Method）', link: '/refactoring/1-extract-method.md'},
                        {text: '内联方法（Inline Method）', link: '/refactoring/2-inline-method.md'}
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        search: {
            provider: 'local'
        }
    }
})
