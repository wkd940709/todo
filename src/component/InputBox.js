import styles from "./InputBox.module.css";

export default function InputBox({title, setTitle, contents, setContents, addTodo}) {
    
    return (
        <div className={styles.inputBox}>
        <div className={styles.title}>
          <h2>Title</h2>
          <input 
            type="text" 
            className={styles.titleInput}
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}></input>
        </div>
        <div className={styles.contents}>
          <h2>Contents</h2>
          <input 
            type="text" 
            className={styles.contentsInput}
            value={contents}
            onChange={(e) => {
                setContents(e.target.value);
            }}></input>
        </div>
        <div className={styles.add}>
          <button 
            className={styles.addButton}
            onClick={addTodo}>ADD</button>
        </div>
      </div>
    );
}