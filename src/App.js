import { useCallback, useState, useEffect } from "react";
import './App.css';
import MyHeader from './components/Header'
import AddInput from './components/AddInput'
import TodoItem from './components/TodoItem'

function App() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const todoData = JSON.parse(localStorage.getItem('todoData') || '[]');
        if (todoData.length > 0) {
            setTodoList(todoData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(todoList));
    }, [todoList]);

    const addItem = useCallback((value) => {
        const dataItem = {
            id: new Date().getTime(),
            content: value,
            completed: false
        };
        setTodoList((todoList) => [...todoList, dataItem]);
    }, []);

    return (
        <div className="App">
            <MyHeader/>
            <AddInput addItem={ addItem }/>
            <ul>
                {
                    todoList.map((item, index) => {
                        return (
                            <TodoItem data={ item } key={ index }/>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;
