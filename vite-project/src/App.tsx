import './App.css'
import {useSelector} from "react-redux";

function App() {
    const {value: counter} = useSelector(store => store.counter)

    console.log("Store counter: " + counter)
  return (
    <>
      <h1>Привіт із України :)</h1>
        <h2>Counter: {counter}</h2>
    </>
  )
}

export default App
