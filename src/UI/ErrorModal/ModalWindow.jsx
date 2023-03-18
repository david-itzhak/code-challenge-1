import {createPortal} from 'react-dom';
import Card from "../Card";
import Button from "../Button";
import styles from "./ModalWindow.module.css"

const ModalWindow = (props) => {

    return createPortal(
        <>
            <div className={styles.backdrop} onClick={props.onCloseModal}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onCloseModal}>{props.buttonText}</Button>
                </footer>
            </Card>
        </>
        , document.body
    );

}
export default ModalWindow;