import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {increment} from "./slices/counterSlice.ts"; // Використовуємо тільки increment
import MyHeader from "./components/MyHeader.tsx";
import {useState} from "react";

// Список товарів
const PRODUCTS = [
    { id: 1, name: "Яблуко" },
    { id: 2, name: "Банан" },
    { id: 3, name: "Апельсин" }
];

function App() {
    const dispatch = useDispatch();

    // значення лічильника з Redux
    const totalItems = useSelector((state: any) => state.counter.value);

    // Локальний стан для відстеження які товари вже натиснуті
    // Зберігаємо ID куплених товарів
    const [boughtProducts, setBoughtProducts] = useState<number[]>([]);

    const onBuyHandler = (id: number) => {
        // Збільшуємо глобальний лічильник у Redux
        dispatch(increment());

        // Додаємо ID товару до списку куплених (якщо його там ще немає)
        if (!boughtProducts.includes(id)) {
            setBoughtProducts([...boughtProducts, id]);
        }
    }

    return (
        <>
            <MyHeader/>
            <h1>Магазин 🇺🇦</h1>
            <p>Всього у кошику: {totalItems}</p>

            <div style={{ display: 'flex', gap: '15px' }}>
                {PRODUCTS.map(product => (
                    <div key={product.id} style={{ border: '1px solid white', padding: '10px' }}>
                        <h3>{product.name}</h3>

                        <button onClick={() => onBuyHandler(product.id)}>
                            {/* Якщо ID є у списку куплених — міняємо текст */}
                            {boughtProducts.includes(product.id) ? "🛒 Кошик" : "Купити"}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App