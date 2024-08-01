import React, { useState, useEffect, useDelay} from "react";

const UseLocalStorage = (name, defaultValue) => {

    const [currentValue, setCurrentValue] = useState(JSON.parse(localStorage.getItem('TodoList')) ?? defaultValue);

    useEffect(() => {
        localStorage.getItem(name, JSON.stringify('TodoList'));
    }, [currentValue]);

    return [currentValue, setCurrentValue];
}

export default UseLocalStorage;