import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import './components/style.css';
import RouterDom from './RouterDom';


function App() {
  return (
    <>

    <Header/>
   <RouterDom/>

   <ToastContainer />
    </>
  );
}

export default App;
