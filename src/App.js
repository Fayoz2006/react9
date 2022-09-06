import "./CSS/production/App.css";
import { Suspense } from "react";
import { BrowserRouter as Br } from "react-router-dom";
import { Views } from "./Views/Views";
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  return (
    <Suspense
      fallback={
        <SyncLoader
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      }
    >
      <Br>
        <Views />
      </Br>
    </Suspense>
  );
}

export default App;
