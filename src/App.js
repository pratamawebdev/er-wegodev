import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";
import Input from "./components/Input";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchEmojis();
  }, []);

  const handleSearchEmojis = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />
        {loading && <Empty text="Loading..." />}
        {error && <Empty text="Error!" />}
        {emojisData.length > 0 && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}
      </Container>
    </>
  );
}

export default App;
