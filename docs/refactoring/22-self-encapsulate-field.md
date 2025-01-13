## 简介

“自封装字段”（Self Encapsulate Field）是一种重构技术，旨在通过为字段提供访问方法（getter 和
setter）来更好地控制对该字段的访问，增加代码的灵活性和可维护性。这种重构手法可以让你在不改变使用该字段的代码的前提下，对字段的获取和修改逻辑进行修改，例如添加额外的验证、转换或延迟加载等。以下是进行“自封装字段”重构的详细步骤。

## 自封装字段（Self Encapsulate Field）的详细步骤

### 1. 识别需要封装的字段

- **查找直接访问的字段**：检查代码中是否存在直接访问类的字段而不是通过方法的情况。
- **考虑未来修改需求**：如果预计对字段的获取或设置逻辑可能会发生变化，如添加验证、日志记录或缓存等，这些字段是很好的封装候选。
- **评估封装必要性**：对于那些可能会受到外部因素影响，或需要在不同上下文中有不同访问行为的字段，应该考虑封装。

### 2. 创建访问方法

- **添加 getter 方法**：为字段创建一个公共的 getter 方法，该方法用于获取字段的值。
- **添加 setter 方法（可选）**：如果字段需要可修改，为其创建一个公共的 setter 方法，该方法用于设置字段的值。

### 3. 替换直接访问

- **查找直接访问代码**：找出代码中所有直接访问该字段的地方。
- **修改为调用访问方法**：将直接访问字段的代码修改为调用相应的 getter 或 setter 方法。

### 4. 测试

- **编译代码**：确保代码编译通过，没有任何语法错误。
- **运行测试**：运行所有相关的单元测试，确保重构操作没有引入新的错误。
- **手动测试**：对于涉及用户界面或外部接口的字段，进行手动测试以验证功能的正确性。

### 5. 代码审查

- **同行评审**：让同事或其他团队成员审查你的更改，确保代码质量和可维护性没有下降。
- **文档更新**：如果项目有维护文档的习惯，记得更新相关文档，说明重构的影响。

## 示例

假设有一个名为 `Customer` 的类，其中包含一个字段 `age`，该字段在类的多个方法中被直接访问：

```java
public class Customer {
    private int age;

    public void displayAge() {
        System.out.println(age);
    }

    public void setAge(int newAge) {
        age = newAge;
    }
}
```

### 步骤如下：

1. **识别需要封装的字段**：
    - 字段 `age` 在 `displayAge` 方法中被直接访问，且未来可能需要添加额外的逻辑，如验证年龄范围，因此适合进行“自封装字段”的重构。

2. **创建访问方法**：
    - 为 `age` 字段创建一个 getter 方法 `getAge` 和一个 setter 方法 `setAge`（已存在，可优化）。

   ```java
   public class Customer {
       private int age;
   
       public int getAge() {
           return age;
       }
   
       public void setAge(int newAge) {
           age = newAge;
       }
   
       public void displayAge() {
           // 这里将进行修改
       }
   }
   ```

3. **替换直接访问**：
    - 将 `displayAge` 方法中直接访问 `age` 字段的代码修改为调用 `getAge` 方法。

   ```java
   public class Customer {
       private int age;
   
       public int getAge() {
           return age;
       }
   
       public void setAge(int newAge) {
           age = newAge;
       }
   
       public void displayAge() {
           System.out.println(getAge());
       }
   }
   ```

4. **测试**：
    - **编译代码**：确保代码编译通过，没有任何语法错误。
    - **运行测试**：运行所有相关的单元测试，确保重构操作没有引入新的错误。

5. **代码审查**：
    - **同行评审**：让同事或其他团队成员审查你的更改，确保代码质量和可维护性没有下降。

### 重构后的代码：

```java
public class Customer {
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int newAge) {
        age = newAge;
    }

    public void displayAge() {
        System.out.println(getAge());
    }
}
```

通过上述步骤，我们对 `Customer` 类中的 `age` 字段进行了自封装，通过使用 `getAge` 和 `setAge` 方法，我们可以更灵活地控制对
`age` 字段的访问。例如，在 `getAge` 方法中，我们可以添加额外的逻辑，如：

```java
public int getAge() {
// 可以添加额外的逻辑，例如记录访问日志
    System.out.println("Age accessed");
    return age;
}
```

这样做可以提高代码的可维护性，并且在不改变使用该字段的代码的前提下，方便对字段的访问逻辑进行修改和扩展。这种重构手法在需要对字段访问进行精细化控制时非常有用，有助于提高代码的健壮性和可扩展性。