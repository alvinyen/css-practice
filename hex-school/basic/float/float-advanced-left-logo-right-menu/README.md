# float-advanced-left-logo-right-menu

## 『 todo 』
- 以下都可以參考codepen
- 另外再把menu拆成1. float、2. inline-block、3. flexbox這3種來練習 => 並排的3種做法
- 另外再把logo選單拆出來練習 (一樣拆成3種) (正確來說是3*2..詳如下)
    - 另外，logo選單本身可以再拆成
        - 1. logo在左、menu在右
        - 2. logo、menu同在左
    - 所以正確來說是3*2...

## 『 快速重點 』
- 破版的可能：高度寫死、box、html元素間的奇怪空格、float
- 2個元素不知道哪1個高度比較高，要一起往下推擠 -> 用個 ".容器" 包起來做共同設定
- float -> 會導致沒有實際的高度
    - 解法1：設定固定的高度
    - 解法2：在float元素之後做clearfix的設定
- 元素並排 (ex：並排li所形成的menu)
    - float的解法在設定寬度的時候沒有html元素間的空白問題
    - float元素就不再是display: block，可以任意設定寬度，整個呈現比較類似display: inline-block
- float其他重點：
    - clearfix: both; 只要在float同一層級中後面的元素去下，不會影響到父層級的之後的元素。
- float元素的其他麻煩：
    - 忽略vertical-align -> display: inline-block;
    - 忽略text-align -> height、line-height
    - float元素的父元素容易破版 -> 不要輕易對float元素的父元素設定高度
        - 以menu的製作為例，要讓li的文字垂直置中，不要把height、line-height設定在ul，因為寫死ul的高度可能早成破版 -> 應該在ul，父元素中去設定clearfix mixin，再在li去設定height、line-height
        - ![](https://i.imgur.com/bzpK6hB.png)

<hr>
<hr>

## 『 專案說明 』

<hr>
<hr>

## 『 menu部分 （並排選單) 』
- float -> 導致沒有實際的高度
    - 解法1：設定固定的高度
    - 解法2：在float的元素之後做clearfix
- 做css reset (meyerweb)
- 利用ul>li*n來完成選單的製作
    - 解法1. inline-block 和 解法3. flexbox 的差別在於
        - 解法1. inline-block： 最大的麻煩就是li as html elements造成的破版問題 -> font-size: 0;
            - ul
                - 要設定font-size: 0;
            - li
                - 要設定寬度趴數
                - 要設定font-size: 所需要的字型大小;
        - 解法3. flexbox
            - 不用設定li為inline-block
            - ul：flexbox-container
                - display: flex;
                - justify-content: space-between;
            - li：flexbox-item
                - flex-grow: 1;
    - 解法1： li { display: inline-block; }
    - 解法2： li { float: left; }
        - float的解法在設定寬度的時候沒有html元素間的空白問題
        - float元素就不再是display: block，可以任意設定寬度，整個呈現比較類似display: inline-block
        - float元素的父元素容易破版 -> 不要輕易對float元素的父元素設定高度
            - 以menu的製作為例，要讓li的文字垂直置中，不要把height、line-height設定在ul，因為寫死ul的高度可能早成破版 -> 應該在ul，父元素中去設定clearfix mixin，再在li去設定height、line-height
            - ![](https://i.imgur.com/bzpK6hB.png)
    - 解法3：let ul as a flexbox container
- 垂直置中
    - 同時設定1. height、2. line-height

<hr>
<hr>

## 『 logo選單部分 』
- 因為與menu相同，為並排html element的範例，所以一樣可以拆成3種，另外，本身又可以拆成左右分開、同在左這2種，因此正確來說應該是3*2..共6種模板可練習...
- 在header裡面去塞
    - 架構
        - .header
            - a.logo>img
            - ul.topmenu>li*n>a (關於我們、產品介紹、Q&A)
        - 2種可能 (以float為例)
            - 1. logo在左、menu選單在右
                - ul.top-menu { float: right; }  
                - ul.topmenu li { float: left; }
            - 2. logo、menu選單同在右
                - 如下設定順序才會對..
                - a.logo { float: left; }
                - ul.top-menu { float: right; }
                - ul.top-menu li { floar: left; }
    - 圖片太大張可能造成破版header

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
- float -> 可能導致沒有實際的高度
    - 解法1：設定固定的高度
    - 解法2：在float元素之後做clearfix


- 並排元素"們"除了設定float: left或right之外，記得也要設定寬度趴數，『不然預設是100趴！！』
- 讓元素內的文字好看：padding
- 設定了float之後.icon區塊的a tag的border就正常包住img了..
- 