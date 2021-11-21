import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from '../sections/About';
import Resources from '../sections/Resources';
import Arc from '../sections/arc/Arc';
import Homes from '../sections/homes/Homes';
import Blog from '../sections/blog/Blog';
import Covenants from '../sections/Covenants';
import Amenities from '../sections/Amenities';

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
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/amenities"><Amenities /></Route>
                    <Route exact path="/covenants"><Covenants /></Route>
                    <Route exact path="/arch-review"><Arc /></Route>
                    <Route exact path="/houses"><Homes /></Route>
                    <Route exact path="/blog"><Blog /></Route>
                    <Route exact path="/resources"><Resources /></Route>
                </Switch>
            </div>
        </div>
    )
}
  
export default Sidebar;