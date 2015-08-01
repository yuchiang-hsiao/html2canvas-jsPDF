# simple-html2canvas-jsPDF
html -> canvas -> image -> pdf

[html2canvas](http://html2canvas.hertzen.com)、[jsPDF](https://parall.ax/products/jspdf) 的簡易實作。

## 摘要
因 jsPDF 單獨使用的話只能單純將 html 中之 DOM 直接印出，並不會套用到所設定的 css 檔案。所以解決方法為使用 html2canvas 將 html 中之 DOM 先繪製到 canvas 中。但又因由 DOM 產生的 canvas 不能直接轉成 pdf 檔，所以將 canvas 中的圖形存成 image，最後再將 image 由 jsPDF 匯出成 pdf 檔。

## Keyword
html2canvas, jsPDF.