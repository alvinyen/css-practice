# hahow-3-rwd-resize

## 『 實作步驟 (待整理) 』
### [ 0. 趴數切版、極值考慮、最大container、最小圖片 ] 
- 參考hahow-2-rwd-layout-cutting-percent-maxMinWidth
- 拾遺補缺
    - .block -> inline-block
    - img.icon
    - 關鍵：用個class (例如.icon)把img包起來，然後針對.icon設定% width

<hr>

### [ concept： 重點是內容流的概念 (高度變高) ]

<hr>

### [ 1. 修改各區塊內容 ]
- 修改各個block中的內容
     - ctrl + d
     - 內文、padding

<hr>

### [ 2. 設定斷點及相對應的樣式 ]
- 斷點設定
    - 800px：a、b100趴，其他50趴
    - 400px：全部100趴

<hr>

### [ 3. 新增.intro區塊 ]
#### 3.1. 新增、編輯.intro區塊
- 架構：
- 內容、樣式微調：
#### 3.2. 為.intro區塊編輯斷點樣式設定

<hr>
<hr>

## 『 實作重點整理 (待整理) 』
### [ 1. 重點1 -> 解法1 ]
- 

<hr>

### [ 2. 重點2 -> 解法2 ]
- 怪...??? 問六角
    - 在外層寫media query不行 ??? 問六角
        - ex：.a, .b, .c { ... }
    - 在內層針對性的做media query設定才會成功 ???
        - ex: .wrapper .a, .wrapper .b, .wrapp .c { ... }

<hr>

