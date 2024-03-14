import React, { useEffect, useState } from "react";

//include images into your bundle			
import rigoImage from "../../img/rigo-baby.jpg";

export function Home() {
	const [selectedColor, setSelectedColor] = useState("");
	const [isSOS, setIsSOS] = useState(false);
	const [isBlinking, setIsBlinking] = useState(false);
	
	const handleLightClick = (color) => {
		setIsSOS(false);
		setIsBlinking(false);
		setSelectedColor(color);
	};
	
	const handleSOSClick = () => {
		setIsSOS(true);
	};
	
	const handleBlinkClick = () => {
		setSelectedColor("green3");
		setIsBlinking(true);
	};
	
	useEffect(() => {
		let intervalId;
		if (isSOS) {
			intervalId = setInterval(() => {
				setSelectedColor(prevColor => prevColor === "red" ? "" : "red");
			}, 500);
		} else if (isBlinking) {
			intervalId = setInterval(() => {
				setSelectedColor(prevColor => prevColor === "green3" ? "" : "green3");
			}, 500);
		} else {
			clearInterval(intervalId);
		}
		return () => clearInterval(intervalId);
	}, [isSOS, isBlinking]);
	
	return (
		<div>
			<div className="traffic-light">	
				<div className={"light red" + (selectedColor === "red" ? " glow" : "")} onClick={() => handleLightClick("red")}>.</div>
				<div className={"light yellow" + (selectedColor === "yellow" ? " glow2" : "")} onClick={() => handleLightClick("yellow")}>.</div>
				<div className={"light green" + (selectedColor === "green1" ? " glow3" : "")} onClick={() => handleLightClick("green1")}>.</div>
				<div className={"light green" + (selectedColor === "green3" ? " glow5" : "")} onClick={() => handleLightClick("green3")}>
					<div className="icon-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
							<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
						</svg>
					</div>
				</div>
			</div>
			
			<div>
				<button onClick={() => handleLightClick("red")}>Red Light</button>
				<button onClick={() => handleLightClick("yellow")}>Yellow Light</button>
				<button onClick={() => handleLightClick("green1")}>Green Light</button>
				<button onClick={handleBlinkClick}>Turn Left</button>
				<button onClick={handleSOSClick}>S.O.S</button>
			</div>
		</div>
	);
}

export default Home;
