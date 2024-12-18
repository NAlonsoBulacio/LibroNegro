import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
function App() {
  return (
    <div className="App font-sans-200">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/politicas-de-privacidad" component={PrivacyPolicy} />
    </div>
  );
}

export default App;
