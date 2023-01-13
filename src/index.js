import "./index.ts";
import "./style.scss";

const header = document.querySelector("header");

import Img from "./assets/background-weather.jpg";

header.style.backgroundImage = `url(${Img})`;
