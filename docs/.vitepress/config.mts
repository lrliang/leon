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
                        ]
                    },
                    {
                        text: "开发",
                        items: [
                            {text: 'TBD', link: '/'},
                        ]
                    },
                    {
                        text: "测试",
                        items: [
                            {text: 'TBD', link: '/'},
                        ]
                    },
                    {
                        text: "发布",
                        items: [
                            {text: 'TBD', link: '/'},
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
                    },
                    {
                        text: "5.Encapsulate Collection - 封装集合",
                        items: [
                            {text: 'Encapsulate Collection - 封装集合.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/1. Encapsulate Collection - 封装集合.md'},
                            {text: 'Encapsulate Record - 封装记录.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/2. Encapsulate Record - 封装记录.md'},
                            {text: 'Replace Record with Data Class - 用数据类替换记录.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/3. Replace Record with Data Class - 用数据类替换记录.md'},
                            {text: 'Encapsulate Variable - 封装变量.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/4. Encapsulate Variable - 封装变量.md'},
                            {text: 'Encapsulate Field - Self - Encapsulate Field - 封装字段 - 自我封装字段.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/5. Encapsulate Field - Self - Encapsulate Field - 封装字段 - 自我封装字段.md'},
                        ]
                    },
                    {
                        text: "6.Extract Class - 提取类",
                        items: [
                            {text: 'Extract Class - 提取类.md', link: '/refactoring/6.Extract Class - 提取类/1. Extract Class - 提取类.md'},
                            {text: 'Extract Function Method - 提取函数、方法.md', link: '/refactoring/6.Extract Class - 提取类/2. Extract Function Method - 提取函数、方法.md'},
                            {text: 'Extract Superclass - 提取超类.md', link: '/refactoring/6.Extract Class - 提取类/3. Extract Superclass - 提取超类.md'},
                            {text: 'Extract Variable - 提取变量.md', link: '/refactoring/6.Extract Class - 提取类/4. Extract Variable - 提取变量.md'},
                            {text: 'Introduce Explaining Variable - 引入解释性变量.md', link: '/refactoring/6.Extract Class - 提取类/5. Introduce Explaining Variable - 引入解释性变量.md'},

                        ]
                    },
                    {
                        text: "7.Inline Class - 内联类",
                        items: [
                            {text: 'Inline Class - 内联类.md', link: '/refactoring/7.Inline Class - 内联类/1. Inline Class - 内联类.md'},
                            {text: 'Hide Delegate - 隐藏委托.md', link: '/refactoring/7.Inline Class - 内联类/2. Hide Delegate - 隐藏委托.md'},
                            {text: 'Inline Function - 内联函数.md', link: '/refactoring/7.Inline Class - 内联类/3. Inline Function - 内联函数.md'},
                            {text: 'Inline Variable - 内联变量.md', link: '/refactoring/7.Inline Class - 内联类/4. Inline Variable - 内联变量.md'},
                            {text: 'Inline Temp - 内联临时变量.md', link: '/refactoring/7.Inline Class - 内联类/5. Inline Temp - 内联临时变量.md'},
                        ]
                    },
                    {
                        text: "8.Introduce Assertion - 引入断言",
                        items: [
                            {text: 'Introduce Assertion - 引入断言.md', link: '/refactoring/8.Introduce Assertion - 引入断言/1. Introduce Assertion - 引入断言.md'},
                            {text: 'Introduce Parameter Object - 引入参数对象.md', link: '/refactoring/8.Introduce Assertion - 引入断言/2. Introduce Parameter Object - 引入参数对象.md'},
                            {text: 'Introduce Special Case - 引入特殊情况类.md', link: '/refactoring/8.Introduce Assertion - 引入断言/3. Introduce Special Case - 引入特殊情况类.md'},
                            {text: 'Introduce Null Object - 引入空对象.md', link: '/refactoring/8.Introduce Assertion - 引入断言/4. Introduce Null Object - 引入空对象.md'},
                        ]
                    },
                    {
                        text: "9.Move Field - 移动字段",
                        items: [
                            {text: 'Move Field - 移动字段.md', link: '/refactoring/9.Move Field - 移动字段/1. Move Field - 移动字段.md'},
                            {text: 'Move Function - 移动函数.md', link: '/refactoring/9.Move Field - 移动字段/2. Move Function - 移动函数.md'},
                            {text: 'Move Statements into Function - 将语句移动到函数中.md', link: '/refactoring/9.Move Field - 移动字段/3. Move Statements into Function - 将语句移动到函数中.md'},
                            {text: 'Move Statements to Callers - 将语句移动到调用者处.md', link: '/refactoring/9.Move Field - 移动字段/4. Move Statements to Callers - 将语句移动到调用者处.md'},
                        ]
                    },
                    {
                        text: "10.Parameterize Function - 参数化函数",
                        items: [
                            {text: 'Parameterize Function - 参数化函数.md', link: '/refactoring/10.Parameterize Function - 参数化函数/1.Parameterize Function - 参数化函数.md'},
                            {text: 'Parameterize Method - 参数化方法.md', link: '/refactoring/10.Parameterize Function - 参数化函数/2.Parameterize Method - 参数化方法.md'},
                        ]
                    },
                    {
                        text: "11.Preserve Whole Object - 保留整个对象",
                        items: [
                            {text: 'Preserve Whole Object - 保留整个对象.md', link: '/refactoring/11.Preserve Whole Object - 保留整个对象/1.Preserve Whole Object - 保留整个对象.md'},
                        ]
                    },
                    {
                        text: "12.Pull Up Constructor Body - 上移构造函数体",
                        items: [
                            {text: 'Pull Up Constructor Body - 上移构造函数体.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/1.Pull Up Constructor Body - 上移构造函数体.md'},
                            {text: 'Pull Up Field - 上移字段.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/2.Pull Up Field - 上移字段.md'},
                            {text: 'Pull Up Method - 上移方法.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/3.Pull Up Method - 上移方法.md'},
                            {text: 'Push Down Field - 下移字段.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/4.Push Down Field - 下移字段.md'},
                            {text: 'Push Down Method - 下移方法.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/5.Push Down Method - 下移方法.md'},
                        ]
                    },
                    {
                        text: "13.Remove Dead Code - 删除死代码",
                        items: [
                            {text: 'Remove Dead Code - 删除死代码.md', link: '/refactoring/13.Remove Dead Code - 删除死代码/1.Remove Dead Code - 删除死代码.md'},
                            {text: 'Remove Flag Argument - 删除标志参数.md', link: '/refactoring/13.Remove Dead Code - 删除死代码/2.Remove Flag Argument - 删除标志参数.md'},
                        ]
                    },
                    {
                        text: "14.Remove Middle Man - 删除中间人",
                        items: [
                            {text: 'Remove Middle Man - 删除中间人.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/1.Remove Middle Man - 删除中间人.md'},
                            {text: 'Remove Setting Method - 删除设置方法.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/2.Remove Setting Method - 删除设置方法.md'},
                            {text: 'Remove Subclass - 删除子类.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/3.Remove Subclass - 删除子类.md'},
                            {text: 'Remove Control Flag - 删除控制标志.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/4.Remove Control Flag - 删除控制标志.md'},
                        ]
                    },
                    {
                        text: "15.Rename Field - 重命名字段",
                        items: [
                            {text: 'Rename Field - 重命名字段.md', link: '/refactoring/15.Rename Field - 重命名字段/1.Rename Field - 重命名字段.md'},
                            {text: 'Rename Variable - 重命名变量.md', link: '/refactoring/15.Rename Field - 重命名字段/2.Rename Variable - 重命名变量.md'},
                        ]
                    },
                    {
                        text: "16.Replace Command with Function - 用函数替换命令",
                        items: [
                            {text: 'Replace Command with Function - 用函数替换命令.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/1.Replace Command with Function - 用函数替换命令.md'},
                            {text: 'Replace Parameter with Explicit Methods - 用显式方法替换参数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/2.Replace Parameter with Explicit Methods - 用显式方法替换参数.md'},
                            {text: 'Replace Constructor with Factory Method - 用工厂方法替换构造函数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/3.Replace Constructor with Factory Method - 用工厂方法替换构造函数.md'},
                            {text: 'Replace Control Flag with Break - 用break替换控制标志.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/4.Replace Control Flag with Break - 用break替换控制标志.md'},
                            {text: 'Replace Subclass with Fields - 用字段替换子类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/5.Replace Subclass with Fields - 用字段替换子类.md'},
                            {text: 'Replace Duplicate Code with Function - 用函数替换重复代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/6.Replace Duplicate Code with Function - 用函数替换重复代码.md'},
                            {text: 'Replace Derived Variable with Query - 用查询替换派生变量.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/7.Replace Derived Variable with Query - 用查询替换派生变量.md'},
                            {text: 'Replace Error Code with Exception - 用异常替换错误代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/8.Replace Error Code with Exception - 用异常替换错误代码.md'},
                            {text: 'Replace Exception with Pre-check - 用预检查替换异常.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/9.Replace Exception with Pre-check - 用预检查替换异常.md'},
                            {text: 'Replace Exception with Test - 用测试替换异常.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/10.Replace Exception with Test - 用测试替换异常.md'},
                            {text: 'Replace Function with Command - 用命令替换函数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/11.Replace Function with Command - 用命令替换函数.md'},
                            {text: 'Replace Method with Method Object - 用方法对象替换方法.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/12.Replace Method with Method Object - 用方法对象替换方法.md'},
                            {text: 'Replace Inline Code with Function Call - 用函数调用替换内联代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/13.Replace Inline Code with Function Call - 用函数调用替换内联代码.md'},
                            {text: 'Replace Loop with Pipeline - 用管道替换循环.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/14.Replace Loop with Pipeline - 用管道替换循环.md'},
                            {text: 'Replace Magic Literal - 替换魔法字面量.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/15.Replace Magic Literal - 替换魔法字面量.md'},
                            {text: 'Replace Magic Number with Symbolic Constant - 用符号常量替换魔法数字.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/16.Replace Magic Number with Symbolic Constant - 用符号常量替换魔法数字.md'},
                            {text: 'Replace Nested Conditional with Guard Clauses - 用保护子句替换嵌套条件语句.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/17.Replace Nested Conditional with Guard Clauses - 用保护子句替换嵌套条件语句.md'},
                            {text: 'Replace Parameter with Query - 用查询替换参数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/18.Replace Parameter with Query - 用查询替换参数.md'},
                            {text: 'Replace Parameter with Method - 用方法替换参数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/19.Replace Parameter with Method - 用方法替换参数.md'},
                            {text: 'Replace Primitive with Object - 用对象替换基本类型.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/20.Replace Primitive with Object - 用对象替换基本类型.md'},
                            {text: 'Replace Data Value with Object - 用对象替换数据值.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/21.Replace Data Value with Object - 用对象替换数据值.md'},
                            {text: 'Replace Type Code with Class - 用类替换类型代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/22.Replace Type Code with Class - 用类替换类型代码.md'},
                            {text: 'Replace Query with Parameter - 用参数替换查询.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/23.Replace Query with Parameter - 用参数替换查询.md'},
                            {text: 'Replace Subclass with Delegate - 用委托替换子类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/24.Replace Subclass with Delegate - 用委托替换子类.md'},
                            {text: 'Replace Superclass with Delegate - 用委托替换超类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/25.Replace Superclass with Delegate - 用委托替换超类.md'},
                            {text: 'Replace Inheritance with Delegation - 用委托替换继承.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/26.Replace Inheritance with Delegation - 用委托替换继承.md'},
                            {text: 'Replace Temp with Query - 用查询替换临时变量.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/27.Replace Temp with Query - 用查询替换临时变量.md'},
                            {text: 'Replace Type Code with Subclasses - 用子类替换类型代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/28.Replace Type Code with Subclasses - 用子类替换类型代码.md'},
                            {text: 'Extract Subclass - 提取子类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/29.Extract Subclass - 提取子类.md'},
                            {text: 'Replace Type Code with State Strategy - 用状态 策略替换类型代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/30.Replace Type Code with State Strategy - 用状态 策略替换类型代码.md'},
                        ]
                    },
                    {
                        text: "17.Return Modified Value - 返回修改后的值",
                        items: [
                            {text: 'Return Modified Value - 返回修改后的值.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/1.Return Modified Value - 返回修改后的值.md'},
                            {text: 'Separate Query from Modifier - 将查询与修改操作分离.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/2.Separate Query from Modifier - 将查询与修改操作分离.md'},
                            {text: 'Slide Statements - 移动语句.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/3.Slide Statements - 移动语句.md'},
                            {text: 'Consolidate Duplicate Conditional Fragments - 合并重复的条件片段.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/4.Consolidate Duplicate Conditional Fragments - 合并重复的条件片段.md'},
                            {text: 'Split Loop - 拆分循环.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/5.Split Loop - 拆分循环.md'},
                            {text: 'Split Phase - 拆分阶段.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/6.Split Phase - 拆分阶段.md'},
                            {text: 'Split Variable - 拆分变量.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/7.Split Variable - 拆分变量.md'},
                            {text: 'Remove Assignments to Parameters - 删除对参数的赋值.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/8.Remove Assignments to Parameters - 删除对参数的赋值.md'},
                            {text: 'Split Temp - 拆分临时变量.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/9.Split Temp - 拆分临时变量.md'},
                            {text: '.Substitute Algorithm - 替换算法.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/10.Substitute Algorithm - 替换算法.md'},
                        ]
                    },
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
                            {text: 'Week1', link: '/'},
                            {text: 'Week2', link: '/'},
                            {text: 'Week3', link: '/'}
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
                            {text: 'TBD', link: '/'},
                        ]
                    },
                    {
                        text: "学习经历",
                        items: [
                            {text: 'TBD', link: '/'},
                        ]
                    },
                    {
                        text: "旅行",
                        items: [
                            {text: 'TBD', link: '/'},
                        ]
                    },
                    {
                        text: "生活",
                        items: [
                            {text: 'TBD', link: '/'},
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/refactoring/': [
                {text: '《重构——终极总结》', link: '/refactoring/0-introduction.md'},
                {
                    text: "1.ChangeFunctionDeclaration-更改函数声明",
                    collapsed: true,
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
                    collapsed: true,
                    items: [
                        {text: 'Change Reference to Value - 将引用更改为值.md', link: '/refactoring/2.ChangeReferenceToValue-将引用更改为值/1.Change Reference to Value - 将引用更改为值.md'},
                        {text: 'Change Value to Reference - 将值更改为引用.md', link: '/refactoring/2.ChangeReferenceToValue-将引用更改为值/2.Change Value to Reference - 将值更改为引用.md'},
                    ]
                },
                {
                    text: "3.Collapse Hierarchy-合并层次结构",
                    collapsed: true,
                    items: [
                        {text: 'Collapse Hierarchy - 合并层次结构.md', link: '/refactoring/3.Collapse Hierarchy-合并层次结构/1.Collapse Hierarchy - 合并层次结构.md'},
                        {text: 'Combine Functions into Class - 将函数合并到类中.md', link: '/refactoring/3.Collapse Hierarchy-合并层次结构/2.Combine Functions into Class - 将函数合并到类中.md'},
                        {text: 'Combine Functions into Transform - 将函数合并到转换中.md', link: '/refactoring/3.Collapse Hierarchy-合并层次结构/3.Combine Functions into Transform - 将函数合并到转换中.md'},
                    ]
                },
                {
                    text: "4.Consolidate Conditional Expression - 合并条件表达式",
                    collapsed: true,
                    items: [
                        {text: 'Consolidate Conditional Expression - 合并条件表达式.md', link: '/refactoring/4.Consolidate Conditional Expression - 合并条件表达式/1. Consolidate Conditional Expression - 合并条件表达式.md'},
                        {text: 'Decompose Conditional - 分解条件.md', link: '/refactoring/4.Consolidate Conditional Expression - 合并条件表达式/2. Decompose Conditional - 分解条件.md'},
                    ]
                },
                {
                    text: "5.Encapsulate Collection - 封装集合",
                    collapsed: true,
                    items: [
                        {text: 'Encapsulate Collection - 封装集合.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/1. Encapsulate Collection - 封装集合.md'},
                        {text: 'Encapsulate Record - 封装记录.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/2. Encapsulate Record - 封装记录.md'},
                        {text: 'Replace Record with Data Class - 用数据类替换记录.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/3. Replace Record with Data Class - 用数据类替换记录.md'},
                        {text: 'Encapsulate Variable - 封装变量.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/4. Encapsulate Variable - 封装变量.md'},
                        {text: 'Encapsulate Field - Self - Encapsulate Field - 封装字段 - 自我封装字段.md', link: '/refactoring/5.Encapsulate Collection - 封装集合/5. Encapsulate Field - Self - Encapsulate Field - 封装字段 - 自我封装字段.md'},
                    ]
                },
                {
                    text: "6.Extract Class - 提取类",
                    collapsed: true,
                    items: [
                        {text: 'Extract Class - 提取类.md', link: '/refactoring/6.Extract Class - 提取类/1. Extract Class - 提取类.md'},
                        {text: 'Extract Function Method - 提取函数、方法.md', link: '/refactoring/6.Extract Class - 提取类/2. Extract Function Method - 提取函数、方法.md'},
                        {text: 'Extract Superclass - 提取超类.md', link: '/refactoring/6.Extract Class - 提取类/3. Extract Superclass - 提取超类.md'},
                        {text: 'Extract Variable - 提取变量.md', link: '/refactoring/6.Extract Class - 提取类/4. Extract Variable - 提取变量.md'},
                        {text: 'Introduce Explaining Variable - 引入解释性变量.md', link: '/refactoring/6.Extract Class - 提取类/5. Introduce Explaining Variable - 引入解释性变量.md'},

                    ]
                },
                {
                    text: "7.Inline Class - 内联类",
                    collapsed: true,
                    items: [
                        {text: 'Inline Class - 内联类.md', link: '/refactoring/7.Inline Class - 内联类/1. Inline Class - 内联类.md'},
                        {text: 'Hide Delegate - 隐藏委托.md', link: '/refactoring/7.Inline Class - 内联类/2. Hide Delegate - 隐藏委托.md'},
                        {text: 'Inline Function - 内联函数.md', link: '/refactoring/7.Inline Class - 内联类/3. Inline Function - 内联函数.md'},
                        {text: 'Inline Variable - 内联变量.md', link: '/refactoring/7.Inline Class - 内联类/4. Inline Variable - 内联变量.md'},
                        {text: 'Inline Temp - 内联临时变量.md', link: '/refactoring/7.Inline Class - 内联类/5. Inline Temp - 内联临时变量.md'},
                    ]
                },
                {
                    text: "8.Introduce Assertion - 引入断言",
                    collapsed: true,
                    items: [
                        {text: 'Introduce Assertion - 引入断言.md', link: '/refactoring/8.Introduce Assertion - 引入断言/1. Introduce Assertion - 引入断言.md'},
                        {text: 'Introduce Parameter Object - 引入参数对象.md', link: '/refactoring/8.Introduce Assertion - 引入断言/2. Introduce Parameter Object - 引入参数对象.md'},
                        {text: 'Introduce Special Case - 引入特殊情况类.md', link: '/refactoring/8.Introduce Assertion - 引入断言/3. Introduce Special Case - 引入特殊情况类.md'},
                        {text: 'Introduce Null Object - 引入空对象.md', link: '/refactoring/8.Introduce Assertion - 引入断言/4. Introduce Null Object - 引入空对象.md'},
                    ]
                },
                {
                    text: "9.Move Field - 移动字段",
                    collapsed: true,
                    items: [
                        {text: 'Move Field - 移动字段.md', link: '/refactoring/9.Move Field - 移动字段/1. Move Field - 移动字段.md'},
                        {text: 'Move Function - 移动函数.md', link: '/refactoring/9.Move Field - 移动字段/2. Move Function - 移动函数.md'},
                        {text: 'Move Statements into Function - 将语句移动到函数中.md', link: '/refactoring/9.Move Field - 移动字段/3. Move Statements into Function - 将语句移动到函数中.md'},
                        {text: 'Move Statements to Callers - 将语句移动到调用者处.md', link: '/refactoring/9.Move Field - 移动字段/4. Move Statements to Callers - 将语句移动到调用者处.md'},
                    ]
                },
                {
                    text: "10.Parameterize Function - 参数化函数",
                    collapsed: true,
                    items: [
                        {text: 'Parameterize Function - 参数化函数.md', link: '/refactoring/10.Parameterize Function - 参数化函数/1.Parameterize Function - 参数化函数.md'},
                        {text: 'Parameterize Method - 参数化方法.md', link: '/refactoring/10.Parameterize Function - 参数化函数/2.Parameterize Method - 参数化方法.md'},
                    ]
                },
                {
                    text: "11.Preserve Whole Object - 保留整个对象",
                    collapsed: true,
                    items: [
                        {text: 'Preserve Whole Object - 保留整个对象.md', link: '/refactoring/11.Preserve Whole Object - 保留整个对象/1.Preserve Whole Object - 保留整个对象.md'},
                    ]
                },
                {
                    text: "12.Pull Up Constructor Body - 上移构造函数体",
                    collapsed: true,
                    items: [
                        {text: 'Pull Up Constructor Body - 上移构造函数体.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/1.Pull Up Constructor Body - 上移构造函数体.md'},
                        {text: 'Pull Up Field - 上移字段.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/2.Pull Up Field - 上移字段.md'},
                        {text: 'Pull Up Method - 上移方法.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/3.Pull Up Method - 上移方法.md'},
                        {text: 'Push Down Field - 下移字段.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/4.Push Down Field - 下移字段.md'},
                        {text: 'Push Down Method - 下移方法.md', link: '/refactoring/12.Pull Up Constructor Body - 上移构造函数体/5.Push Down Method - 下移方法.md'},
                    ]
                },
                {
                    text: "13.Remove Dead Code - 删除死代码",
                    collapsed: true,
                    items: [
                        {text: 'Remove Dead Code - 删除死代码.md', link: '/refactoring/13.Remove Dead Code - 删除死代码/1.Remove Dead Code - 删除死代码.md'},
                        {text: 'Remove Flag Argument - 删除标志参数.md', link: '/refactoring/13.Remove Dead Code - 删除死代码/2.Remove Flag Argument - 删除标志参数.md'},
                    ]
                },
                {
                    text: "14.Remove Middle Man - 删除中间人",
                    collapsed: true,
                    items: [
                        {text: 'Remove Middle Man - 删除中间人.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/1.Remove Middle Man - 删除中间人.md'},
                        {text: 'Remove Setting Method - 删除设置方法.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/2.Remove Setting Method - 删除设置方法.md'},
                        {text: 'Remove Subclass - 删除子类.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/3.Remove Subclass - 删除子类.md'},
                        {text: 'Remove Control Flag - 删除控制标志.md', link: '/refactoring/14.Remove Middle Man - 删除中间人/4.Remove Control Flag - 删除控制标志.md'},
                    ]
                },
                {
                    text: "15.Rename Field - 重命名字段",
                    collapsed: true,
                    items: [
                        {text: 'Rename Field - 重命名字段.md', link: '/refactoring/15.Rename Field - 重命名字段/1.Rename Field - 重命名字段.md'},
                        {text: 'Rename Variable - 重命名变量.md', link: '/refactoring/15.Rename Field - 重命名字段/2.Rename Variable - 重命名变量.md'},
                    ]
                },
                {
                    text: "16.Replace Command with Function - 用函数替换命令",
                    collapsed: true,
                    items: [
                        {text: 'eplace Command with Function - 用函数替换命令.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/1.Replace Command with Function - 用函数替换命令.md'},
                        {text: 'eplace Parameter with Explicit Methods - 用显式方法替换参数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/2.Replace Parameter with Explicit Methods - 用显式方法替换参数.md'},
                        {text: 'eplace Constructor with Factory Method - 用工厂方法替换构造函数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/3.Replace Constructor with Factory Method - 用工厂方法替换构造函数.md'},
                        {text: 'eplace Control Flag with Break - 用break替换控制标志.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/4.Replace Control Flag with Break - 用break替换控制标志.md'},
                        {text: 'eplace Subclass with Fields - 用字段替换子类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/5.Replace Subclass with Fields - 用字段替换子类.md'},
                        {text: 'eplace Duplicate Code with Function - 用函数替换重复代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/6.Replace Duplicate Code with Function - 用函数替换重复代码.md'},
                        {text: 'eplace Derived Variable with Query - 用查询替换派生变量.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/7.Replace Derived Variable with Query - 用查询替换派生变量.md'},
                        {text: 'eplace Error Code with Exception - 用异常替换错误代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/8.Replace Error Code with Exception - 用异常替换错误代码.md'},
                        {text: 'eplace Exception with Pre-check - 用预检查替换异常.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/9.Replace Exception with Pre-check - 用预检查替换异常.md'},
                        {text: 'Replace Exception with Test - 用测试替换异常.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/10.Replace Exception with Test - 用测试替换异常.md'},
                        {text: 'Replace Function with Command - 用命令替换函数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/11.Replace Function with Command - 用命令替换函数.md'},
                        {text: 'Replace Method with Method Object - 用方法对象替换方法.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/12.Replace Method with Method Object - 用方法对象替换方法.md'},
                        {text: 'Replace Inline Code with Function Call - 用函数调用替换内联代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/13.Replace Inline Code with Function Call - 用函数调用替换内联代码.md'},
                        {text: 'Replace Loop with Pipeline - 用管道替换循环.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/14.Replace Loop with Pipeline - 用管道替换循环.md'},
                        {text: 'Replace Magic Literal - 替换魔法字面量.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/15.Replace Magic Literal - 替换魔法字面量.md'},
                        {text: 'Replace Magic Number with Symbolic Constant - 用符号常量替换魔法数字.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/16.Replace Magic Number with Symbolic Constant - 用符号常量替换魔法数字.md'},
                        {text: 'Replace Nested Conditional with Guard Clauses - 用保护子句替换嵌套条件语句.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/17.Replace Nested Conditional with Guard Clauses - 用保护子句替换嵌套条件语句.md'},
                        {text: 'Replace Parameter with Query - 用查询替换参数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/18.Replace Parameter with Query - 用查询替换参数.md'},
                        {text: 'Replace Parameter with Method - 用方法替换参数.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/19.Replace Parameter with Method - 用方法替换参数.md'},
                        {text: 'Replace Primitive with Object - 用对象替换基本类型.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/20.Replace Primitive with Object - 用对象替换基本类型.md'},
                        {text: 'Replace Data Value with Object - 用对象替换数据值.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/21.Replace Data Value with Object - 用对象替换数据值.md'},
                        {text: 'Replace Type Code with Class - 用类替换类型代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/22.Replace Type Code with Class - 用类替换类型代码.md'},
                        {text: 'Replace Query with Parameter - 用参数替换查询.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/23.Replace Query with Parameter - 用参数替换查询.md'},
                        {text: 'Replace Subclass with Delegate - 用委托替换子类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/24.Replace Subclass with Delegate - 用委托替换子类.md'},
                        {text: 'Replace Superclass with Delegate - 用委托替换超类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/25.Replace Superclass with Delegate - 用委托替换超类.md'},
                        {text: 'Replace Inheritance with Delegation - 用委托替换继承.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/26.Replace Inheritance with Delegation - 用委托替换继承.md'},
                        {text: 'Replace Temp with Query - 用查询替换临时变量.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/27.Replace Temp with Query - 用查询替换临时变量.md'},
                        {text: 'Replace Type Code with Subclasses - 用子类替换类型代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/28.Replace Type Code with Subclasses - 用子类替换类型代码.md'},
                        {text: 'Extract Subclass - 提取子类.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/29.Extract Subclass - 提取子类.md'},
                        {text: 'Replace Type Code with State Strategy - 用状态 策略替换类型代码.md', link: '/refactoring/16.Replace Command with Function - 用函数替换命令/30.Replace Type Code with State Strategy - 用状态 策略替换类型代码.md'},
                    ]
                },
                {
                    text: "17.Return Modified Value - 返回修改后的值",
                    collapsed: true,
                    items: [
                        {text: 'Return Modified Value - 返回修改后的值.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/1.Return Modified Value - 返回修改后的值.md'},
                        {text: 'Separate Query from Modifier - 将查询与修改操作分离.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/2.Separate Query from Modifier - 将查询与修改操作分离.md'},
                        {text: 'Slide Statements - 移动语句.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/3.Slide Statements - 移动语句.md'},
                        {text: 'Consolidate Duplicate Conditional Fragments - 合并重复的条件片段.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/4.Consolidate Duplicate Conditional Fragments - 合并重复的条件片段.md'},
                        {text: 'Split Loop - 拆分循环.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/5.Split Loop - 拆分循环.md'},
                        {text: 'Split Phase - 拆分阶段.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/6.Split Phase - 拆分阶段.md'},
                        {text: 'Split Variable - 拆分变量.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/7.Split Variable - 拆分变量.md'},
                        {text: 'Remove Assignments to Parameters - 删除对参数的赋值.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/8.Remove Assignments to Parameters - 删除对参数的赋值.md'},
                        {text: 'Split Temp - 拆分临时变量.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/9.Split Temp - 拆分临时变量.md'},
                        {text: '.Substitute Algorithm - 替换算法.md', link: '/refactoring/17.Return Modified Value - 返回修改后的值/10.Substitute Algorithm - 替换算法.md'},
                    ]
                },
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
