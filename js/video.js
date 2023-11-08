var video = document.querySelector(".video");

window.addEventListener("load", function() {
    console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate -= .1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate += .1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	currenttime = video.currentTime
	newtime = currenttime + 10
	if (newtime >= video.duration){
		newtime = 0
	}
	video.currentTime = newtime
	console.log("The current time is " + newtime)
});

document.querySelector("#slider").addEventListener("change", function(){
	currentvol = document.querySelector("#slider").value;
	console.log("The original volume is " + video.volume)
	video.volume = currentvol/100
	console.log("The current volume is " + video.volume);
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#mute").addEventListener("click", function(){
var button=document.querySelector("#mute")
	if (video.muted){
		video.muted =false;
		console.log("Unmuted");
		button.textContent = "Mute";
	}
	else{
		video.muted=true;
		console.log("Muted");
		button.textContent = "Unmute";
	}	
	// mutedvol = video.volume = 0
	// document.querySelector("#slider").value = 0
	// document.querySelector("#volume").innerHTML=video.volume*100+"%";
	// console.log("The current volume is 0")
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});