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
                text: "工程实践-重构",
                items: [
                    {
                        text: "1.ChangeFunctionDeclaration-更改函数声明",
                        items: [
                            {text: 'Add Parameter - 添加参数.md', link: '/refactoring/1.ChangeFunctionDeclaration-更改函数声明/1.Add Parameter - 添加参数.md'},
                            {text: 'Change Signature - 更改签名.md', link: '/refactoring/1.ChangeFunctionDeclaration-更改函数声明/2. Change Signature - 更改签名.md'},
                            {text: 'Remove Parameter - 删除参数.md', link: '/refactoring/1.ChangeFunctionDeclaration-更改函数声明/3. Remove Parameter - 删除参数.md'},
                            {text: 'Rename Function - 重命名函数.md', link: '/refactoring/1.ChangeFunctionDeclaration-更改函数声明/4. Rename Function - 重命名函数.md'},
                            {text: 'Rename Method - 重命名方法.md', link: '/refactoring/1.ChangeFunctionDeclaration-更改函数声明/5. Rename Method - 重命名方法.md'},
                        ]
                    },
                    {
                        text: "2.ChangeReferenceToValue-将引用更改为值",
                        items: [
                            {text: 'Change Reference to Value - 将引用更改为值.md', link: '/refactoring/2.ChangeReferenceToValue-将引用更改为值/1.Change Reference to Value - 将引用更改为值.md'},
                            {text: 'Change Value to Reference - 将值更改为引用.md', link: '/refactoring/2.ChangeReferenceToValue-将引用更改为值/2.Change Value to Reference - 将值更改为引用.md'},
                        ]
                    },
                    {
                        text: "3.Collapse Hierarchy-合并层次结构",
                        items: [
                            {text: 'Collapse Hierarchy - 合并层次结构.md', link: '/refactoring/3.Collapse Hierarchy-合并层次结构/1.Collapse Hierarchy - 合并层次结构.md'},
                            {text: 'Combine Functions into Class - 将函数合并到类中.md', link: '/refactoring/3.Collapse Hierarchy-合并层次结构/2.Combine Functions into Class - 将函数合并到类中.md'},
                            {text: 'Combine Functions into Transform - 将函数合并到转换中.md', link: '/refactoring/3.Collapse Hierarchy-合并层次结构/3.Combine Functions into Transform - 将函数合并到转换中.md'},
                        ]
                    },
                    {
                        text: "4.Consolidate Conditional Expression - 合并条件表达式",
                        items: [
                            {text: 'Consolidate Conditional Expression - 合并条件表达式.md', link: '/refactoring/4.Consolidate Conditional Expression - 合并条件表达式/1. Consolidate Conditional Expression - 合并条件表达式.md'},
                            {text: 'Decompose Conditional - 分解条件.md', link: '/refactoring/4.Consolidate Conditional Expression - 合并条件表达式/2. Decompose Conditional - 分解条件.md'},
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
                            {text: '基本元素', link: '/codechart/flowchart/1-基本元素.md'}
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
                        {text: '替换魔术数字为符号常量(Replace Magic Number with Symbolic Constant)', link: '/refactoring/11-replace-magic-number-with-symbolic-constant.md'},
                        {text: '引入外派 (Introduce Delegation)', link: '/refactoring/12-introduce-delegation.md'},
                        {text: '提取超类 (Extract Superclass)', link: '/refactoring/13-extract-superclass.md'},
                        {text: '内联临时变量 (Inline Temp)', link: '/refactoring/14-inline-temp.md'},
                        {text: '引入解释性变量 (Introduce Explaining Variable)', link: '/refactoring/15-introduce-explaining-variable.md'},
                        {text: '封装字段 (Encapsulate Field)', link: '/refactoring/16-encapsulate-field.md'},
                        {text: '替换继承为委托 (Replace Inheritance with Delegation)', link: '/refactoring/17-replace-inheritance-with-delegation.md'},
                        {text: '替换委托为继承 (Replace Delegation with Inheritance)', link: '/refactoring/18-replace-delegation-with-inheritance.md'},
                        {text: '引入工厂方法 (Introduce Factory Method)', link: '/refactoring/19-introduce-factory-method.md'},
                        {text: '以查询取代临时变量(Replace Temp with Query)', link: '/refactoring/20-replace-temp-with-query.md'},
                        {text: '以函数对象取代函数(Replace Function with Command)', link: '/refactoring/21-replace-function-with-command.md'},
                        {text: '自封装字段(Self Encapsulate Field)', link: '/refactoring/22-self-encapsulate-field.md'},
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
