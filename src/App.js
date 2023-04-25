import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import WatchPage from './component/WatchPage';
import Home from './component/Home';
import Header from './component/Header';
import SearchContainer from './component/SearchContainer';

// scss files
import './scss/Main.scss'
import './scss/Header.scss'
import './scss/LeftSidebar.scss'
import './scss/VideoCard.scss'
import './scss/VideoContainer.scss'
import './scss/WatchPage.scss'
import './scss/SuggestionVideoCard.scss'
import './scss/SearchContainer.scss'
import './scss/SearchCard.scss'
import './scss/VideoCardShimmer.scss'
import './scss/SimilarVideosShimmer.scss'
import './scss/SearchCardShimmer.scss'

function App() {
  return (
    <div className="app bg-black overflow-hidden">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path="/watch" element={<WatchPage/>}/>
        <Route path="/results" element={<SearchContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
