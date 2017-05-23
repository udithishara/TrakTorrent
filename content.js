//console.log("TrakTorrent App Init");



var divs = document.getElementsByClassName("grid-item");
for(var i = 0; i < divs.length & i < 6; i++){

	var seasonEpisodeArray = divs[i].querySelector('.titles .titles-link h3 .main-title-sxe').innerHTML.split("x");
	var showName = divs[i].querySelector('.titles h4').lastChild.innerHTML.replace(/\s/g, '+');
	var torrentUrl = 'http://1337x.to/search/'+ showName + '+S0' + seasonEpisodeArray[0]+ 'E' + seasonEpisodeArray[1] + '/1/';
	var addictedUrl = 'http://www.addic7ed.com/search.php?search='+ showName+ "+" + seasonEpisodeArray[0]+ 'x' + seasonEpisodeArray[1] +'&Submit=Search';

	//var fullDiv = '<div class="tt-wrap"><a class="link" href="'+ seasonEpisodeArray[0] +'">Link</a>'+ seasonEpisodeArray +'</div>';
	//var fullDiv = '<div class="tt-wrap"><a target="_blank" class="torrent" href="'+torrentUrl+'"></a><a target="_blank" class="addicted" href="'+addictedUrl+'"></a></div>';
	//console.log(seasonEpisodeArray);

	//console.log(torrentUrl);
	//console.log(divs[i].getAttribute(['data-season-number']));
	//console.log(showName);


	var fullDiv = document.createElement('div');
	fullDiv.className = 'tt-wrap';
	fullDiv.innerHTML = '<a target="_blank" class="torrent" href="'+torrentUrl+'"></a><a target="_blank" class="addicted" href="'+addictedUrl+'"></a>';
	// fullDiv.innerHTML = showName;
	divs[i].appendChild(fullDiv);



	
	//divs[i].innerHTML = divs[i].innerHTML + fullDiv;

	

	//var ImageOriginal = divs[i].querySelector('a .poster .real').getAttribute(['data-original']);
	//console.log(ImageOriginal);

}












