
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import 'react-toastify/dist/ReactToastify.min.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position='top-right'
        reverseOrder={false}
      />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>

    </>
  )
}

export default App
