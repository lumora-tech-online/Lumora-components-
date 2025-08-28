import './App.css'
import Header from './components/Global-layout/Header'
import Footer from './components/Global-layout/Footer'
import ComingSoon from './components/essential-pages/ComingSoon'
import Card from './components/Content&Info/Card'
import Pagination from './components/Content&Info/Pagination'
import TableLayout from './components/Content&Info/TableLayout'

function App() {

  return (<>
    <Header />
    <Card />  
    <Pagination />
    <TableLayout />
  

    <ComingSoon 
  title="Site Maintenance"
  heading="We're Upgrading Our Systems"
    />
    <Footer />
    </>
  )
}

export default App
