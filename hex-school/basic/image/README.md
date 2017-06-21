# image

## 『 網頁中image的設定方式 』
- 1. img src
    - 缺點：相對於background-image: url(...)的圖片設定方式來說，較不具彈性，比較難再圖片上去設定一些內容。
- 2. background-image: url(...)
    - 通常是針對div去設定
    - check有沒有吃到圖片的技巧 -> chrome dev tool (hover到路徑上或直接點選)

<hr>
<hr>

## 『 常見相關設定 』
- 可參閱最下面的案例
- background-image
- background-repeat
- background-position
- background-color
- ！！！background (一次整合上面4種設定)！！！
    - 可少給
    - 不用按照特定順序設定 (但為了邏輯還是按照上面的順序去思考、設定較好)

<hr>
<hr>

## 『 設計時的考量重點 』
- 如何切最小的圖片來達成最好的網頁品質
- background-repeat、image怎麼切、background-color怎麼下
- 以漸層圖片背景為例
    - 水平：background-repeat: repeat-x;
    - 垂直：去吸圖片最下面的顏色，並設定為background-color
    - ![](https://i.imgur.com/MxrY1Sm.png)

## 『 background-image的相關設定 』
- 預設
    - 預設圖片重複、填滿元素。
### [ background-repeat ] 
- value
    - no-repeat、repeat-x、repeat-y
- 不希望圖片重複
    - 1. 讓元素跟圖片大小相同
    - 2. 設定background-repeat: no-repeat
- 基於網頁效能考量，常設定background-repeat: repeat-x;

<hr>

### [ background-position ]
- 讓圖片在區塊中能夠向絕對定位那樣設定
- value
    - 1. 像素
    - 2. %數
    - 3. top right bottom left
        - 例如：background-position: right bottom;
- 預設 left top
- 小作業
    - 1.
        - ![](https://i.imgur.com/5IZRIao.png)
    - 2. 將圖片移動到中間並設定repeat-y

<hr>

### [ 常用案例 (列為todo，有機會都再做個project練習一下) ]
- 1. 為了效能考量只切一點點圖片並設定repeat-x及background-color
    - background-image: url(....);
    - background-repeat: repeat-x;
    - background-color: 去吸圖片最下面的顏色;
- 2. 圖片只出現一次、讓圖片所在的整個區塊有更彈性的發揮空間
    - background-image、background-repeat: no-repeat;、 加字或其他內容元素、background-color
    - 主要是搭配background-position來做應用
    - background-repeat: no-repeat;
    - background-position
    - 在區塊上加字
        - 給定p區塊等等
        - 或其他內容元素
    - 另可再進一步搭配background-color

<hr>
<hr>

## 『 圖文並排 』
- 參考專案image-replacement

<hr>
<hr>

## 『常見圖片種類』
- 透明效果的好處：可以設定background-color
- jpg
    - 不支援透明且不支援動畫，預設會有白色背景
- png (種類主要差別在色系、色彩的支援程度)
    - 支援透明，不支援動畫
    - png-8：只支援256色
    - png-24
- gif
    - 支援動畫、支援透明