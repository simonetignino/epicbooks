import { Container } from "react-bootstrap";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import fantasy from "./books/fantasy.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";
import { useState } from "react";
import { ThemeContext } from "./modules/Context";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  let [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <MyNav search={search} handleSearch={handleSearch} />
        <Container className="my-3">
          <Welcome />
          <AllTheBooks books={fantasy} searchQuery={search} />
        </Container>
        <MyFooter />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
