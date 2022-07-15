
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster
      position="top-right"
      reverseOrder={true}
      toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#8d99ae',
        },
        success: {
          iconTheme: {
            primary: '#0077b6',
            secondary: '#fff',
          }
        }
        
      }}
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
