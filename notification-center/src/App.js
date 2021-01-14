import NotificationCenter from './components/NotificationCenter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ManualNotifications from './components/ManualNotifications'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/notificationCenter">Notification Center</Link>
            </li>
            <li>
              <Link to="/manualNotifications">Manual Notifications</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/manualNotifications">
            <ManualNotifications />
          </Route>
          <Route path="/notificationCenter">
            <NotificationCenter />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
