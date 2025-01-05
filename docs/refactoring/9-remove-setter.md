# 移除设置器 (Remove Setter)

## 简介

“移除设置器”是一种重构手法，用于提升代码的安全性与可维护性。当类的某些属性不应该在对象创建之后随意被修改时，设置器（setter
方法）就可能带来风险，通过移除不必要的设置器，可以避免外部代码意外更改对象的关键状态，让代码逻辑更加可控，同时也有助于明确对象的不可变性。

## 移除设置器 (Remove Setter) 的详细步骤

### 1. 识别可移除的设置器

- **属性分析**：审查类中的各个属性，找出那些代表对象核心状态、初始化之后不应再变更的属性。例如，代表订单编号、用户唯一标识这类具有唯一性且一旦确定不应改变的值的属性。
- **使用场景排查**：查看设置器在代码中的调用情况，若发现大部分调用场景都是不合理的，或是容易引发数据一致性问题，就可以将其列为移除目标。特别要注意那些在业务逻辑关键流程里被意外修改的属性设置器。

### 2. 修改属性访问权限

- **设为私有**：把对应的属性访问修饰符改为 `private`，限制外部类对它的直接访问。这一步是为后续移除设置器做铺垫，防止外部代码绕过设置器直接操作属性。
- **移除多余修饰符**：如果属性之前有一些不必要的、用于支持公开设置的修饰符（如 `public` 或者过度宽松的包访问修饰符），一并清理掉，让属性的访问权限更严谨。

### 3. 移除设置器方法

- **删除代码**：直接从类定义中删掉对应的设置器方法。在 Java 中，就是类似 `public void setXxx(xxx)`
  格式的方法。不过删除前要确保没有其他关键业务逻辑依赖这个设置器，不然会引发编译错误。
- **清理导入**：有些 IDE 在移除方法后，相关的未使用的导入语句可能还残留着，顺手把这些多余的导入清理掉，让代码更整洁。

### 4. 更新依赖代码

- **编译修复**：完成上述修改后，先尝试编译项目，此时，所有依赖已移除设置器的代码位置都会报错。逐个排查这些错误点，根据业务需求调整代码逻辑，让依赖代码适应属性不再能被随意设置的新情况。
- **逻辑调整**：例如，原本通过设置器更新属性值来驱动业务流程的部分，可能需要改为在对象初始化时就传入正确的值，或者引入新的特定更新方法（前提是业务确实允许有限制的更新）。

### 5. 测试

- **单元测试**：运行与涉及修改类相关的所有单元测试。由于移除设置器改变了属性的可修改性，某些测试用例可能会失败，需要仔细检查失败原因，确保是预期内的修改导致，而非引入新的逻辑错误。
- **集成测试**：开展集成测试，确认修改后的类与系统其他部分协同工作无误，特别是那些原本频繁使用设置器与该类交互的模块，要保证数据交互、业务流程不受影响。

### 6. 代码审查

- **同行评审**：邀请同事审查重构后的代码，重点关注属性的访问控制是否合理，移除设置器有没有破坏原有的业务逻辑，整体代码的可读性与安全性是否提升。
- **文档更新**：要是项目有维护文档的习惯，更新相关文档，说明移除了哪些设置器、为何移除，方便后续维护人员知晓代码变动。

## 示例

假设有一个 `User` 类，包含用户名和用户积分两个属性：

```java
public class User {
    private String username;
    private int points;

    public User(String username) {
        this.username = username;
        this.points = 0;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
```

### 步骤如下：

1. **识别可移除的设置器**：
    - 分析发现，用户名 `username` 一旦设定不应随意更改，所以 `setUsername` 方法是可移除目标。
2. **修改属性访问权限**：
    - 将 `username` 的访问修饰符维持为 `private`，无需额外调整，因为它本来就是私有的。
3. **移除设置器方法**：
    - 从 `User` 类中删掉 `setUsername` 方法：
   ```java
   public class User {
       private String username;
       private int points;
   
       public User(String username) {
           this.username = username;
           this.points = 0;
       }
   
       public String getUsername() {
           return username;
       }
   
       public int getPoints() {
           return points;
       }
   
       public void setPoints(int points) {
           this.points = points;
       }
   }
   ```
4. **更新依赖代码**：
   - 假设有一个 `UserManager` 类依赖 `User` 类的 `setUsername` 方法：
   ```java
   public class UserManager {
      public void updateUsername(User user, String newUsername) {
         user.setUsername(newUsername);
      }
   }
   ```
   - 改为在初始化 `User` 对象时就传入正确用户名：
   ```java
   public class UserManager {
      public void updateUsername(String oldUsername, String newUsername) {
         User user = new User(newUsername);
   // 后续业务逻辑处理
      }
   }
   ```
5. **测试**：
    - **单元测试**：运行 `User` 和 `UserManager` 的单元测试，修正因移除设置器而失败的用例，确保逻辑正确。
    - **集成测试**：开展集成测试，验证 `User` 类与系统其他模块交互正常。
6. **代码审查**：
    - **同行评审**：同事审查后，认可移除设置器提升了 `User` 类的安全性，且未破坏业务流程。
    - **文档更新**：更新项目文档，记录移除 `setUsername` 设置器相关事宜。 