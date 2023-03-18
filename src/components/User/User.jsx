const User = ({user}) => {
    return (
        <div>
            <h3>ID: {user.id}</h3>
            <h2>Name: {user.name}. Age: {user.age}</h2>
        </div>
    );
};

export default User;