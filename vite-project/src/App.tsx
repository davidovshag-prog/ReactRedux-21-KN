import './App.css'
import {useSelector, useDispatch} from "react-redux";
// Імпортуємо дії з нашого слайса
import {increment, decrement, incrementByValue} from "./slices/counterSlice.ts";

function App() {
    // Отримало доступ до Storage Redux
    const {value: counter} = useSelector(store => store.counter);

    // Створюємо dispatch для відправки дій у Store
    const dispatch = useDispatch();

    console.log("Store counter: " + counter);

    return (
        <>
            <h1>Привіт із України :)</h1>
            <h2>Counter: {counter}</h2>

            <div className="card">
                {/* Викликаємо екшени при натисканні */}
                <button onClick={() => dispatch(increment())}>
                    Збільшити (+)
                </button>

                <button onClick={() => dispatch(decrement())}>
                    Зменшити (-)
                </button>

                <button onClick={() => dispatch(incrementByValue(100))}>
                    Встановити 100
                </button>
            </div>
        </>
    )
}

export default App