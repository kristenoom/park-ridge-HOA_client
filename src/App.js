import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar.jsx";
import About from "./components/About.jsx";
import Amenities from "./components/Amenities.jsx";
import Arc from "./components/Arc.jsx";
import Homes from "./components/Homes.jsx";
import Resources from "./components/Resources.jsx";

function App() {
  return (
      <div id="colorlib-page">
          <div id="container-wrap">
              <Sidebar />
          </div>
          <div id="colorlib-main">
              <About />
              <Amenities />
              <Arc />
              <Homes />
              <Resources />
          </div>
    </div>
  );
}

export default App;
