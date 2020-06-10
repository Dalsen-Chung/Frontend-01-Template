# 每周总结可以写在这里
## CSS动画
### Animation
 - animation-name 时间曲线
 - animation-duration 动画的时长
 - animation-timing-function 动画的时间曲线
 - animation-delay 动画开始前的延迟
 - animation-iteration-times 动画播放次数

### Transition
 - transition-property 要变换的属性
 - transition-duration 变换时长

### 渲染与颜色
 - data uri + svg （实现规则及不规则多边形）

## 重学HTML
### 以下实体不能直接在HTML中使用（会产生歧义）
```
<!ENTITY quot    "&#34;"> <!--  quotation mark, U+0022 ISOnum -->
<!ENTITY amp     "&#38;#38;"> <!--  ampersand, U+0026 ISOnum -->
<!ENTITY lt      "&#38;#60;"> <!--  less-than sign, U+003C ISOnum -->
<!ENTITY gt      "&#62;"> <!--  greater-than sign, U+003E ISOnum -->
```
 - <address> 标签代表的是文章作者的地址

## DOM
### 高级DOM操作
- isEqualNode 判断两个Node是否相同
- contails 判断一个Node是否包含另一个NOde
- compareDocumentPosition 对比两个Node的位置
- cloneNode 复制一个Node，如果参数为true则做Node的深拷贝。