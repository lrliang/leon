## 简介
“提取方法”（Extract Method）是一种常用的重构技术，通过将一段代码提取到一个独立的方法中，可以提高代码的可读性和可维护性。这种方法特别适用于那些重复出现或逻辑复杂的代码块。以下是进行“提取方法”重构的详细步骤：

## 提取方法（Extract Method）的详细步骤
1. 识别需要提取的代码块
   寻找重复代码：在代码中找到重复出现的代码块。
   识别复杂逻辑：找到逻辑复杂且难以理解的代码块。
   评估代码块的独立性：确保提取的代码块具有一定的独立性和完整性，可以作为一个独立的方法存在。
2. 创建新的方法
   选择有意义的方法名：为新的方法选择一个能够清晰描述其功能的名称。
   提取代码块：将选定的代码块复制到新的方法中。
   传递必要的参数：确保新的方法能够接收必要的参数，以完成其功能。
   返回值：如果需要，确保新的方法能够返回必要的值。
3. 替换原始代码
   调用新方法：在原始代码中，用调用新方法的语句替换提取的代码块。
   清理未使用的变量：删除不再需要的局部变量或临时变量。
4. 测试
   编译代码：确保代码编译通过，没有任何语法错误。
   运行测试：运行所有相关的单元测试，确保重构操作没有引入新的错误。
   手动测试：如果有必要，进行手动测试以验证功能的正确性。
5. 代码审查
   同行评审：让同事或其他团队成员审查你的更改，确保代码质量和可维护性没有下降。
   文档更新：如果项目有维护文档的习惯，记得更新相关文档，说明提取方法的影响。

## 示例
假设有一个方法 calculateTotal，其中包含一段复杂的计算逻辑，我们希望对其进行“提取方法”的重构：
```java
public class Order {
    private double price;
    private int quantity;
    private double taxRate;
    private double shippingCost;

    public double calculateTotal() {
        double subTotal = price * quantity;
        double tax = subTotal * taxRate;
        double finalTotal = subTotal + tax;
        if (quantity > 10) {
            finalTotal += shippingCost;
        }
        return finalTotal;
    }
}
```

## 步骤如下：
1. 识别需要提取的代码块：
   - 复杂的计算逻辑： `double subTotal = price * quantity; double tax = subTotal * taxRate; double finalTotal = subTotal + tax; if (quantity > 10) { finalTotal += shippingCost; }`
2. 创建新的方法：
   - 选择有意义的方法名，例如 calculateFinalTotal：
   - 提取代码块并传递必要的参数：
   ```java
   private double calculateFinalTotal(double price, int quantity, double taxRate, double shippingCost) {
       double subTotal = price * quantity;
       double tax = subTotal * taxRate;
       double finalTotal = subTotal + tax;
       if (quantity > 10) {
           finalTotal += shippingCost;
       }
       return finalTotal;
   }
   ```
3. 替换原始代码：
   - 在 calculateTotal 方法中，用调用新方法的语句替换提取的代码块：
   ```java
   public class Order {
       private double price;
       private int quantity;
       private double taxRate;
       private double shippingCost;
   
       public double calculateTotal() {
           return calculateFinalTotal(price, quantity, taxRate, shippingCost);
       }
   
       private double calculateFinalTotal(double price, int quantity, double taxRate, double shippingCost) {
           double subTotal = price * quantity;
           double tax = subTotal * taxRate;
           double finalTotal = subTotal + tax;
           if (quantity > 10) {
               finalTotal += shippingCost;
           }
           return finalTotal;
       }
   }
   ```
4. 测试:
   - 编译代码：确保代码编译通过，没有任何语法错误。
   - 运行测试：运行所有相关的单元测试，确保重构操作没有引入新的错误。
5. 代码审查：
   - 让同事审查代码，确保没有引入新的问题。