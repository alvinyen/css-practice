# float-advanced-left-logo-right-menu

## 『 快速重點 』
- 破版的可能：高度寫死、box、html元素間的奇怪空格、float
- 2個元素不知道哪1個高度比較高，要一起往下推擠 -> 用個 ".容器" 包起來做共同設定

<hr>
<hr>

## 『 專案說明 』

<hr>
<hr>

## 『 重點 』
- 破版的可能 (ex：menu設計時)
    - box-sizing -> border-box
    - float -> clearfix父元素和clear both最後1個float元素之後的子元素
    - 高度寫死 -> 高度不要寫死讓它能夠自己去做推擠
        - !important：一般來說就header和footer會寫死，其他如content等各個部分不會寫死。
    - html element之間的奇怪空格 -> font-size: 0、再去針對各個元素做客製化的設定
- 不知道sidebar (或稱side-menu)或是content哪1個比較長 -> 可以直接用main把這2個內容包起來去做統一的設定、推擠等等。