
function generateQR(tab) {
  var url = tab.url
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 80,
    height: 80
  });
}

browser.tabs.query({
  active: true,
  currentWindow: true
}).then( (tabs) => {
  generateQR(tabs[0])
})
