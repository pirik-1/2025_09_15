import GyurukUra from "./GyurukUra.jsx"
import Konyv from "./Konyv.jsx"
import Leiras from "./Leiras.jsx";

function Konyvek(){
    return(
        <>
            <h2>Kedvenc könyveim</h2>
            <GyurukUra/>
            <Konyv szerzo = "Fekete István" cim="Tüskevár"  />
            <Leiras>
                <strong>
                    A Tüskevár egy ifjúsági regény, amelyet Fekete István írt. A történet két városi fiú, Tutajos és Bütyök nyári kalandjait követi nyomon a Balaton-felvidéken, ahol megismerkednek a természet szépségeivel és a vidéki élet kihívásaival. A regény bemutatja a barátság, a bátorság és a kitartás értékeit, miközben a fiúk felfedezik a természet csodáit és megtanulják tisztelni azt.
                </strong>
            </Leiras>
        </>
    )
}

export default Konyvek