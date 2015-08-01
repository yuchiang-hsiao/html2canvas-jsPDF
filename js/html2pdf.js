/* 
 * domID: 要繪製成 canvas 之 DOM id
 * canvasID: 欲繪製之目標 canvas id
 * imgID: 欲繪製之目標 img id
 * outputBlockID: 要產生的 image 需包含在 div 間，此為包住 img 之 div id
 * pdfName: 欲產生之 pdf 檔名
 */
function html2pdf (domID, canvasID, imgID, outputBlockID, pdfName) {
  var dom = document.getElementById(domID),
      canvas = document.getElementById(canvasID);
  html2canvas(dom, {
    canvas: canvas, // dom -> canvas
    onrendered: function (canvas) { // canvas -> image
      var dataURL = canvas.toDataURL();
      document.getElementById(imgID).src = dataURL;
      demoFromHTML(outputBlockID, pdfName);
    }
  });
}



/* 
 * 此 function 由 jsPDF 內之 example/js/basic.js 內之 demoFromHTML function 進行修改
 * source: 要轉成 pdf 之 DOM id
 * outputName: 欲產出之 pdf 檔名
 */
function demoFromHTML(sourceID, outputName) {
	var pdf = new jsPDF('p', 'pt', 'letter')
	
	// source can be HTML-formatted string, or a reference
	// to an actual DOM element from which the text will be scraped.
	, source = $('#' + sourceID)[0]

	// we support special element handlers. Register them with jQuery-style 
	// ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
	// There is no support for any other type of selectors 
	// (class, of compound) at this time.
	, specialElementHandlers = {
		// element with id of "bypass" - jQuery style selector
		'#bypassme': function(element, renderer){
			// true = "handled elsewhere, bypass text extraction"
			return true
		}
	}

	margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    	source // HTML string or DOM elem ref.
    	, margins.left // x coord
    	, margins.top // y coord
    	, {
    		'width': margins.width // max width of content on PDF
    		, 'elementHandlers': specialElementHandlers
    	},
    	function (dispose) {
    	  // dispose: object with X, Y of the last line add to the PDF 
    	  //          this allow the insertion of new lines after html
          pdf.save(outputName + '.pdf');
        },
    	margins
    )
}
