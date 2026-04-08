/* 'use client'
import {useState} from "react";

export default function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");


    const handleAddToDo = () => {
        if(!input.trim()) return;

        const newToDo= {
            id: Date.now(),
            text: input,
            completed: false,
        }
    }


 
    


    
} */