# image

## 網頁中image的設定方式
- 1. img src
    - 缺點：相對於background-image: url(...)的圖片設定方式來說，較不具彈性，比較難再圖片上去設定一些內容。
- 2. background-image: url(...)
    - 通常是針對div去設定
    - check有沒有吃到圖片的技巧 -> chrome dev tool (hover到路徑上或直接點選)

## background-image的相關設定
- 預設
    - 預設圖片重複、填滿元素。
- value
    - no-repeat、repeat-x、repeat-y
- background-repeat
    - 不希望圖片重複
        - 1. 讓元素跟圖片大小相同
        - 2. 設定background-repeat: no-repeat
    - 基於網頁效能考量，常設定background-repeat: repeat-x;