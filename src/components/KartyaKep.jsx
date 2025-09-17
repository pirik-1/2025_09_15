import styles from "../css/kartya.module.css";
import KartyaAdatok from "./KartyaAdatok";

function KartyaKep(props){
    return(
    <>
            <img src = {props.imgUrl} alt = {props.imgTxt} className = {styles.kep}/>
    </>

    )
}

export default KartyaKep;