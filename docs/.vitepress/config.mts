import { withMermaid } from "vitepress-plugin-mermaid";
// https://vitepress.dev/reference/site-config

export default withMermaid({
    base: '/leon',
    title: "Leon's Home",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: "敏捷",
                items: [
                    {
                        text: "需求",
                        items: [
                            {text: 'TBD', link: '/'},
                            {text: 'TBD', link: '/'}
                        ]
                    },
                    {
                        text: "开发",
                        items: [
                            {text: 'TBD', link: '/'},
                            {text: 'TBD', link: '/'}
                        ]
                    },
                    {
                        text: "测试",
                        items: [
                            {text: 'TBD', link: '/'},
                            {text: 'TBD', link: '/'}
                        ]
                    },
                    {
                        text: "发布",
                        items: [
                            {text: 'TBD', link: '/'},
                            {text: 'TBD', link: '/'}
                        ]
                    }
                ]
            },
            {
                text: "架构",
                items: [
                    {
                        text: "TBD",
                        items: [
                            {text: 'TBD', link: '/'},
                            {text: 'TBD', link: '/'}
                        ]
                    }
                ]
            },
            {
                text: "工程实践",
                items: [
                    {
                        text: "重构手法",
                        items: [
                            {text: '提取方法', link: '/refactoring/1-extract-method.md'},
                            {text: '内联方法', link: '/refactoring/2-inline-method.md'},
                            {text: '重命名', link: '/refactoring/3-rename.md'},
                            {text: '移动方法', link: '/refactoring/4-move-method.md'},
                            {text: '引入参数对象', link: '/refactoring/5-introduce-parameter-object.md'},
                            {text: '拆分条件表达式', link: '/refactoring/6-decompose-conditional.md'},
                            {text: '替换算法', link: '/refactoring/7-replace-algorithm.md'},
                            {text: '提取接口', link: '/refactoring/8-extract-interface.md'},
                            {text: '移除设置器', link: '/refactoring/9-remove-setter.md'},
                            {text: '合并条件表达式', link: '/refactoring/10-consolidate-conditional-expression.md'},
                        ]
                    }
                ]
            },
            {
                text: "代码画图",
                items: [
                    {
                        text: "流程图",
                        items: [
                            {text: '基本元素', link: '/codechart/flowchart/1-基本元素.md'},
                            {text: '内联方法-Inline Method', link: '/refactoring/2-inline-method.md'}
                        ]
                    }
                ]
            },
            {
                text: "算法",
                items: [
                    {
                        text: "数据结构",
                        items: [
                            {text: '链表 Link List', link: '/'},
                            {text: '数组 Array', link: '/'},
                            {text: '队列 Queue', link: '/'}
                        ]
                    },
                    {
                        text: "算法专题",
                        items: [
                            {text: '笛卡尔积', link: '/'},
                            {text: '洗牌算法', link: '/'}
                        ]
                    }

                ]
            },
            {
                text: "阅读",
                items: [
                    {
                        text: "故事",
                        items: [
                            {text: '《风雨哈佛路》', link: '/'},
                            {text: '《病隙碎笔》', link: '/'},
                            {text: '《当我谈跑步时,我谈些什么》', link: '/'}
                        ]
                    }
                ]
            },
            {
                text: "英语学习",
                items: [
                    {
                        text: "背英语",
                        items: [
                            {text: 'Day1', link: '/'},
                            {text: 'Day2', link: '/'},
                            {text: 'Day3', link: '/'}
                        ]
                    }
                ]
            },
            {
                text: "出版物",
                items: [
                    {
                        text: "书籍",
                        items: [
                            {text: '《健壮的Python》', link: '/'},
                            {text: '《敏捷开发的艺术》', link: '/'}
                        ]
                    }
                ]
            },
            {
                text: "我的故事-写作",
                items: [
                    {
                        text: "职业经历",
                        items: [
                            {text: '111', link: '/'},
                            {text: '222', link: '/'}
                        ]
                    },
                    {
                        text: "学习经历",
                        items: [
                            {text: '111', link: '/'},
                            {text: '222', link: '/'}
                        ]
                    },
                    {
                        text: "旅行",
                        items: [
                            {text: '111', link: '/'},
                            {text: '222', link: '/'}
                        ]
                    },
                    {
                        text: "生活",
                        items: [
                            {text: '111', link: '/'},
                            {text: '222', link: '/'}
                        ]
                    }
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
                        {text: '提取方法 (Extract Method)', link: '/refactoring/1-extract-method.md'},
                        {text: '内联方法 (Inline Method)', link: '/refactoring/2-inline-method.md'},
                        {text: '重命名 (Rename)', link: '/refactoring/3-rename.md'},
                        {text: '移动方法 (Move Method)', link: '/refactoring/4-move-method.md'},
                        {text: '引入参数对象 (Introduce Parameter Object)', link: '/refactoring/5-introduce-parameter-object.md'},
                        {text: '拆分条件表达式 (Decompose Conditional)', link: '/refactoring/6-decompose-conditional.md'},
                        {text: '替换算法 (Replace Algorithm)', link: '/refactoring/7-replace-algorithm.md'},
                        {text: '提取接口 (Extract Interface)', link: '/refactoring/8-extract-interface.md'},
                        {text: '移除设置器 (Remove Setter)', link: '/refactoring/9-remove-setter.md'},
                        {text: '合并条件表达式 (Consolidate Conditional Expression)', link: '/refactoring/10-consolidate-conditional-expression.md'},
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/lrliang'}
        ],
        footer: {
            copyright: "Copyright @ 2024 Leon"
        },
        search: {
            provider: 'local'
        }
    }
})
