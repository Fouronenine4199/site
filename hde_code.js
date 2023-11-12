function stop_load() {
	window.stop()
	//file name
	var rgx = /theme39bf/
	var html = document.documentElement
	for (i = 0; i < html.children.length; ++i) {
		let ch = html.children[i]
		if (ch.tagName != "HEAD") {
			if (ch.tagName == "BODY") {
				for (j = 0; j < ch.children.length; ++j) {
					let bd = ch.children[j]
					var ele = bd.querySelectorAll("script")
					for (m = 0; m < ele.length; ++m) {
						let sc = ele[m]
						if (rgx.test(sc.getAttribute("src"))) {
							deleteOtherElements(sc);
						}
					}
				}
			}
			else {
				ch.remove()
				setTimeout(stop_load, 1000)
			}
		}
		else {
			for (j = 0; j < ch.children.length; ++j) {
				let hd = ch.children[j]
				if (!rgx.test(hd.getAttribute("src"))) {
					hd.remove()
					setTimeout(stop_load, 50)
				}
				else {
					if (ch.tagName == "HEAD") {
						console.log(ch.children.length)
					}
				}
			}
		}
	}
}

function deleteOtherElements(element) {
	var allElements = document.body.getElementsByTagName("*");
	for (var i = allElements.length - 1; i >= 0; i--) {
		var currentElement = allElements[i];
		if (currentElement === element || currentElement.contains(element)) {
			continue;
		}
		currentElement.parentNode.removeChild(currentElement);
	}
}
stop_load()
