# 引入外派 (Introduce Delegation)

## 简介
“引入外派”是一种重构手法，旨在通过将部分职责委托给另一个对象，来提升代码的模块化与可维护性。当一个类承担的任务过多、职责繁杂时，利用这种手法可以把特定的工作交给更适合处理它的类，从而让代码结构更清晰，各模块分工更明确。

## 引入外派的详细步骤

### 1. 定位职责过重的类
- **梳理功能**：仔细查看类中的方法与属性，识别出那些执行多种不同类型任务的类。例如，一个类既负责数据的读取、解析，又进行复杂的业务逻辑运算，很可能就职责过重。
- **分析复杂度**：如果一个类中的某个方法代码行数超长，嵌套多层逻辑判断与循环，大概率是它包揽了过多本可拆分的任务。

### 2. 确定可外派的职责
- **独立功能提取**：从职责过重的类里，找出那些逻辑相对独立、自成一体的功能片段。比如，在一个电商订单处理类中，“计算运费”这一功能与其他订单状态更新、商品信息管理功能关联性不强，就适合提取。
- **通用性考量**：判断提取出的功能是否具有一定通用性，若其他类也可能复用，那更是引入外派的好候选。像数据格式转换这类操作，常能被不同模块复用。

### 3. 创建受托类
- **定义新类**：依据确定要外派的职责，创建一个新的类。这个类的设计应聚焦于被委托的特定任务，属性与方法围绕该任务构建。例如，要外派“用户权限验证”职责，新类就围绕权限相关数据与验证逻辑设计。
- **设计接口**：为保证灵活性，给受托类定义清晰的接口，明确它能接收什么参数、返回什么结果。这便于后续替换不同实现，或者在测试时方便模拟。

### 4. 建立委托关系
- **注入受托类**：在原职责过重的类中，添加一个属性来持有受托类的实例。可以通过构造函数注入、 setter 方法注入等方式，将受托类实例引入原类。
- **调用受托方法**：在原类需要执行外派职责的地方，调用受托类对应的方法，把相关数据传递过去，获取处理结果。

### 5. 测试
- **单元测试**：分别对原类和受托类编写单元测试。原类的单元测试要验证是否正确调用了受托类方法，以及后续流程的正确性；受托类则专注测试自身独立的功能逻辑，确保能正确处理各种输入输出。
- **集成测试**：进行集成测试，检验原类与受托类协同工作时，整个系统功能是否符合预期，数据流、控制流是否顺畅。

### 6. 代码审查
- **同行评审**：邀请同事审查代码，检查新的类设计是否合理，委托关系是否清晰，有没有引入新的潜在风险，例如循环依赖等问题。
- **文档更新**：更新项目文档，清晰说明引入新类的目的、职责，以及与原类的交互关系，方便后续开发者理解代码架构。

## 示例
假设有一个 `OrderProcessor` 类，它不仅处理订单的创建、修改，还负责计算订单折扣：

   ```java
   public class OrderProcessor {
       private double orderTotal;
   
       public OrderProcessor(double initialTotal) {
       this.orderTotal = initialTotal;
       }
   
       public double calculateDiscount() {
       // 复杂的折扣计算逻辑，例如根据不同促销活动、用户等级等
       if (orderTotal > 100 && orderTotal < 200) {
           return orderTotal * 0.1;
       } else if (orderTotal >= 200) {
           return orderTotal * 0.2;
       }
       return 0;
       }
   
       public double getFinalTotal() {
       double discount = calculateDiscount();
       return orderTotal - discount;
       }
   }
   ```

### 步骤如下：

1. **定位职责过重的类**：`OrderProcessor` 类既管理订单总额，又负责复杂的折扣计算，职责过多。
2. **确定可外派的职责**：“计算折扣”这一功能逻辑独立，适合外派。
3. **创建受托类**：
   ```java
   public class DiscountCalculator {
       private double total;
   
       public DiscountCalculator(double total) {
       this.total = total;
       }
   
       public double calculate() {
       if (total > 100 && total < 200) {
           return total * 0.1;
       } else if (total >= 200) {
           return total * 0.2;
       }
       return 0;
       }
   }
   ```
4. **建立委托关系**：
   ```java
   public class OrderProcessor {
       private double orderTotal;
       private DiscountCalculator discountCalculator;
   
       public OrderProcessor(double initialTotal) {
       this.orderTotal = initialTotal;
       this.discountCalculator = new DiscountCalculator(initialTotal);
       }
   
       public double getFinalTotal() {
       double discount = discountCalculator.calculate();
       return orderTotal - discount;
       }
   }
   ```
5. **测试**：
   - **单元测试**：为 `DiscountCalculator` 编写测试，验证不同输入下折扣计算是否正确；为 `OrderProcessor` 测试是否正确调用 `DiscountCalculator` 并得到正确的最终总价。
   - **集成测试**：测试两者集成后，整个订单总价计算流程是否无误。
6. **代码审查**：
   - **同行评审**：让同事检查代码，看新类设计、委托关系有无问题。
   - **文档更新**：更新文档说明 `DiscountCalculator` 的引入及与 `OrderProcessor` 的交互。 