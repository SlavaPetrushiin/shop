import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2 className={styles.title}>{count}</h2>
            <button onClick={() => setCount((prev) => ++prev)}>Increment</button>
        </div>
    );
};
