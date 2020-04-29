# 每周总结可以写在这里

## JavaScript中特殊的对象
### Bound Function Exotic Objects
- [[BoundTargetFunction]]
- [[BoundThis]]
- [[BoundArguments]]
### Array Exotic Objects
- [[DefineOwnProperty]]
### String Exotic Objects
- [[GetOwnProperty]]
- [[DefineOwnProperty]]
- [[OwnPropertyKeys]]
- [[StringData]]
### Arguments Exotic Objects
- [[ParameterMap]]
- [[GetOwnProperty]]
- [[DefineOwnProperty]]
- [[Get]]
- [[Set]]
- [[Delete]]
### Integer-Indexed Exotic Objects
- [[GetOwnProperty]]
- [[HasProperty]]
- [[DefineOwnProperty]]
- [[Get]]
- [[Set]]
- [[OwnPropertyKeys]]
### Module Namespace Exotic Objects
- [[Writable]]
- [[Enumerable]]
- [[Configurable]]
- [[Module]]
- [[Exports]]
- [[Prototype]]
- [[SetPrototypeOf]]
- [[IsExtensible]]
- [[PreventExtensions]]
- [[GetOwnProperty]]
- [[DefineOwnProperty]]
- [[HasProperty]]
- [[Get]]
- [[Set]]
- [[Delete]]
- [[OwnPropertyKeys]]
### Immutable Prototype Exotic Objects
- [[SetPrototypeOf]]
## Expression
### Grammar
 - Tree vs Priority
    - \+ \-
    - \* \/
    - ()
 - Expressions
    - Member
        - a.b
        - a[b]
        - foo\`string\`
        - super.b
        - super['b']
        - new.target
        - new Foo() new的时候带括号的优先级更高
    - New
        - new Foo
    - Call
        - foo()
        - supper()
        - foo()['b']
        - foo().b
        - foo()\`abc\`
    - Left Handside & Right Handside
        - eg: a.b = c  a+b = c
    - Update
        - a++
        - a--
        - --a
        - ++a
        - 自增符号与变量之前不能带有换行符
    - Unary（一元运算符）
        - delete a.c
        - void foo()  eg: 生成undefined：void 0； 写IIFE时建议在函数前加void来执行函数
        - typeof
        - \+
        - \-
        - ~ 按位取反
        - ! eg: !!a，两个非会转成同true/false的Boolean值 只有该运算符会产生类型转换
        - await
- Reference
    - Object
    - Key
    - delete 体现引用
    - assign 体现引用
- Type Convertion
    - 优先使用手动类型转换
- Boxing && Unboxing
    - Boxing
    - Unboxing
        - 优先级
            1. toPrimitive
            2. valueOf
            3. toString

## Statement
### Grammar
- 简单语句
    - 表达式语句
    - 空语句
    - DebuggerStatement 预留调试用，实际在用户代码中不会有效果
    - ThrowStatement
    - ContinueStatement
    - BreakStatement
    - ReturnStatement
- 组合语句
    - {}
- 声明
### Runtime
- Completion Record
    - [[type]]: normal,break,continue,return,or throw
    - [[value]]: Types
    - [[target]]: label
- Lexical Enviorment