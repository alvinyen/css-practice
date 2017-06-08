# hahow-2-rwd-layout-cutting-percent-maxMinWidth

## 實作重點 (待整理)
### 1. RWD趴數切版
- pug搭配emmet拉架構、塞h4內容 (給趴數，之後比較方便去調css設定)
- display: inline-block; 要針對box去用，若針對wildcard則會跑出奇怪的東西
- 針對box (群組)給定趴數
- 兩階段設定：box a~g
    - box 給定a~g都有的樣式設定
    - a~g分別做特定的樣式設定
- 奇怪的換行：針對container的font-size設定為0，在box中再
- 還是有奇怪的破版 -> padding、margin的關係 -> border-box
- 給定高度、調整文字置中

<hr>

### 2. 觀察：滿版 -> 限制最大寬度：讓整個版面擁有固定的寬度
- <font color=red>針對container去做設定</font>
    - max-width
    - 置中

<hr>

### 3. 限制最小寬度
- 給定logo (src: hahow)到a box
    - a box破版：因為針對.block設定height的關係 -> height: initial;
- 給img再另外加個class icon (有時間再踹為何不直接針對img去下樣式設定？？ 或許是因為不希望調整到整個網頁的所有img)
    - 不希望img寬度滿版 -> 設定寬度趴數
    - 限制最小寬度