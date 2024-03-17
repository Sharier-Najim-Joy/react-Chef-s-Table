
import './App.css'
import Cover from './Cover'
import Header from './Header'
import Recipes from './Recipes'

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <Header></Header>
      <Cover></Cover>
      <Recipes></Recipes>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
