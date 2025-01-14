## 简介
“替换继承为委托”（Replace Inheritance with Delegation）是一种关键的重构手法，旨在优化代码结构，提升灵活性与可维护性。当继承关系引发代码僵化、子类难以复用父类部分功能，或是子类被迫继承大量无关属性与方法时，采用委托机制能打破这类困境，让代码职责划分更清晰，各模块之间耦合度更低，从而使程序更易于理解与拓展。以下是“替换继承为委托”重构的详细步骤。

## 替换继承为委托 (Replace Inheritance with Delegation)的详细步骤

### 1. 识别待重构的继承关系
- **功能冗余排查**：仔细审视继承体系，查看子类是否从父类继承了诸多用不到的属性与方法。若子类仅需复用父类的部分功能，却背负大量冗余代码，就有重构必要。
- **耦合度评估**：检测子类与父类之间的耦合程度，倘若子类的改动极易影响父类，或者父类的内部变更总是波及子类，很可能需要调整这种紧密的继承关联。
- **复用性考量**：分析子类复用父类功能的实际场景，要是复用方式复杂、不直观，难以精准调用所需功能，说明当前继承关系不利于代码复用，适合重构。

### 2. 移除继承关系
- **修改类声明**：将子类的继承声明去除，使其不再直接继承自父类，转变为独立的类。如此一来，子类不再自动获取父类的所有成员，斩断了强绑定的继承链条。

### 3. 创建委托成员
- **添加父类实例变量**：在原本的子类中，新增一个父类类型的私有实例变量。这个变量将作为委托的关键纽带，后续通过它来调用原本继承而来的功能。
- **初始化委托成员**：在子类的构造函数里，实例化上述添加的父类实例变量，确保它能能正常指向一个有效的父类对象实例，为后续的方法委托调用做好准备。

### 4. 实现委托方法
- **定位需委托的方法**：梳理之前子类依赖父类的那些方法，逐一列出清单。这些方法就是要在子类里通过委托机制来重新实现的目标。
- **编写委托调用代码**：针对每个待委托的方法，在子类中编写对应的新方法。新方法内部只需简单调用之前在子类中创建的父类实例变量的同名方法，借此将功能执行委托给父类对象。

### 5. 更新外部代码引用
- **查找引用点**：全面搜索项目里所有对原子类的使用之处，因为继承关系变更，外部代码调用方式大概率需调整。
- **替换调用方式**：把原本基于继承的直接调用，替换成通过新委托机制的调用。例如，原来是 `subClass.someMethod()`，现在要改成 `subClass.delegateInstance.someMethod()` 这种形式。

### 6. 测试
- **编译代码**：首先保证代码能顺利通过编译，检查因类关系变更、新变量和方法引入等是否造成语法错误。
- **运行测试**：执行所有相关的单元测试，确保重构没有引入新的逻辑错误，原有功能完好无损。
- **手动测试**：针对关键业务流程，尤其是涉及到变更前后功能调用的部分，如有必要手动模拟用户操作测试，防止出现意外的功能异常。

### 7. 代码审查
- **同行评审**：邀请同事或者团队中的其他开发者审查此次重构代码，从第三方视角查看代码质量、结构合理性，是否遗漏了外部引用更新等问题。
- **文档更新**：要是项目有维护文档的规范，及时更新相关文档，记录原本的继承关系如何转变为委托模式，方便后续开发人员理解代码意图。

## 示例
假设有一个简单的图形类继承体系：
```java
class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
```

### 步骤如下：
1. **识别待重构的继承关系**：
    - Circle类仅需复用Shape类的`draw`方法，继承关系稍显冗余，适合重构。
2. **移除继承关系**：
    - 修改`Circle`类声明，去掉 `extends Shape`，使其成为独立类。
3. **创建委托成员**：
    - 在`Circle`类中添加私有成员变量：
    ```java
    private Shape shape;
    ```
    - 在`Circle`类构造函数里初始化：
    ```java
    public Circle() {
        this.shape = new Shape();
    }
    ```
4. **实现委托方法**：
    - 为`Circle`类编写委托`draw`方法：
    ```java
    public void draw() {
        shape.draw();
    }
    ```
5. **更新外部代码引用**：
    - 假设原本有代码 `Circle circle = new Circle(); circle.draw();`，无需更改实际调用语句，因为方法签名未变，但底层实现已转为委托。
6. **测试**：
    - **编译代码**：检查编译无误。
    - **运行测试**：运行单元测试，确认功能正常。
7. **代码审查**：
    - **同行评审**：让同事审核。
    - **文档更新**：更新文档说明重构变动。

### 重构后的代码：
```java
class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle {
    private Shape shape;

    public Circle() {
        this.shape = new Shape();
    }

    public void draw() {
        shape.draw();
    }
}
```