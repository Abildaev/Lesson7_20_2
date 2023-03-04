import {useDispatch} from "react-redux";
import {deleteUser} from "../store/usersSlice";



export default function  User({userInfo}) {
    const dispatch = useDispatch()

    const deleteUserFn = () => {
        dispatch(deleteUser(userInfo.id))
    }

    return (
        <li onDoubleClick={deleteUserFn} style={{cursor: 'pointer'}}>
            {userInfo.username}
        </li>
    )
}