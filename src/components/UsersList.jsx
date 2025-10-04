import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersSlice";

const UsersList = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    // se utiliza por que se hace una peticion asincrona
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res.data);
            dispatch(fetchUsers(res.data))
        }).catch((err) => console.error(err));
    }, [dispatch])

    return (
        <>
        <h2>Lista de Usuarios de JSON Placeholder</h2>
        <ul>
            {users.map(user =>
            <p key={user.id}>{user.name}</p>
            )}
        </ul>
        </>
    )
};

export default UsersList;