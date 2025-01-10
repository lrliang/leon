# 引入解释性变量 (Introduce Explaining Variable)

## 简介
“引入解释性变量”是一种有助于提升代码可读性的重构技术。当遇到复杂的表达式或冗长的计算逻辑时，通过引入一个或多个具有描述性名称的变量，将复杂逻辑拆解，让代码的意图更清晰易懂，后续维护与调试也会更加便捷。

## 引入解释性变量的详细步骤

### 1. 定位复杂表达式
- **扫描代码**：仔细查看代码中的语句，重点关注那些包含多个运算符、函数调用，或是嵌套多层逻辑的表达式。例如，像`double result = value1 * (1 + value2 / value3) - complexFunctionCall();`这种一眼难以看清运算意图的式子。
- **考虑维护难度**：如果一段表达式不仅复杂，还频繁出现在代码不同位置，那它就是引入解释性变量的绝佳候选。复杂且重复的表达式会让后续修改风险大增，引入变量能降低风险。

### 2. 提取子表达式并命名
- **拆解逻辑**：从复杂表达式里挑选出相对独立、有明确意义的子表达式，为其定义新的变量。以上面例子来说，可以把`value2 / value3`提取出来，根据其计算意义，命名为`ratio`。新变量的名称要遵循项目命名规范，选用能精准传达子表达式功能的词汇。
- **赋值变量**：将提取出的子表达式赋值给新定义的变量，让代码变成类似`double ratio = value2 / value3;`，`double result = value1 * (1 + ratio) - complexFunctionCall();`的形式。

### 3. 检查变量作用域与类型
- **作用域合理性**：确保新引入变量的作用域恰到好处，既不过宽导致不必要的资源占用与潜在冲突，也不过窄而无法在需要解释的地方使用。通常，局部变量在包含复杂表达式的最小代码块内定义即可。
- **类型匹配**：变量的类型要与子表达式计算结果的类型严格匹配，防止因类型问题引入新的错误。多数现代编程语言有类型检查机制，编译或运行代码时会给出类型不匹配提示。

### 4. 测试
- **编译代码**：尝试编译代码，确认引入新变量后没有语法错误，尤其要留意变量声明、赋值与使用过程中的语法细节，像遗漏分号、错误使用括号等问题。
- **运行测试**：运行所有相关的单元测试，保证重构操作没有破坏原有功能。由于只是引入新变量拆分表达式，理论上不应改变程序行为，但实际仍需测试验证。
- **手动测试**：对于涉及复杂业务逻辑、用户界面交互的关键部分，如有需要，开展手动测试，进一步核实功能完整性。

### 5. 代码审查
- **同行评审**：邀请同事审查修改后的代码，从他人视角检查新引入变量是否真的提升了可读性，有没有制造新的理解难点，或是引发潜在代码隐患。
- **文档更新**：如果项目有维护文档的习惯，针对重构部分更新文档，记录新变量的含义、引入原因，方便后续开发者快速掌握代码变更。

## 示例
假设有如下代码：

```java
public class ComplexCalculation {
    public static void main(String[] args) {
        double value1 = 10;
        double value2 = 20;
        double value3 = 5;
        double result = value1 * (1 + value2 / value3) - Math.sqrt(value1);
        System.out.println(result);
    }
}
```

### 步骤如下：

1. **定位复杂表达式**：
   - 表达式`value1 * (1 + value2 / value3) - Math.sqrt(value1)`较为复杂，不易直接看出计算逻辑。
2. **提取子表达式并命名**：
   - 提取`value2 / value3`，将其命名为`divisionResult`，表示除法运算的结果。代码变为：
   ```java
    double divisionResult = value2 / value3;
    double result = value1 * (1 + divisionResult) - Math.sqrt(value1);
   ```
3. **检查变量作用域与类型**：
   - divisionResult作用域在main方法内，合适；其类型为double，与value2 / value3计算结果类型匹配。
4. **测试**：
   - 编译代码：编译代码，未发现语法错误。
   - 运行测试：运行main方法，查看控制台输出与重构前一致，无功能问题。
5. **代码审查**：
   - 同行评审：让同事查看代码，确认新变量让计算过程更易理解。
   - 文档更新：在代码注释里简单说明divisionResult的含义，辅助后续开发。

### 重构后的代码：
```java
public class ComplexCalculation {
    public static void main(String[] args) {
        double value1 = 10;
        double value2 = 20;
        double value3 = 5;
        double divisionResult = value2 / value3;
        double result = value1 * (1 + divisionResult) - Math.sqrt(value1);
        System.out.println(result);
    }
}
```