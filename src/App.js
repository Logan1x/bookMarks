import "./styles.css";
import Home from "./components/show_bookmarks";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>BookMaarks</h1>
        <h2>see my best bookmarked resources</h2>
      </div>
      <Home />
      <footer>
        <p>
          Developed by <a href="https://logan1x.github.io">@logan1x</a>
        </p>
      </footer>
    </div>
  );
}
