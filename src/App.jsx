import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/style.css";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} onSearch={setSearch} />
      <Home search={search} />

      <footer style={{
        background: "#1A1209", color: "#c9b8a5",
        textAlign: "center", padding: "40px 24px", fontSize: "0.85rem"
      }}>
        <p>Made with ❤️ and <strong style={{ color: "#E8A020" }}>Masala</strong> — SwadNepal © {new Date().getFullYear()}</p>
        <p style={{ marginTop: "6px", opacity: 0.45, fontSize: "0.78rem" }}>
          Celebrating the flavors of Nepal, one recipe at a time.
        </p>
      </footer>
    </>
  );
}
