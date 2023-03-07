import TitleBar from "./Components/TitleBar";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";

export default function App() {
  return (
    <div style={{ width: 960, height: 630 }}>
      <header style={{ width: "100%", height: 30 }}>
        <TitleBar />
      </header>
      <main style={{ display: "flex", width: "100%", height: 600 }}>
        <aside style={{ width: 230, height: "100%", overflowY: "auto" }}>
          <SideBar />
        </aside>
        <main>
          <Main />
        </main>
      </main>
    </div>
  );
}
