<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>function changeFrameHeight(){
	var ifm = document.getElementById("iframePage");
	ifm.height = document.documentElement.clientHeight;
}

window.onresize = function() {
	changeFrameHeight();
}

 document.getElementById("iframePage").onload = changeFrameHeight;
