import React, { useRef, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [songList, setsongList] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		},
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3"
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3"
		},
		{
			id: 6,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/starman.mp3"
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3"
		},
		{
			id: 8,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3"
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3"
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 15,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 16,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	]);

	//ARRAY URL
	/*const songURL = songList.map(song => ({
		url: "https://assets.breatheco.de/apis/sound/" + song.url,
		name: song.name
	}));
	console.log(songURL);
*/
	let audio = useRef();

	//BUTTONS
	const playPause = () => {
		if (audio.current.paused) {
			audio.current.play();
		} else if (!audio.current.paused) {
			audio.current.pause();
		}
	};

	//RETURN
	return (
		<div className="container">
			<div className="header"></div>
			<div className="song">
				<ol>
					<li>
						{songList.map((nombre, i) => {
							return (
								<div key={nombre}>
									<p>{i}</p>
									<p>{nombre}</p>
								</div>
							);
						})}

						<audio ref={audio}></audio>
					</li>
				</ol>
			</div>
			<div className="footer fluid fixed-bottom">
				<button className="btn  btn-sm p-0">
					<i className="fas fa-caret-square-left fa-2x boton" />
				</button>
				<button className="btn  btn-sm p-0" onClick={playPause}>
					<i className="fas fa-play fa-2x boton" />
				</button>
				<button className="btn  btn-sm p-0">
					<i className="fas fa-caret-square-right fa-2x boton" />
				</button>
			</div>
		</div>
	);
}
