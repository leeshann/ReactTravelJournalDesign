import Header from '/src/components/Header.jsx'
import Entry from '/src/components/Entry.jsx'
import './App.css'
import data from './data.js'

function App() {

  const travelData = data.map((dataObj) => (
    <Entry 
      key={dataObj.id}
      img={dataObj.img} 
      countryName={dataObj.countryName}
      locationLink={dataObj.locationLink}
      locationName={dataObj.locationName}
      fromDate={dataObj.fromDate}
      toDate={dataObj.toDate}
      description={dataObj.description}
      />
  ))

  console.log(travelData)

  return (
    <>
      <Header />
      {travelData}
    </>
  )
}

export default App
