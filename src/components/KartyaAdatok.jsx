function KartyaAdatok(props){
    return(
    <>
        <ul>
            <li>Név: {props.nev}</li>
            <li>Kor: {props.kor}</li>
            <li>Foglalkozás: {props.foglalkozas}</li>
            <li>Ország: {props.orszag}</li>
        </ul>
    </>
    )
}

export default KartyaAdatok;