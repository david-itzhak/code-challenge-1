import {useState} from "react";
import {v4 as uuidV4} from "uuid";
import Card from "../../UI/Card";
import styles from "./AddUserForm.module.css"
import Button from "../../UI/Button";
import ModalWindow from "../../UI/ErrorModal";

const AddUserForm = ({onAddUser}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('0');
    const [isError, setIsError] = useState(false);

    const onEnterNameHandler = (event) => {
        setName(event.target.value);
    }

    const onEnterAgeHandler = (event) => {
        setAge(event.target.value);
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0 || isNaN(+age) || parseInt(age) < 0) {
            setIsError(true);
        } else {
            onAddUser({
                id: uuidV4(),
                name: name,
                age: parseInt(age)
            });
            setName('');
            setAge('');
        }
    }

    const closeModalWindowHandler = () => {
        setIsError(false);
    }

    return (
        <>
            {isError && <ModalWindow title="Произошла ошибка"
                                     message="Проверьпе правильность введенных данных"
                                     buttonText="Закрыть"
                                     onCloseModal={closeModalWindowHandler}
            />}
            <Card className={styles.input}>
                <form onSubmit={onSubmitFormHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" placeholder="Укажите имя" value={name} onChange={onEnterNameHandler}/>
                    <label htmlFor="age">Возраст</label>
                    <input id="age" type="number" placeholder="Укажите возраст" value={age} min="0"
                           onChange={onEnterAgeHandler}/>
                    <Button type="submit">Добавить пользователя</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUserForm;