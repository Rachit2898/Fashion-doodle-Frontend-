import "./App.css";
import SignIn from "./screens/signIn";
import Login from "./screens/logIn";
import DesignersTab from "./screens/designersTab";
import NewDesignersTab from "./screens/newDesignersTab";
import Selection from "./screens/selection";
import Direct from "./screens/directMessage";
import Trending from "./screens/trending";
import Notifications from "./screens/notifications";
import Request from "./screens/request";
import Explore from "./screens/explore";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/designers" element={<DesignersTab />} />
          <Route path="/newDesignersTab" element={<NewDesignersTab />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/direct" element={<Direct />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
