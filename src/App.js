import ReactDOM from "react-dom/client";
import './App.css';
import NavBar from './components/NavBar';
import CoverImage from './components/CoverImage';
import Footer from './components/Footer'
import ChurchCover from './images/church-cover.jpg'
import Cathedral from './images/CathedralB&W.jpg'

function App() {
  return (
    <div className="App">
      <CoverImage img={Cathedral} />
    </div>
  );
}

export default App;
