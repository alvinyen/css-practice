# 2_15-fixed-menu-and-flexible-content

## 『 mockup 』
- 並排的 1. 固定寬度元素 + 2. 自適應元素
- .wrapper>ul.sidemenu>li*5+.content
- spec
    - .wrapper：max-width 800、置中
<hr>
<hr>

## 『 重點摘要 』
- float元素的表現其實就是行內元素
- 重點1：...
    - 為了讓之後的元素可以並排，在第一個元素的部分設定為float元素，之後緊跟著排列margin固定的寬度即可。
    - 例如
        - 元素1：設定為float，寬度設定200px
        - 元素2：不用設定為float元素！！，直接margin-left: 200px或以上即可。
- 重點2：...
    - 在非float元素的部分，讓了讓它自適應，不用任何設定！！！！！  (關鍵在於非float元素沒有設定寬度，就都會在父元素的範圍內去自己調整！！)
- 重點3：拾遺補缺
    基本垂直排列menu樣式設定
    - ul設定padding-top、取消border
    - li設定margin-bottom

<hr>
<hr>

## 『 實作重點 』
- ul.menu固定寬度浮在左邊 (float)
    - 為了讓之後的元素可以並排
- .content margin-left ul.menu的寬度
    - 踹不margin

<hr>
<hr>

## 『 重點整理 』
- float元素的表現其實就是行內元素
- 重點1：...
    - 為了讓之後的元素可以並排，在第一個元素的部分設定為float元素，之後緊跟著排列margin固定的寬度即可。
    - 例如
        - 元素1：設定為float，寬度設定200px
        - 元素2：不用設定為float元素！！，直接margin-left: 200px或以上即可。
    - 固定寬度float元素 + 固定margin-left不用float的元素 = 並排
- 重點2：...
    - 在非float元素的部分，讓了讓它自適應，不用任何設定！！！！！ (關鍵在於非float元素沒有設定寬度，就都會在父元素的範圍內去自己調整！！)




