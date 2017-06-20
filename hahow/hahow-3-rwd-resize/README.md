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
- 

<hr>
<hr>

## 『 實作重點整理 (待整理) 』
### [ 1. 重點1 -> 解法1 ]
- 

<hr>

### [ 2. 重點2 -> 解法2 ]
- 在外層寫media query不行 ???
    - ex：.a, .b, .c { ... }
    - Ans：在sass中撰寫media query的設定有其規則，可參考[使用sass mixin來開發responsive網站](https://blog.hellosanta.com.tw/%E7%B6%B2%E7%AB%99%E8%A8%AD%E8%A8%88/%E5%89%8D%E7%AB%AF/%E4%BD%BF%E7%94%A8sass-mixin%E4%BE%86%E9%96%8B%E7%99%BCresponsive%E7%B6%B2%E7%AB%99)，並測試mixin和extend的不同。
- 在內層針對性的做media query設定才會成功 ???
    - ex: .wrapper .a, .wrapper .b, .wrapp .c { ... }
    - Ans：原因同上，在SCSS中做media query的相關設定有其特定的寫法。
- .sblocks>.sblock*3>img+h5
    - .sblocks：方便管理
- 並排元素處理方案
    - 1. float (float除了clearfix的麻煩之外，還會忽略vertical-align的設定，因此需要vertical-align的情況下通常會使用display: inline-block來解決)
    - 2. display: inline-block
- 趴數寬度設定： 從裡往外設定
    - 最裡面先設定width 100趴 (相對於父元素)
    - 接著往外設定需要的寬度趴數，例如width: 30趴
- 圖片、img的處理重點
    - 設定寬度趴數 (例如100趴等等)
- 重點步驟
    - .sblock
        - 先給他border讓它看得到
        - !!：inline-block
        - 放入標題1~3
        - 最重要！！
            - 寬度趴數設定重點：先設定裡面的為100趴，再進一步往外做設定
                - 先設定裡面的img為100趴
                - 再往外設定.sblock為30趴
            - img { width: 100%; height: 100px; background-color: #aaa; }
            - .sblock { width: 30%; }  
    - 設定media query
- font-size要做針對性地指定，why?? 子元素不會直接繼承嗎??
- 趴數都是相對於父元素
- 寬度趴數設定重點：先設定裡面的，再進一步往外設定
    - 先設定.img為100趴
    - 再設定.sblock為30趴
- .sblock { margin: ..} 造成破版？？

<hr>

