# hahow-2-rwd-layout-cutting-percent-maxMinWidth

## 『 實作步驟 (待整理) 』
### [ 1. RWD趴數切版 ] 
- pug搭配emmet拉架構、塞h4內容 (給趴數，之後比較方便去調css設定)
    - ![](https://i.imgur.com/aJyA5in.png)
    - `.block*7>h4`
    - 塞內容
        - RWD原理與應用-指定比例尺寸%與max-width/mix-width
        - B70%、C30%、D35%、E35%、F30％、G100%
- 給定css border、基礎樣式、比例
    - display: inline-block; 要針對box去用，若針對wildcard則會跑出奇怪的東西
    - 兩階段設定：box a~g
        - box 給定a~g都有的樣式設定
        - a~g分別做特定的樣式設定
    - 破版處理
        - 奇怪的換行：針對container的font-size設定為0，在box中再設定需要的font-size去蓋掉
        - about box model：還是有奇怪的破版 -> padding、margin的關係 -> border-box
- 給定高度、調整文字置中
    - height: 200px

<hr>

### [ 2. 觀察：滿版 -> 限制最大寬度：讓整個版面擁有固定的寬度 ]
- <font color=red>針對container去做設定</font>
    - max-width: 1024px;
    - 置中: margin-left、margin-right
        - 設定置中是margin-right/left: auto;
        - 不是margin-left/right: 0！！

<hr>

### [ 3. 限制最小寬度 ]
- 給定logo (src: hahow)到a box
    - a box破版：因為針對.block設定height的關係 -> height: initial;
- 給img再另外加個class icon (有時間再踹為何不直接針對img去下樣式設定？？ 或許是因為不希望調整到整個網頁的所有img)
    - 不希望img寬度滿版 -> 給定.icon、針對.icon設定寬度趴數: width: 30%;
    - 限制最小寬度: min-width: 200px; // px可較精確

<hr>
<hr>

## 『 實作重點整理 (待整理) 』
### [ 1. RWD趴數切版 ]
- 給定共同的class用來一起調整樣式、給定特定的class用來做針對性地微調
    - ex：`.block.a~g`
        - 注意指定的時候不應該
            - ![](https://i.imgur.com/zoSbD1Z.png)
        - 應該
            - ![](https://i.imgur.com/HPVp6vz.png)
    - 針對*設定display: inline-block;可能會跑出奇怪的東西 (因為script tag等等)
    - 先針對所有去設定樣式：.block
    - 再針對各自的去設定樣式：.a~g
- 針對*給定border可能不小心給到script tag或link tag而不小心
- 不要太習慣針對*去設定 (不然針對父元素設定而希望子元素繼承樣式設定時可能蓋不掉！！)
- 破版處理
    - 1. 奇怪的換行：font-size: 0;、font-size: 各自的需要;
        - 不要針對*設定font-size: 0;
        - 不然設定.a~g的font-size時，h4中的font-size: 0;蓋不掉
        - 正確設定
            - ![](https://i.imgur.com/o1FMuip.png)
    - 2. all about box model
    - 其他
        - 設定固定高度容易破版
        - 因為高度破版 -> 針對區塊、標的 height: initial; (3. 避免圖片滿版)

<hr>

### [ 2. 不要永遠滿版 -> 針對container設定最大寬度 ]
- 針對container設定max-width
- 設定置中是margin-right/left: auto;
    - 不是margin-left/right: 0！！

<hr>

### [ 3. 避免圖片滿版 ]
- 避免因圖片而a區塊破版
    - a { height: initial }
- 設定圖片只佔一定寬度 
    - width: n%;
- 設定圖片最小寬度