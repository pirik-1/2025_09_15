import KartyaAdatok from "./KartyaAdatok"
import KartyaKep from "./KartyaKep"
import styles from "../css/kartya.module.css"

function Kartya(){
  return(
  <>
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

export default Kartya;