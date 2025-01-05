# 提取接口 (Extract Interface)

## 简介

“提取接口”是一种重要的重构手法，当多个类含有相似的行为或职责时，运用该手法能抽取出通用的接口，以此来增强代码的灵活性与可维护性。通过定义接口，不同的类可以遵循相同的契约，方便代码的扩展、替换，也让依赖这些类的其他部分代码更具通用性。

## 提取接口 (Extract Interface) 的详细步骤

### 1. 识别共性行为

- **类行为扫描**：仔细审查相关的一组类，留意它们共有的方法签名，也就是方法名、参数列表、返回类型都一致的那些方法。这些共有的方法往往代表着共性的行为。
- **职责分析**：除了方法签名，还要从功能职责角度出发，分析这些类是否承担了相似的任务，即便实现细节可能有所差异，但只要任务本质相同，也属于共性行为。

### 2. 定义接口

- **接口命名**：给新提取的接口取一个能精准概括共性行为的名称，名称要清晰直观，让其他开发者一眼就能明白这个接口的用途。
- **方法声明**：把之前识别出的共性行为对应的方法，原封不动地在接口中进行声明。只保留方法签名，不要包含任何实现逻辑。

### 3. 让类实现接口

- **添加实现关系**：针对那些含有共性行为的类，逐一修改它们的定义，让其实现新定义的接口。这一步骤确保了这些类遵循接口所规定的契约。
- **处理差异**：如果类中的方法实现与接口声明有细微差异，比如参数命名不同，要调整类中的方法，使其严格匹配接口的要求，但注意不要改变原有功能。

### 4. 更新依赖代码

- **类型替换**：在代码中，凡是原本依赖具体类的地方，只要业务逻辑允许，尽可能替换为依赖新提取的接口。这样一来，代码的灵活性大大提升，后续若要替换具体类，只要新类实现该接口即可。
- **编译检查**：完成替换后，进行编译，修复出现的任何语法错误，确保代码在语法层面没有问题。

### 5. 测试

- **单元测试**：运行所有涉及到这些类的单元测试，由于只是提取接口，逻辑上没有改变核心功能，正常情况下测试应该全部通过。要是有测试失败，说明接口提取过程引入了错误，需仔细排查。
- **集成测试**：开展集成测试，验证新的接口与实现类在整个系统环境下协同工作是否正常，避免出现兼容性问题。

### 5. 代码审查

- **同行评审**：邀请同事查看重构后的代码，重点检查接口定义是否清晰准确，类对接口的实现有没有漏洞，以及整体代码的可读性与可维护性是否提升。
- **文档更新**：如果项目有维护文档的习惯，更新相关文档，说明提取接口的原因、新接口的作用，方便后续维护人员了解变动情况。

## 示例

假设有两个类，`Dog` 和 `Cat`，它们都有叫和跑的行为：

```java
public class Dog {
    public void bark() {
        System.out.println("汪汪汪");
    }

    public void run() {
        System.out.println("小狗在跑");
    }
}

public class Cat {
    public void meow() {
        System.out.println("喵喵喵");
    }

    public void run() {
        System.out.println("小猫在跑");
    }
}
```

### 步骤如下：

1. **识别共性行为**：
    - `Dog` 和 `Cat` 类都有 `run` 方法，这就是共性行为。
2. **定义接口**：
    - 定义一个名为 `AnimalMove` 的接口：
   ```java
     public interface AnimalMove {
       void run();
   }
   ```

3. **让类实现接口**：
    - 修改 `Dog` 和 `Cat` 类，让它们实现 `AnimalMove` 接口：
       ```java
       public class Dog implements AnimalMove {
       public void bark() {
       System.out.println("汪汪汪");
       }
    
       @Override
       public void run() {
       System.out.println("小狗在跑");
       }
       }
    
       public class Cat implements AnimalMove {
       public void meow() {
       System.out.println("喵喵喵");
       }
    
           @Override
           public void run() {
               System.out.println("小猫在跑");
           }
       }
       ```
4. **更新依赖代码**：
   - 假设存在一个 `Zoo` 类，原本依赖 `Dog` 类：
   ```java
   public class Zoo {
       private Dog dog;
   
       public Zoo(Dog dog) {
           this.dog = dog;
       }
   
       public void letAnimalMove() {
           dog.run();
       }
   }
   ```
    - 将 `Zoo` 类中的 `Dog` 替换为 `AnimalMove` 接口：
   ```java
   public class Zoo {
       private AnimalMove animal;
   
       public Zoo(AnimalMove animal) {
           this.animal = animal;
       }
   
       public void letAnimalMove() {
           animal.run();
       }
   }
   ```
5. **测试**：
    - **单元测试**：运行 `Dog`、`Cat` 以及 `Zoo` 相关的单元测试，所有测试通过。
    - **集成测试**：进行集成测试，未发现兼容性问题。
6. **代码审查**：
    - **同行评审**：同事审查后，认可接口定义清晰，提升了代码灵活性。
    - **文档更新**：更新项目文档，记录提取 `AnimalMove` 接口的相关事宜。 