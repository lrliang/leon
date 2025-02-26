## 简介
“提取方法”（Extract Method）是一种常用的重构手法，通过将一段代码提取到一个独立的方法中，可以提高代码的可读性和可维护性。这种方法特别适用于那些重复出现或逻辑复杂的代码块。以下是进行“提取方法”重构的详细步骤：

## 针对的症状（代码坏味道）
- 过长的方法（Long Method）
- 重复的代码（Duplicated Code）
- 代码块内的逻辑过于复杂（Complex Logic in a Block）

## 提取方法（Extract Method）的详细步骤
1. 识别需要提取的代码块
   - 寻找重复代码：在代码中找到重复出现的代码块。
   - 识别复杂逻辑：找到逻辑复杂且难以理解的代码块。
   - 评估代码块的独立性：确保提取的代码块具有一定的独立性和完整性，可以作为一个独立的方法存在。
2. 创建新的方法
   - 选择有意义的方法名：为新的方法选择一个能够清晰描述其功能的名称。
   - 提取代码块：将选定的代码块复制到新的方法中。
   - 传递必要的参数：确保新的方法能够接收必要的参数，以完成其功能。
   - 返回值：如果需要，确保新的方法能够返回必要的值。
3. 替换原始代码
   - 调用新方法：在原始代码中，用调用新方法的语句替换提取的代码块。
   - 清理未使用的变量：删除不再需要的局部变量或临时变量。
4. 测试
   - 编译代码：确保代码编译通过，没有任何语法错误。
   - 运行测试：运行所有相关的单元测试，确保重构操作没有引入新的错误。
   - 手动测试：如果有必要，进行手动测试以验证功能的正确性。
5. 代码审查
   - 同行评审：让同事或其他团队成员审查你的更改，确保代码质量和可维护性没有下降。
   - 文档更新：如果项目有维护文档的习惯，记得更新相关文档，说明提取方法的影响。

## 示例
假设有一个方法 calculateTotal，其中包含一段复杂的计算逻辑，我们希望对其进行“提取方法”的重构：
@@@java
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
@@@

## 步骤如下：
1. 识别需要提取的代码块：
   - 复杂的计算逻辑： `double subTotal = price * quantity; double tax = subTotal * taxRate; double finalTotal = subTotal + tax; if (quantity > 10) { finalTotal += shippingCost; }`
2. 创建新的方法：
   - 选择有意义的方法名，例如 calculateFinalTotal：
   - 提取代码块并传递必要的参数：
   @@@java
   private double calculateFinalTotal(double price, int quantity, double taxRate, double shippingCost) {
       double subTotal = price * quantity;
       double tax = subTotal * taxRate;
       double finalTotal = subTotal + tax;
       if (quantity > 10) {
           finalTotal += shippingCost;
       }
       return finalTotal;
   }
   @@@
3. 替换原始代码：
   - 在 calculateTotal 方法中，用调用新方法的语句替换提取的代码块：
   @@@java
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
   @@@
4. 测试:
   - 编译代码：确保代码编译通过，没有任何语法错误。
   - 运行测试：运行所有相关的单元测试，确保重构操作没有引入新的错误。
5. 代码审查：
   - 让同事审查代码，确保没有引入新的问题。


## 练习
### 基础练习题
1. 过长方法的提取
   - 给定以下 Java 代码，processUserInput方法过长且逻辑复杂。请将计算用户年龄的部分提取成一个独立的方法。
      @@@java
      public class UserProcessor {
          private String birthYearInput;

          public UserProcessor(String birthYearInput) {
              this.birthYearInput = birthYearInput;
          }

          public void processUserInput() {
              int age = calculateAge();
              System.out.println("User's age is: " + age);
              if (age >= 18) {
                  System.out.println("User is an adult.");
              } else {
                  System.out.println("User is a minor.");
              }
          }

          private int calculateAge() {
              int currentYear = 2025;
              int birthYear = Integer.parseInt(birthYearInput);
              return currentYear - birthYear;
          }
      }
      @@@
2. 重复代码的提取
   - 下面的 Java 代码中有两个方法calculateRectangleArea和calculateSquareArea，都包含计算面积的重复代码。请将计算面积的代码提取成一个独立的方法。
   @@@java
   public class ShapeCalculator {
       public void calculateRectangleArea(int length, int width) {
           int area = calculateArea(length, width);
           System.out.println("Rectangle area is: " + area);
       }

       public void calculateSquareArea(int side) {
           int area = calculateArea(side, side);
           System.out.println("Square area is: " + area);
       }

       private int calculateArea(int dim1, int dim2) {
           return dim1 * dim2;
       }
   }
   @@@

### 进阶练习题
1. 复杂逻辑块提取与参数传递
   - 在这段 Java 代码中，calculateShippingCost方法内的逻辑较为复杂。请将计算折扣后的运费逻辑提取成一个独立方法，并正确处理参数传递。
   @@@java
   public class OrderShipping {
       private double baseShippingCost;
       private int orderQuantity;
       private double discountRate;

       public OrderShipping(double baseShippingCost, int orderQuantity, double discountRate) {
           this.baseShippingCost = baseShippingCost;
           this.orderQuantity = orderQuantity;
           this.discountRate = discountRate;
       }

       public double calculateShippingCost() {
           return calculateDiscountedShippingCost(baseShippingCost, orderQuantity, discountRate);
       }

       private double calculateDiscountedShippingCost(double baseCost, int quantity, double rate) {
           double discountAmount = baseCost * rate;
           double discountedShippingCost = baseCost - discountAmount;
           if (quantity > 5) {
               discountedShippingCost -= 5;
           }
           return discountedShippingCost;
       }
   }
   @@@
2. 提取方法与返回值处理
   - 给定以下 Java 代码，processData方法包含复杂逻辑。请将数据转换和计算结果的部分提取成一个独立方法，并确保返回值正确处理。
   @@@java
   import java.util.ArrayList;
   import java.util.List;

   public class DataProcessor {
       public int processData(int[] dataArray) {
           List<Integer> processedData = transformData(dataArray);
           return calculateSum(processedData);
       }

       private List<Integer> transformData(int[] dataArray) {
           List<Integer> processedData = new ArrayList<>();
           for (int num : dataArray) {
               num = num * 2;
               if (num > 10) {
                   num = num - 5;
               }
               processedData.add(num);
           }
           return processedData;
       }

       private int calculateSum(List<Integer> processedData) {
           int sum = 0;
           for (int num : processedData) {
               sum += num;
           }
           return sum;
       }
   }
   @@@

### 综合拓展练习题
1. 多模块提取与代码审查模拟
   - 考虑一个简单的 Java 电商系统，有Product类、Cart类和Order类。Cart类中的calculateCartTotal方法和Order类中的calculateOrderTotal方法都有重复且复杂的计算总价逻辑，同时Cart类中的applyCartDiscount方法逻辑也较为复杂。
   - 请对这些方法进行 “提取方法” 重构，将重复和复杂逻辑提取成独立方法。
   - 假设你完成了重构，请模拟一份简单的代码审查报告，指出重构后的优点和可能存在的潜在问题。
   @@@java
   class Product {
       private double price;

       public Product(double price) {
           this.price = price;
       }

       public double getPrice() {
           return price;
       }
   }

   class Cart {
       private Product[] products;
       private double discountRate;

       public Cart(Product[] products, double discountRate) {
           this.products = products;
           this.discountRate = discountRate;
       }

       public double calculateCartTotal() {
           double total = calculateSubtotal(products);
           return applyDiscount(total, discountRate);
       }

       public void applyCartDiscount() {
           if (products.length > 3) {
               discountRate = adjustDiscountRate(discountRate, 0.05);
           }
           if (calculateCartTotal() > 100) {
               discountRate = adjustDiscountRate(discountRate, 0.1);
           }
       }

       private double calculateSubtotal(Product[] products) {
           double total = 0;
           for (Product product : products) {
               total += product.getPrice();
           }
           return total;
       }

       private double applyDiscount(double total, double rate) {
           double discountAmount = total * rate;
           return total - discountAmount;
       }

       private double adjustDiscountRate(double rate, double increment) {
           return rate + increment;
       }
   }

   class Order {
       private Product[] products;
       private double shippingCost;

       public Order(Product[] products, double shippingCost) {
           this.products = products;
           this.shippingCost = shippingCost;
       }

       public double calculateOrderTotal() {
           double total = calculateSubtotal(products);
           return total + shippingCost;
       }

       private double calculateSubtotal(Product[] products) {
           double total = 0;
           for (Product product : products) {
               total += product.getPrice();
           }
           return total;
       }
   }
   @@@


