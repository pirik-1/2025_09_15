import Hobbi from "./components/Hobbi.jsx"
import KartyaAdatok from "./components/KartyaAdatok.jsx";
import KartyaKep from "./components/KartyaKep.jsx";
import Konyvek from "./components/Konyvek.jsx";
import "./css/global.css"
import styles from "./css/kartya.module.css";

function App() {
  var nev = "Mekk Elek";
  const szulNap = {
    ev: 2000,
    ho: "Január",
    nap: 1
  }

  const getFavColor = () => "zöld";

  const nevStilus = {
    fontSize: "1.Sem",
    fontWeight: "bold"
  }

  return (
    <>    
      <h1 style ={ {textAlign: "center"} }>Első react alkalmazásom</h1>
      <p>Heló Világ</p>
      <p style = {nevStilus}>Az én nevem {nev}</p>
      <p>Én {szulNap.ev}. év {szulNap.ho} hónapjának {szulNap.nap} napján születtem</p>
      <p>A kedvenc színem a {getFavColor()}</p>

      <Hobbi />
      <Konyvek />

      <div className= {styles.kulsoDiv}>
        <div className= {styles.div}>
          <KartyaKep imgUrl = "/jeffnippard.jpg" imgTxt = "jeffnippard" nev = "Jeff Nippard"/>
          <KartyaAdatok nev = "Jeff Nippard" kor = "34" foglalkozas = "Testépítő/Influenszer" orszag = "Kanada"/>
        </div>

        <div className= {styles.div}>
          <KartyaKep imgUrl = "/ohne.png" imgTxt = "ohnepixel"/>
          <KartyaAdatok nev = "Mark Zimmerman" kor = "27" foglalkozas = "Élő közvetítő" orszag = "Németország"/>
        </div>

        <div className= {styles.div}>
          <KartyaKep imgUrl = "/viking.jpg" imgTxt = "viking"/>
          <KartyaAdatok nev = "Ádám Martin" kor = "30" foglalkozas = "Labdarúgó" orszag = "Magyarország"/>
        </div>
      </div>
      
      
      
    </>
  )
}

export default App
