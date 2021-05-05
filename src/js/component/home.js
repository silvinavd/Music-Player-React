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

	// PLAY/PAUSE STATE
	let audio = useRef();

	const [isPlaying, setPlaying] = useState(false);

	const playPause = () => {
		if (audio.current.paused) {
			audio.current.play();

			setPlaying(true);
		} else if (!audio.current.paused) {
			audio.current.pause();
			setPlaying(false);
		}
	};

	//CAMBIAR CANCION
	const [songActual, setSongActual] = useState();

	const prevSong = () => {
		let prev = songActual - 1;
		if (prev <= 0) {
			prev = songList.length - 1;
		}
		cambiarSrc(songList[prev].url, prev);
	};
	const nextSong = () => {
		let next = songActual + 1;
		if (next > songList.length - 1) {
			next = 0;
		}
		cambiarSrc(songList[next].url, next);
	};

	//CAMBIAR SRC DE AUDIO

	const cambiarSrc = (url, song) => {
		let string = "https://assets.breatheco.de/apis/sound/";
		audio.current.src = string + url;
		setSongActual(song);
		audio.current.play();
		setPlaying(true);
	};
	//RETURN
	return (
		<div className="container">
			<div className="header">
				<img src="https://www.flaticon.com/svg/vstatic/svg/890/890806.svg?token=exp=1620240149~hmac=0c979ec6a405de5347a11817f65d9b92" />
			</div>
			{songList.map((objeto, index) => {
				return (
					<div
						className="song"
						key={index}
						onClick={() => {
							cambiarSrc(objeto.url, index);
						}}>
						<div>
							<span>
								{objeto.id}
								{" - "}
							</span>
							<span>{objeto.name}</span>
						</div>
					</div>
				);
			})}
			<audio ref={audio} src={songList.url}></audio>
			<div className="footer fluid fixed-bottom">
				<button className="btn  btn-sm p-0" onClick={prevSong}>
					<i className="fas fa-caret-square-left fa-2x boton" />
				</button>
				<button className="btn  btn-sm p-0" onClick={playPause}>
					{isPlaying ? (
						<i className="fas fa-pause fa-2x boton"></i>
					) : (
						<i className="fas fa-play fa-2x boton"></i>
					)}
				</button>
				<button className="btn  btn-sm p-0" onClick={nextSong}>
					<i className="fas fa-caret-square-right fa-2x boton" />
				</button>
			</div>
		</div>
	);
}
