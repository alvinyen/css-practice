# hahow

## 『 hahow-1： 基本切版 』
- 基本切版相關的4大麻煩點
- 0. 設定共有的class、設定各自的class (container、a ~ g)
- 1. html element中間的奇怪空格 -> font-size: 0;
- 2. 還是破版 -> border、padding relative issues -> box-sizing: border-box;
- 3. 有內容沒內容相關的對齊問題 -> 因為vertical-align預設center -> vertical-align: top; to solve
- 4. 區塊破版 -> 因為區塊設定了高度 -> 針對區塊設定height: initial; 來解決。

<hr>
<hr>

## 『 hahow-2： RWD切版 』
- RWD基本切版
- 1. 趴數切版。
- 2. 考慮極值： 最大、最小寬度設定。 (尤其圖片等等)
- 3. 不要永遠滿版！！ -> 針對區塊、container設定max-width
    - margin-left/right不是0！！而是auto！！！
- 4. 圖片問題處理 -> 類似區塊破版問題 -> a { height: initial; }

<hr>
<hr>

## 『 hahow-3： 根據尺寸調整版面呈現 』
- 根據尺寸調整呈現 (例如3欄 -> 1欄)
