# 提取超类 (Extract Superclass)

## 简介

“提取超类”是一种关键的重构技术，旨在消除重复代码，增强代码的层次性与结构性。当多个子类含有相似的属性、方法时，提取超类能够把这些共性部分向上抽取，让子类专注于各自独特的行为，进而提升代码的可维护性与可扩展性。

## 提取超类的详细步骤

### 1. 找出共性代码

- **分析子类**：仔细查看各个子类的代码，重点关注属性与方法。标记出那些名称、功能、逻辑实现都极为相似的部分。例如，若有几个图形类（如圆形类、矩形类）都有计算面积的方法，且部分变量用于存储通用的几何参数，这就属于共性代码。
- **梳理重复逻辑**：不仅是方法签名相同，还要留意方法内部逻辑存在重复步骤或者相似计算流程的情况，哪怕具体参数有所差异。

### 2. 创建超类

- **定义新类**：依据找出的共性，创建一个新的超类。超类的属性应涵盖那些重复出现的成员变量，方法则容纳共性的操作逻辑。超类的命名要能概括这些共性的本质，具有一定的通用性。
- **设置访问修饰符**：合理设定超类属性与方法的访问修饰符，以便子类能恰当地继承与访问。通常，那些供子类复用的属性和方法设为受保护（protected）比较合适。

### 3. 迁移共性代码

- **移动属性**：把在子类中重复的属性移至超类中。移动时要留意，原子类中依赖这些属性的代码逻辑可能需要微调，确保迁移后整体功能不受影响。
- **移动方法**：将共性方法从子类提升到超类。如果方法中涉及一些子类特有的局部变量，需要考虑如何用超类的属性或者通过参数传递来替代。

### 4. 调整子类

- **继承超类**：让原本含有共性代码的子类继承新创建的超类。在编程语言中，通过特定的继承语法来实现这一关联，子类自此自动拥有超类的属性与方法。
- **移除重复代码**：子类中已经迁移到超类的重复代码可以安全删除，只保留与子类独特行为相关的代码部分，让子类代码更精简。

### 5. 测试

- **单元测试**：分别为超类和子类编写单元测试。超类的单元测试聚焦共性功能，确保迁移后的属性和方法能正常工作；子类单元测试则着重验证其特有行为未受提取超类操作的干扰。
- **集成测试**：执行集成测试，检查超类与子类协同运作时，整个系统功能是否依旧符合预期，不同子类实例调用继承自超类的方法是否正确。

### 6. 代码审查

- **同行评审**：邀请同事审查代码变更。检查新超类设计是否合理，子类继承关系是否清晰，有没有引入新的潜在隐患，像是意外破坏了原有的多态调用逻辑。
- **文档更新**：更新项目文档，详细说明新超类的职责、属性和方法，以及它与各个子类的继承关系，方便后续开发者理解代码架构。

## 示例

假设有两个类 `Circle` 和 `Rectangle`，它们都有计算面积的相关代码：

```java
public class Circle {
   private double radius;

   public Circle(double radius) {
      this.radius = radius;
   }

   public double calculateArea() {
      return Math.PI * radius * radius;
   }
}

public class Rectangle {
   private double length;
   private double width;

   public Rectangle(double length, double width) {
      this.length = length;
      this.width = width;
   }

   public double calculateArea() {
      return length * width;
   }
}
   ```

### 步骤如下：

1. **找出共性代码**：
    - 两个类都有 `calculateArea` 方法来计算面积，这属于共性逻辑。
2. **创建超类**：
   ```java
      public class Shape {
        protected double area;
   
        public double getArea() {
            return area;
        }
      }
   ```
3. **迁移共性代码**：
    - 把 `calculateArea` 方法的共性逻辑概念提取到 `Shape` 超类中，调整为更通用的形式来计算面积。
4. **调整子类**：

   ```java
      public class Circle extends Shape {
      private double radius;
   
      public Circle(double radius) {
         this.radius = radius;
         this.area = Math.PI * radius * radius;
      }
   }
   
   public class Rectangle extends Shape {
      private double length;
      private double width;
   
      public Rectangle(double length, double width) {
         this.length = length;
         this.width = width;
         this.area = length * width;
      }
   }
   ```
5. **测试**：
    - **单元测试**：为 `Shape` 超类测试 `getArea` 方法，为 `Circle` 和 `Rectangle` 子类分别测试构造函数与面积计算逻辑。
    - **集成测试**：测试整体继承体系下，不同形状实例获取面积功能是否正确。
6. **代码审查**：
    - **同行评审**：让同事检查新的继承体系有无问题。
    - **文档更新**：更新文档说明 `Shape` 超类及与子类关系。