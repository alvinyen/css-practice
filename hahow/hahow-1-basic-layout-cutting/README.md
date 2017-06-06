# hahow-1-basic-layout-cutting

## 實作重點
- html element中間的空格 -> font-size: 0;、再針對各元素設定font-size: ?px;
- 還是破版 -> 因為border或padding -> (針對right、left)設定box-sizing: border-box;
- right沒有文字之後left和right區塊就無法對齊 -> 預設vertical-align -> 設定 * { ...; vertical-align: top; } // 寫上沒差所以一定要寫！！
- 高度不要寫死，容易破版，如果*設定了height，則可再針對特定元素設定高度 -> .wrapper { height: initial; // 或height: auto; ... } 