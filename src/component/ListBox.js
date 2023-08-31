import { useState } from "react";
import styles from "./ListBox.module.css";
import InputBox from "./InputBox";

export default function ListBox({id, title, contents, deleteTodo}) {
    let [done, setDone] = useState(false);

    return (
        <div className={styles.listBox}>
            <div className={styles.item}>
                <div className={styles.checkBox}>
                    <div className={done ? styles.checkYes : styles.checkNo}></div>
                    <div className={done ? styles.hideMessage : styles.revealMessage}>Done!😊</div>
                </div>
            <div className={styles.본문}>
                <h3>{title}</h3>
                <p>{contents}</p>
            </div>
            <div className={styles.selectOption}>
                <button 
                    className={styles.delete}
                    onClick={()=>deleteTodo(id)}>
                        DELETE
                </button>
                <button 
                    className={done ? styles.cancel : styles.done} 
                    onClick={() => {setDone(!done)}}
                >
                    {done == false ? "Done" : "Cancel"}
                </button>
            </div>
            </div>
        </div>
    );
}