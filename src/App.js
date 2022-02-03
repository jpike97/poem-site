import './styles/styles.scss';
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import ('./pages/login'));

let subject = "Test!"
function App(props) {
  console.log(props);
  return (
   <Router>
     <Suspense fallback={<p>Loading...</p>} >
     <Routes>
       <Route path={ROUTES.LOGIN} element={<Login />} />
     </Routes>
     </Suspense>
   </Router>
    
  );
}

export default App;
