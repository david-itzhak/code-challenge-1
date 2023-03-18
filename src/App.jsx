import {useState} from "react";
import './App.css';
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UserList from "./components/UserList/UserList";
import userList from "./data/userList";



function App() {
    const [users, setUsers] = useState(userList);
    const onAddUserHandler = (user) => {
        setUsers(prevState => [user, ...prevState]);
    }


    return (
        <div className="App">
            <AddUserForm onAddUser={onAddUserHandler}/>
            <UserList users={users}/>
        </div>
    );
}

export default App;
