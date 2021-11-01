import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from '../sections/About';
import Resources from '../sections/Resources';
import Arc from '../sections/Arc';
import Homes from '../sections/Homes';
import Covenants from '../sections/Covenants';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-styled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/covenants">Covenants and Bylaws</Link></li>
                    <li><Link to="/arch-review">Architectural Review</Link></li>
                    <li><Link to="/houses">Houses</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    {/* <li><Link to="/blog">Blog</Link></li> */}
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/covenants"><Covenants /></Route>
                    <Route exact path="/arch-review"><Arc /></Route>
                    <Route exact path="/houses"><Homes /></Route>
                    <Route exact path="/resources"><Resources /></Route>
                </Switch>
            </div>
        </div>
    )
}
  
export default Sidebar;