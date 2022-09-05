const electron = require('electron')
const ipc = electron.ipcRenderer;

window.addEventListener('DOMContentLoaded', () => {

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }

  for (var n = 0; n <9 ; n++){
    let i = document.querySelector(('#slider_'+n));
    let o = document.querySelector(('#sliderValue_'+n));
    o.innerHTML = i.value;

    i.addEventListener('input', function () {
      o.innerHTML = i.value;
      updateFaderValue(i)
    }, false);     
  }

  function updateFaderValue(i){
      ipc.sendSync('faderEvent',{"key":(i.id).slice(7),"value":i.value});
  }

})

