## 简介

“以查询取代临时变量”（Replace Temp with Query）是一种有效的重构技术，旨在通过将临时变量的计算逻辑封装为查询方法，提高代码的可读性、可维护性和可复用性。它能使代码逻辑更加清晰，减少临时变量带来的复杂性和潜在的错误风险。以下是进行“以查询取代临时变量”重构的详细步骤。

## 以查询取代临时变量（Replace Temp with Query）的详细步骤

### 1. 识别临时变量

- **查找计算型临时变量**：在代码中寻找那些通过计算得到值，并在后续代码中多次使用的临时变量。这些临时变量通常是局部变量，用于存储中间计算结果。
- **分析变量使用范围**：确定临时变量的使用范围，是否仅在一个方法内使用，还是在多个方法或类之间共享。如果是在一个方法内且使用较为集中，更适合进行此重构。

### 2. 提取计算逻辑为查询方法

- **创建查询方法**：根据临时变量的计算逻辑，创建一个新的私有方法。方法的名称应能清晰地表达其计算目的，遵循项目的命名约定。
- **迁移计算代码**：将用于计算临时变量值的代码从原位置复制到新创建的查询方法中。确保方法的返回值类型与临时变量的类型一致。

### 3. 替换临时变量引用

- **替换方法内引用**：在原方法中，将对临时变量的所有引用替换为对新查询方法的调用。这样，每次需要使用该临时变量的值时，都通过调用查询方法来获取。
- **检查其他引用点**：如果临时变量在其他方法或类中有引用，需要仔细检查并根据情况进行相应的替换或调整。可能需要重新考虑代码的结构和交互方式。

### 4. 测试

- **编译代码**：确保代码能够顺利编译，检查因新增方法和代码替换等操作是否引入语法错误。
- **运行测试**：运行所有相关的单元测试，包括针对原功能的测试以及可能受影响的其他相关测试，确保重构没有引入新的逻辑错误，原有功能依然正常。
- **手动测试**：对于涉及用户界面或复杂业务逻辑的部分，如有必要，进行手动测试，模拟实际使用场景，验证功能的正确性和完整性。

### 5. 代码审查

- **同行评审**：邀请同事或其他团队成员审查重构后的代码，从不同角度检查代码质量、可读性和可维护性。关注新方法的命名、代码逻辑的清晰度以及是否存在潜在的问题或改进点。
- **文档更新**：如果项目有维护文档的习惯，及时更新相关文档，记录此次重构的内容和目的，包括新增的查询方法及其作用，方便后续开发者理解代码的变化和意图。

## 示例

假设有如下代码，其中使用了临时变量 `totalCost` 来存储计算结果：

```java
public class ShoppingCart {
    private List<Item> items;

    public double calculateTotal() {
        double totalCost = 0;
        for (Item item : items) {
            totalCost += item.getPrice() * item.getQuantity();
        }
        return totalCost;
    }
}

class Item {
    private double price;
    private int quantity;

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }
}
```

### 步骤如下：

1. **识别临时变量**：
    - 在 `ShoppingCart` 类的 `calculateTotal` 方法中，`totalCost` 是一个通过计算得到值并在后续使用的临时变量，适合进行重构。
2. **提取计算逻辑为查询方法**：
    - 在 `ShoppingCart` 类中创建一个新的私有方法 `calculateTotalCost`：
    ```java
         private double calculateTotalCost() {
         double totalCost = 0;
         for (Item item : items) {
         totalCost += item.getPrice() * item.getQuantity();
         }
         return totalCost;
         }
   ```
3. **替换临时变量引用**：
    - 在 `calculateTotal` 方法中，将 `totalCost` 的引用替换为对 `calculateTotalCost` 方法的调用：
      ```java
            public double calculateTotal() {
            return calculateTotalCost();
            }
      ```

4. **测试**：
    - **编译代码**：检查编译无误。
    - **运行测试**：运行单元测试，确认 `calculateTotal` 方法的功能正常，计算结果正确。
5. **代码审查**：
    - **同行评审**：让同事审核代码，检查新方法的命名和代码结构。
    - **文档更新**：更新文档，说明新增了 `calculateTotalCost` 方法以及此次重构的目的和影响。

### 重构后的代码：

```java
public class ShoppingCart {
    private List<Item> items;

    public double calculateTotal() {
        return calculateTotalCost();
    }

    private double calculateTotalCost() {
        double totalCost = 0;
        for (Item item : items) {
            totalCost += item.getPrice() * item.getQuantity();
        }
        return totalCost;
    }
}

class Item {
    private double price;
    private int quantity;

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }
}
```