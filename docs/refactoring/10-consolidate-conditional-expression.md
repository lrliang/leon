# 合并条件表达式 (Consolidate Conditional Expression)

## 简介

“合并条件表达式”是一种实用的重构手法，旨在简化代码中冗余、分散的条件判断逻辑。当多个条件语句执行相似的检查或者最终导向相同的结果时，将它们合并起来，能够让代码更加紧凑、易读，降低维护成本，同时也减少出错的可能性。

## 合并条件表达式 (Consolidate Conditional Expression) 的详细步骤

### 1. 定位可合并的条件表达式

- **扫描相似条件**：仔细查看代码中的 `if`、`else if`
  语句块，留意那些检查同类型数据、执行相似逻辑判断的条件。例如，多个条件都在判断一个数值是否处于某个特定区间，或者多个条件都在核验某个对象的同一属性是否满足特定要求。
- **追踪结果一致性**：除了条件形式相似，还要确认这些条件最终产生的结果是一致的。也就是，无论哪个条件满足，都会执行相同的代码片段或者返回相同的值。

### 2. 提取公共逻辑

- **剖析条件细节**：深入分析可合并条件的内部逻辑，找出它们共有的子表达式、变量访问或者方法调用。把这些公共部分提取出来，形成独立的逻辑单元。
- **封装公共部分**：将提取出来的公共逻辑封装成一个新的方法或者局部变量，这样既能复用代码，又能让主流程中的条件判断更加清晰。给新方法或变量起一个表意明确的名字，反映其执行的逻辑。

### 3. 合并条件语句

- **重写主判断**：使用提取出的公共逻辑来改写原来分散的条件语句，将多个条件合并成一个更简洁的复合条件。例如，原本多个 `if`
  语句分别判断不同变量是否大于某个阈值，提取公共比较逻辑后，就可以用一个 `if` 语句结合逻辑运算符来判断。
- **调整代码结构**：在合并条件的过程中，可能需要微调代码的缩进、括号使用等结构，确保新的条件表达式语法正确且符合代码风格规范。

### 4. 测试

- **编译代码**：完成条件合并后，首先尝试编译代码，修复出现的任何语法错误。编译成功是后续测试的基础，确保代码的基本语法结构没有因重构被破坏。
- **单元测试**：运行与这段代码相关的所有单元测试。由于只是合并条件，没有改变核心业务逻辑，正常情况下，所有测试用例都应顺利通过。若有测试失败，需仔细排查合并过程是否引入了逻辑漏洞。
- **手动测试**：对于涉及用户界面交互、外部接口调用这类较复杂场景的代码，除了单元测试，还应进行手动测试，确保功能没有因为条件合并而受到影响。

### 5. 代码审查

- **同行评审**：邀请同事对重构后的代码进行审查，重点检查合并后的条件表达式是否正确反映了原来的逻辑，代码整体可读性是否提升，有没有引入潜在的维护风险。
- **文档更新**：如果项目有维护文档的习惯，记得更新相关文档，说明进行了条件合并操作以及这么做的原因，方便后续维护人员理解代码变更。

## 示例

假设有如下一段代码，用于判断用户是否有资格获得折扣：

```java
public class DiscountChecker {
    private int purchaseAmount;
    private boolean isNewUser;

    public boolean canGetDiscount() {
        if (purchaseAmount > 100) {
            return true;
        }
        if (isNewUser && purchaseAmount > 50) {
            return true;
        }
        return false;
    }
}
```

### 步骤如下：

1. **定位可合并的条件表达式**：
    - 两个 `if` 语句都在判断用户是否能获得折扣，且最终都返回 `true`，属于可合并的条件。
2. **提取公共逻辑**：
    - 提取公共部分，即对购买金额的判断逻辑。可以封装成一个新方法：
    ```java
    private boolean meetsPurchaseRequirement() {
        return purchaseAmount > 100 || (isNewUser && purchaseAmount > 50);
    }
    ```
3. **合并条件语句**：
    - 改写 `canGetDiscount` 方法：
    ```java
    public boolean canGetDiscount() {
        return meetsPurchaseRequirement();
    }
    ```
4. **测试**：
    - **编译代码**：代码编译无误。
    - **单元测试**：运行相关单元测试，所有测试用例通过，表明重构未引入新错误。
5. **代码审查**：
    - **同行评审**：同事审查后，认可新方法提升了代码可读性，逻辑无误。
    - **文档更新**：若项目有文档，更新相关部分说明此次重构改动。 