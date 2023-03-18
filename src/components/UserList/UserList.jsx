// import User from "../User/User";
import Card from "../../UI/Card";
import styles from "./UserList.module.css"

const UserList = ({users}) => {
    return (
        <Card className={styles.users}>
            <h1>Users list</h1>
            <ul >
                {users.length > 0
                    ?
                    // users.map(user => <User user={user} key={user.id}/>)
                    users.map(user => <li key={user.id}> Имя: {user.name}, возраст: {user.age}</li>)
                    :
                    <h2>User list is empty</h2>}
            </ul>
        </Card>
    );
};

export default UserList;