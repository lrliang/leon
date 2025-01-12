## 简介

“引入工厂方法”（Introduce Factory Method）是一种实用的重构技术，旨在将对象的创建逻辑从客户端代码分离出来，集中到专门的工厂方法中。通过这样做，代码的耦合度得以降低，对象创建过程更易于管理、扩展与替换，提高了代码的灵活性与可维护性。以下是进行“引入工厂方法”重构的详细步骤。

## 引入工厂方法 (Introduce Factory Method)的详细步骤

### 1. 识别对象创建逻辑

- **定位分散创建**：在代码中查找那些直接实例化对象的地方，尤其是当这种实例化代码分散在多个不同的客户端类或者方法之中时，就适合引入工厂方法来规整创建逻辑。
- **复杂创建分析**：若对象的创建过程涉及复杂的初始化步骤，例如需要传入多个参数、执行额外校验或者依赖特定的外部资源，这类复杂创建场景也是引入工厂方法的良好契机。

### 2. 创建工厂类

- **定义工厂类**：新建一个类作为工厂类，根据项目的命名规范来命名，通常名称会带有“Factory”字样，让代码阅读者一眼能看出其用途。
- **确定方法签名**：在工厂类中添加一个公共的静态方法，也就是工厂方法。该方法的返回类型应为要创建的目标对象类型，方法参数依据对象创建所需的数据来设定。

### 3. 迁移创建逻辑

- **复制粘贴代码**：把原本分散在各处的对象创建代码复制粘贴到工厂方法内部，保持代码逻辑不变，仅变更其所在位置。
- **清理原代码**：回到客户端代码中，删除那些已经迁移到工厂方法里的对象创建语句，让客户端代码不再负责具体的创建事宜。

### 4. 优化工厂方法

- **参数校验**：在工厂方法中，针对传入的参数进行有效性校验，若参数不符合创建对象的要求，及时抛出合适的例外，防止创建出非法对象。
- **异常处理**：如果对象创建过程可能抛出异常，在工厂方法内妥善处理这些异常，要么进行重试，要么包装成更有意义的业务异常抛出，提升代码健壮性。

### 5. 更新客户端代码

- **调用工厂方法**：在客户端代码里，把之前直接实例化对象的地方，替换成调用工厂类的工厂方法，以此获取所需对象实例。

### 6. 测试

- **编译代码**：先确保代码能够顺利编译，检查因新增类、方法以及代码迁移等操作是否引入语法错误。
- **运行测试**：运行所有相关的单元测试，确认重构没有产生新的逻辑错误，原有功能依旧能正常运作。
- **手动测试**：针对关键业务场景，尤其是涉及对象创建与使用的流程，如有必要，手动模拟用户操作测试，保证没有功能异常。

### 7. 代码审查

- **同行评审**：邀请同事或其他团队成员审查此次重构后的代码，从第三方视角查看代码质量、结构合理性，确认是否遗漏了客户端代码更新等关键环节。
- **文档更新**：要是项目有维护文档的习惯，及时更新相关文档，记录引入工厂方法的变动情况，方便后续开发者理解代码架构。

## 示例

假设有如下代码，客户端代码直接创建 `Product` 对象：

```java
public class Client {
    public void doSomething() {
        Product product = new Product("example", 10);
// 后续业务逻辑
    }
}

class Product {
    private String name;
    private int price;

    public Product(String name, int price) {
        this.name = name;
        this.price = price;
    }
}
```

### 步骤如下：

1. **识别对象创建逻辑**：
    - `Client` 类中的 `doSomething` 方法直接实例化 `Product` 对象，适合引入工厂方法。
2. **创建工厂类**：
    - 创建 `ProductFactory` 类：
    ```java
         public class ProductFactory {}
   ```
    - 在 `ProductFactory` 类中添加工厂方法：
      ```java
         public static Product createProduct(String name, int price) {
            return null;
         }
       ```
3. **迁移创建逻辑**：
    - 把 `Client` 类中 `new Product("example", 10)` 这段代码复制到 `ProductFactory` 类的 `createProduct` 方法内：
      ```java
         public static Product createProduct(String name, int price) {
         return new Product(name, 10);
         }
   ```
4. **优化工厂方法**：
    - 可添加参数校验，例如：
   ```java
        public static Product createProduct(String name, int price) {
        if (name == null || price < 0) {
            throw new IllegalArgumentException("Invalid input for product creation");
        }
        return new Product(name, price);
        }
   ```

5. **更新客户端代码**：
    - 在 `Client` 类中修改为：
      ```java
      public void doSomething() {
      Product product = ProductFactory.createProduct("example", 10);
      // 后续业务逻辑
      }
   ```
6. **测试**：
    - **编译代码**：检查编译无误。
    - **运行测试**：运行单元测试，确认功能正常。
7. **代码审查**：
    - **同行评审**：让同事审核。
    - **文档更新**：更新文档说明重构变动。

### 重构后的代码：

```java
public class Client {
    public void doSomething() {
        Product product = ProductFactory.createProduct("example", 10);
// 后续业务逻辑
    }

    public class ProductFactory {
        public static Product createProduct(String name, int price) {
            if (name == null || price < 0) {
                throw new IllegalArgumentException("Invalid input for product creation");
            }
            return new Product(name, price);
        }
    }

    class Product {
        private String name;
        private int price;

        public Product(String name, int price) {
            this.name = name;
            this.price = price;
        }
    }
```