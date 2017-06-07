# float-basic

## 專案說明
- 練習css基本的float處理
- 需要並排的時候使用float
- float的element會看父元素的高度來決定位置 (是不是足夠放、會不會掉到下一行)
- 沒有clearfix的情況下float的元素會同時被1. 父元素 (使父元素沒有float element部分的高度)以及2. 之後的元素 (頂上去)所忽略
- clearfix常用solution：[micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/)
    - 讓父元素在任何條件下都完整的包裹整個子元素 (子元素溢出、上邊界重疊)
    - 有時間重看小白4.4.
    - <font color=red>注意clearfix class是加在父元素！！</font>
- float可能影響的部分
    - 父元素
    - float元素之後的元素
- float元素不會影響到同一父元素內的float元素之前的元素
- 在最後1個float元素的後面那個加上clearfix
- temp最佳實務
    - 在父元素加上micro-clearfix-hack
    - 在float元素之後的元素設定clearfix: both; (在最後1個float元素的後面那個加上clearfix)
- 在sass專案中使用clearfix mixin或extend
    - 什麼時候用mixin？什麼時候用extend？
        - 在很多地方都會用到的話就使用extend，因為mixin會重複產生很多組clearfix的程式碼。
        - extend則是程式碼的合併，會讓最後的樣式檔案較為簡潔。
    - [參考資料：CSS Clearfix 清除浮動](http://kgl.idv.tw/2014/11/17/css-clearfix-%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8B%95/)

## To Do
- 筆記、重點整理
- 小白4.4.
- 六角4.27. 最後的動畫