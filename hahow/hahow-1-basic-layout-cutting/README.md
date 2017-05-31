# hahow-1-basic-layout-cutting

## 實作重點
- html element中間的空格 -> font-size: 0;、再針對各元素設定font-size: ?px;
- 還是破版 -> 因為border或padding -> (針對right、left)設定box-sizing: border-box;
- right沒有文字之後left和right區塊就無法對齊 -> 預設vertical-align -> 設定 * { ...; vertical-align: top; }