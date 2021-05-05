import React, { useRef, useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let [songList, setsongListAsync] = useState([]);
	//OBTENER ARRAY

	useEffect(() => {
		obtenersongList();
	}, []);

	const obtenersongList = async () => {
		try {
			const res = await fetch(
				"https://assets.breatheco.de/apis/sound/songs"
			);
			const data = await res.json();
			setsongListAsync(data);
		} catch (error) {
			console.log(songList);
		}
	};

	//BUTTONS
	const playPause = () => {
		if (audio.current.paused) {
			audio.current.play();
		} else if (!audio.current.paused) {
			audio.current.pause();
		}
	};
	let audio = useRef();
	//RETURN
	return (
		<div className="container">
			<div className="header"></div>
			{songList.map((objeto, index) => {
				return (
					<div className="song" key={index}>
						<div onClick={() => {}}>
							<span>
								{objeto.id}
								{" - "}
							</span>
							<span>{objeto.name}</span>
						</div>
						<audio ref={audio} src={songList.url} controls></audio>
					</div>
				);
			})}

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
