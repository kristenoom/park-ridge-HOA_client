import { Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from '../sections/About';
import Resources from '../sections/Resources';
import Arc from '../sections/arc/Arc';
import Homes from '../sections/homes/Homes';
import Blog from '../sections/blog/Blog';
import Covenants from '../sections/Covenants';
import Amenities from '../sections/Amenities';
import Signup from '../../auth/Signup';
import Login from '../../auth/Login';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-styled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/amenities">Amenities</Link></li>
                    <li><Link to="/covenants">Covenants and Bylaws</Link></li>
                    <li><Link to="/arch-review">Architectural Review</Link></li>
                    <li><Link to="/houses">Houses</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                    <Routes>
                        <Route path="/register" element={<Signup token={props.token} />}/>
                        <Route path="/login" element={<Login token={props.token} />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/amenities" element={<Amenities />} />
                        <Route path="/covenants" element={<Covenants />} />
                        <Route path="/arch-review" element={<Arc />} />
                        <Route path="/houses" element={<Homes />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/resources" element={<Resources />} />
                    </Routes>
            </div>
        </div>
    )
}
  
export default Sidebar;