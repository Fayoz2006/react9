import "./CSS/production/App.css";
import { BrowserRouter as Br } from "react-router-dom";
import { Views } from "./Views/Views";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Br>
      {/* <Layout> */}
        <Views />
      {/* </Layout> */}
    </Br>
  );
}

export default App;
