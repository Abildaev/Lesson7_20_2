import {useDispatch, useSelector} from "react-redux";
import {changeInputValue, changeTitle, changeTitleWithParams} from "../store/titleSlice";

function MainPage() {
    const dispatch = useDispatch();
    const {title, inputValue} = useSelector(state => state.titleReducer)

    const changeTitleFn = () => {
        dispatch(changeTitle())
    }

    const withParams = () => {
        dispatch(changeTitleWithParams("hello geeks"))
    }

    const changeInputFn = (e) => {
        dispatch(changeInputValue(e.target.value))
    }

    const fromInput = () => {
        dispatch(changeTitleWithParams(inputValue))
    }

    return (
        <>
            <h1>{title}</h1>
            <input
                type="text"
                onChange={changeInputFn}
                value={inputValue}
            />
            <button onClick={fromInput}>add title</button>
            <button onClick={changeTitleFn}>change title</button>
            <button onClick={withParams}>with params</button>
        </>
    );
}

export default MainPage;


