import {useState} from "react";
import User from "../components/User";
import {useSelector, useDispatch} from "react-redux";
import {addUser} from "../store/usersSlice";


export default function UsersPage() {

    const [value, setValue] = useState("");
    const dispatch = useDispatch()

    const {users} = useSelector(state => state.usersReducer)

    const addUserFn = () => {
        dispatch(addUser(value))
        setValue("")
    }


    return (
        <>
            <input
                type="text"
                placeholder="username"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={addUserFn}>add user</button>
            <button>delete all users</button>
            <ul>
                {
                    users.map(user => <User userInfo={user}/>)
                }

            </ul>
        </>
    )
}