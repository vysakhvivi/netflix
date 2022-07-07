import './App.css';
import Row from './components/Row'
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
        <Nav/>
      <Banner/>
<Row 
title="NETFLIX ORIGINALS"
fetchUrl={requests.fetchNetflixOriginals}
isLargeRow={true}/>
<Row title="Trending" fetchUrl={requests.fetchTrending}/>
<Row title="Toprated" fetchUrl={requests.fetchTopRated}/>
<Row title="Action" fetchUrl={requests.fetchActionMovies} />
<Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
<Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
<Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
