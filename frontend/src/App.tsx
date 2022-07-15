
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>

      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
            <ToastContainer />
          </div>
        </section>
      </main>
      
    </>
  )
}

export default App
