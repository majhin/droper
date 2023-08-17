import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App({ options }) {
	const [isHovered, setIsHovered] = useState(false);
	const [selectedValue, setSelectedValue] = useState(""); // Track the selected value

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleOptionClick = (value) => {
		setSelectedValue(value);
		setIsHovered(false);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hover to drop it down !</p>
				<div
					className={`custom-dropdown ${isHovered ? "expanded" : ""}`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div className='selected-option'>
						{selectedValue || "Select an option"}
					</div>
					<div className='options'>
						{options.map((opt, index) => {
							return (
								<div
									key={index}
									className='option'
									onClick={() => handleOptionClick(`${opt}`)}
								>
									{opt}
								</div>
							);
						})}
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
