import styles from "../css/kartya.module.css";

function KartyaKep(props){
    return(
    <>
        <div className = {styles.div}>
            <img src = {props.imgUrl} alt = {props.imgTxt} className = {styles.kep}/>
        </div>
    </>

    )
}

export default KartyaKep;