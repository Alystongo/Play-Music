/* All Functions */

/* function load the track */
function load_track_inter(index_no) {
    folder.innerHTML = "Internacional";
    menu.style.width = "26vh";

	track.src = All_Song_Inter[index_no].path;
	title.innerHTML = All_Song_Inter[index_no].name;
	image.src = All_Song_Inter[index_no].img;
	artist.innerHTML = All_Song_Inter[index_no].singer;
	track.load();
	
	next.setAttribute('onclick','next_song_inter()');
	previous.setAttribute('onclick','previous_song_inter()');
	slider.setAttribute('onchange', 'change_duration_inter');
	
	timer = setInterval(range_slider_inter, 1000);
	
	
}

function load_track_rock(index_no) {
    folder.innerHTML = "Rock";
    folder.style.marginRight = "20px";
    menu.style.width = "17.5vh";

	track.src = All_Song_Rock[index_no].path;
	title.innerHTML = All_Song_Rock[index_no].name;
	image.src = All_Song_Rock[index_no].img;
	artist.innerHTML = All_Song_Rock[index_no].singer;
	track.load();
	
	next.setAttribute('onclick','next_song_rock()');
	previous.setAttribute('onclick','previous_song_rock()');
	slider.setAttribute('onchange', 'change_duration_rock');
	
	timer = setInterval(range_slider_rock, 1000);
}

function load_track_geek(index_no) {
    folder.innerHTML = "Trap/Rap Geek";
    menu.style.width = "27.5vh";

	track.src = All_Song_Geek[index_no].path;
	title.innerHTML = All_Song_Geek[index_no].name;
	image.src = All_Song_Geek[index_no].img;
	artist.innerHTML = All_Song_Geek[index_no].singer;
	track.load();
	
	next.setAttribute('onclick','next_song_geek()');
	previous.setAttribute('onclick','previous_song_geek()');
	slider.setAttribute('onchange', 'change_duration_geek');
	
	
	timer = setInterval(range_slider_geek, 1000);
}

/* checking.. the song is playing or not */
function justplay() {
	if (playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}

/* play song */
function playsong() {
	track.play();
	playing_song = true;
	play.innerHTML = '<img class="btn-midle-img img-justplay" src="./img/pause.png" style="margin-left: 0">';
	play.style.paddingLeft = "10px";
	play.style.paddingRight = "10px";
}

/* pause song */
function pausesong() {
	track.pause();
	playing_song = false;
	play.innerHTML = '<img class="btn-midle-img img-justplay" src="./img/play.png"></button>';
	play.style.paddingLeft = "5px";
	play.style.paddingRight = "5px";
}

/* next song */
function next_song_inter() {
	if (index_no < All_Song_Inter.length - 1) {
		index_no += 1;
		load_track_inter(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track_inter(index_no);
		playsong();

	}
}

function next_song_rock() {
	if (index_no < All_Song_Rock.length - 1) {
		index_no += 1;
		load_track_rock(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track_rock(index_no);
		playsong();

	}
}

function next_song_geek() {
	if (index_no < All_Song_Geek.length - 1) {
		index_no += 1;
		load_track_geek(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track_geek(index_no);
		playsong();

	}
}

/* previous song */
function previous_song_inter() {
	if (index_no > 0) {
		index_no -= 1;
		load_track_inter(index_no);
		playsong();

	} else {
		index_no = All_Song_Inter.length;
		load_track_inter(index_no);
		playsong();
	}
}

function previous_song_rock() {
	if (index_no > 0) {
		index_no -= 1;
		load_track_rock(index_no);
		playsong();

	} else {
		index_no = All_Song_Rock.length;
		load_track_rock(index_no);
		playsong();
	}
}

function previous_song_geek() {
	if (index_no > 0) {
		index_no -= 1;
		load_track_geek(index_no);
		playsong();

	} else {
		index_no = All_Song_Geek.length;
		load_track_geek(index_no);
		playsong();
	}
}

/* change slider position */
function change_duration_inter() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}
function range_slider_inter() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}
}

function change_duration_rock() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}
function range_slider_rock() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}
}

function change_duration_geek() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}
function range_slider_geek() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}
	
}
