//console.log("TrakTorrent App Init");



//without wrapping in a setTimeout, trakt's original image replacement breaks for some reason
setTimeout(function() {
	var divs = document.getElementsByClassName("grid-item");
	for(var i = 0; i < divs.length & i < 6; i++){

		var seasonEpisodeArray = divs[i].querySelector('.titles .titles-link h3 .main-title-sxe').innerHTML.split("x");
		var showName = divs[i].querySelector('.titles h4').lastChild.innerHTML.replace(/\s/g, '+');
		var torrentUrl = 'http://extratorrent.cc/search/?search='+ showName + '+S0' + seasonEpisodeArray[0]+ 'E' + seasonEpisodeArray[1] + '&new=1&x=0&y=0';
		var addictedUrl = 'http://www.addic7ed.com/search.php?search='+ showName+ "+" + seasonEpisodeArray[0]+ 'x' + seasonEpisodeArray[1] +'&Submit=Search';

		//var fullDiv = '<div class="tt-wrap"><a class="link" href="'+ seasonEpisodeArray[0] +'">Link</a>'+ seasonEpisodeArray +'</div>';
		var fullDiv = '<div class="tt-wrap"><a target="_blank" class="torrent" href="'+torrentUrl+'"></a><a target="_blank" class="addicted" href="'+addictedUrl+'"></a></div>';
		//console.log(seasonEpisodeArray);

		//console.log(torrentUrl);
		//console.log(divs[i].getAttribute(['data-season-number']));
		//console.log(showName);

		
		divs[i].innerHTML = divs[i].innerHTML + fullDiv;

		

		//var ImageOriginal = divs[i].querySelector('a .poster .real').getAttribute(['data-original']);
		//console.log(ImageOriginal);

	}
}, 1500);











