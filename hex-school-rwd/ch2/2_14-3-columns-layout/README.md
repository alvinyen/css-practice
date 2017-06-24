# 2_14-3-columns-layout

## 『 mockup 』
- 3 -> 2 -> 1 column
- wrap>ul.news>li*n>h2+p 
- ![](https://i.imgur.com/t4xYRRv.png)

<hr>
<hr>

## 『 重點摘要 』
- 拾遺補缺: 基礎css
    - h2設定
        - color: #000000;
        - padding: .3em 0;
        - font-size: 20px
    - 文字段落
        - line-height: 1.5;
    - 文字區塊
        - margin-bottom: 1em;
    - 水平置中
        - 需要設定上下margin：margin: 0/上margin auto 0/下margin auto;
        - 不需要設定下margin：margin: 0 auto;
- 在做media query的時候
    - 記得把之前推掉 (margin、padding)的%數加進來計算才不會不如預期、破版

<hr>
<hr>

## 『 實作重點 』
- 基本3欄式 -> 左右各推1% -> 向下推1em
- media query 
    - 在計算%數的時候記得要把往外推的那些%數也加進來計算才不會破版

<hr>
<hr>

## 『 重點整理 』
- 拾遺補缺: 基礎css
    - h2設定
        - color: #000000;
        - padding: .3em 0;
        - font-size: 20px
    - 文字段落
        - line-height: 1.5;
    - 文字區塊
        - margin-bottom: 1em;
    - 水平置中
        - 需要設定上下margin：margin: 0/上margin auto 0/下margin auto;
        - 不需要設定下margin：margin: 0 auto;
- 在做media query的時候
    - 記得把之前推掉 (margin、padding)的%數加進來計算才不會不如預期、破版
