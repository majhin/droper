import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const options = ["Apple", "Banana", "Mango", "Peach", "Coconut"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App options={options} />
	</React.StrictMode>
);
