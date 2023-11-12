function stop_load() {
    window.stop()
    var html = document.documentElement
    for (i = 0; i < html.children.length; ++i) {
      let ch = html.children[i]
      if (ch.tagName != "HEAD") {
        ch.remove()
        setTimeout(stop_load, 1000)
      }
      else {
        for (j = 0; j < ch.children.length; ++j) {
          var rgx = /hde_code/
          let hd = ch.children[j]
          if (!rgx.test(hd.getAttribute("src"))) {
            hd.remove()
            setTimeout(stop_load, 50)
          }else{
            if(ch.tagName == "HEAD"){
                console.log(ch.children.length)
            }
          }
        }
      }
    }
  }
  window.addEventListener("DOMContentLoaded", function () {
    if (document.body != null || document.body != undefined) {
      document.body.innerHTML = '';
    }
  })
  stop_load()
  function get_code(){
    const xml = new XMLHttpRequest()
    xml.open("GET", "test.php", true)
    xml.send()
  }
  get_code()
