# Week01 Summary
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本周共进行了两次直播课，以JavaScript语言为背景讲述与其相关的编程语言通识及其词法和类型。在winter讲述了乔姆斯基谱系这一知识点时明白了计算机语言还能按无限制文法、上下文相关文法、上下文无关文法及正则文法分类，不禁感叹自己的知识面实在狭隘。鉴于之前有在极客时间看过陶辉老师的《Web协议详解与抓包实践》，其中讲到HTTP相关头部时曾提及使用BNF对HTTP头部语法进行定义，因此在听这一块内容的时候还是能跟得上winter的思路，在使用BNF定义四则运算后对其的用法有了初步的了解。在winter讲词法及类型这一课中，对其讲述的unicode编码这一部分有比较深刻的印象，在此之前我对unicode编码这块的知识还是非常的模糊，最后当然也记住了“最佳实践是把程序编码限制在bmp内”这条来自winter的开发建议。

## 编程语言通识
- 语言按语法分类
    - 非形式语言(C++)
        - 中文、英文
    - 形式语言（乔姆斯基谱系）
        - 0型 无限制文法
            ?::=?
        - 1型 上下文相关文法

            `?<A>?::=?<B>?`
        - 2型 上下文无关文法

            `<A>::=?`
        - 3型 正则文法

            `<A>::=<A>?`
- 产生式（BNF)
    - \* 表示重复多次
    - \| 表示或
    - \+ 表示至少一次
- 图灵完备性
    - 命令式-图灵机
        - goto
        - if和while
    - 声明式-lambda
        - 递归
- 动态与静态
    - 动态-Runtime
    - 静态-Compiletime
- 类型系统
    有隐式转换的语言都是弱类型语言
- 一般命令式编程语言
    - atom
        - Identifier
        - Literal
    - expression
        - Atom
        - Operator
        - Puncuator
    - statement
        - Epxression
        - Keyword
        - Puncuator
    - structure
        - Function
        - Class
        - Process
        - Namespace
    - program
        - Program
        - Module
        - Package
        - Library


## 词法与类型
- unicode编码
    - bmp(前128个字符)
    - 最佳实践是把程序编码限制在bmp内
- InputElement
    - WhiteSpace
        - `<TAB>` 水平制表符 \u0009
        - `<VT>` 垂直制表符
        - `<FF>`
        - `<SP>`
        - `<NBSP>` \u00A0 在不分词的时候使用 eg：`Java&nbsp;Script => Java Script`整个词会连在一起，不会因为换行而将词分开。
        - `<ZWNBSP>`
        - `<USP>`
    - LineTerminator 换行符
    - comment
        - //
        - /* */
    - Token
        - Punctuator  符号
        - IdentifierName
        - Keywords    关键字
        - Identifier  标识符
        - Literral
        - Number
            - 判断0.1+0.2是否等于0.3：Math.abs(0.1+0.2 - 0.3) <= Number.EPSILON
        - String
        - Boolean
        - Object
        - Symbol
        - Undefined
        - Null