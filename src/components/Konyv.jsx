import styles from "../css/konyv.module.css";

function Konyv(props){
    return(
        <>
            <p>
                <span className={styles.szerzo}>{props.szerzo}</span>: &nbsp;
                <span className={styles.cim}>{props.cim}</span>
            </p>
        </>
    )
}
export default Konyv;