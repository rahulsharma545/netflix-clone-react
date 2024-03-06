import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import { requests } from "./requests";
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow /> {/* bydefault
      the value of 'isLargeRow' will be true. so it is same as writing 'isLargeRow=true' */}
      <Row title='Trending Now' fetchURL={requests.fetchTrending} />
      <Row title='Top Rated' fetchURL={requests.fetchToprated} />
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchURL={requests.fetchHorrorMovies} />
      <Row title='Documentris' fetchURL={requests.fetchDocumentries} />
    </div>
  );
}

export default App;


// a4d01fe5741a07aa919054a7883e178c