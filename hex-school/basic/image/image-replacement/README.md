# image-replacement

## 『 完成圖參考 』
- div.logo
- ![](https://i.imgur.com/Vy90nDM.png)

<hr>
<hr>

## 『 重點摘要 』
- 2大重點
    - 1. 文字取代圖片: div.logo>h1>a (background-image: url(...))
    - 2. 圖文並排

<hr>
<hr>

## 『 圖片取代文字 』
- div.logo>h1>a (background-image: url(...))
    - 一般外面似乎沒有再包個div.logo，直接h1>a
    - 字要下在a連結！！！用h1去包a連結只是為了讓a連結出來的文字具有與h1相同的樣式。
    - 不是每個圖片都要用h1來做，視情境大部分為div
    - 為什麼用h1包a -> 因為h1為block element，a為inline element，不可以用inline-element去包block element，所以用h1這個block element去包a這個inline element
    - 針對a tag設定background-image！！！
        - 設定重點： 
            - ``` a { 寬: 圖片的寬; 高:圖片的高; display: block; } ```
            - 因為a tag預設為inline element，要設定為block element才吃得到寬高的設定！！圖片才會出來！！
- 主要為3大設定 (以下3個1個個去加，並check效果)
    - 1. text-indent: 101%
    - 2. overflow: hidden;
    - 3. white-space: nowrap; //字太多的話不要換行、斷行
        - 記得no跟wrap之間不用加橫線！！！


<hr>
<hr>

## 『 圖文並排 』
- 主要問題
    - ![](https://i.imgur.com/AM6cYwl.png)
- 試試取消最內層的float、觀察a連結的border、再針對a連結設定clearfix