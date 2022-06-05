import ReactDOM from "react-dom/client";

import { Application } from "./application";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(<Application />);
