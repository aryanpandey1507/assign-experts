import LoginSignup from "./components/LoginSignup";
import {BrowserRouter as  Router ,Route ,Routes} from 'react-router-dom';




function App() {

  

  return (
      <Router>
         <Routes>
            <Route path="/"  exact element={<LoginSignup />} />
         </Routes>
      </Router>
  );
}

export default App;
  