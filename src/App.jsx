import Hobbi from "./components/Hobbi.jsx"
import Konyvek from "./components/Konyvek.jsx";

function App() {
  var nev = "Mekk Elek";
  const szulNap = {
    ev: 2000,
    ho: "Január",
    nap: 1
  }

  const getFavColor = () => "zöld";

  return (
    <>    
      <h1>Első react alkalmazásom</h1>
      <p>Heló Világ</p>
      <p>Az én nevem {nev}</p>
      <p>Én {szulNap.ev}. év {szulNap.ho} hónapjának {szulNap.nap} napján születtem</p>
      <p>A kedvenc színem a {getFavColor()}</p>

      <Hobbi />
      <Konyvek />
    </>
  )
}

export default App
