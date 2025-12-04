'use client'
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { useState, useEffect } from "react"
import type { todoDataType } from "./todo";
import todo from "@/data/todo.json"

export default function TodoList() {
    const [list, setList] = useState<todoDataType[]>([]);
    const [completed, setCompleted] = useState(0);
    const [incompleted, setIncompleted] = useState(0);

    const handleSave = async (newItem: todoDataType[]) => {
        setList(newItem);

        await fetch("/api/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(list),
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/todo");
            const data = await res.json();
            setList(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        setCompleted(list.filter(item => item.completed).length)
        setIncompleted(list.filter(item => !item.completed).length)
    }, [list]);

    console.log(list)
    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold p-5 text-center">할일목록</h2>
            <div className="w-7/10 bg-lime-100 p-5">
                전체 : {list.length}개 | 완료 : {completed}개 | 미완료 : {incompleted}개
            </div>
            <div className="p-5 flex flex-row items-center justify-center w-7/10">
                <TodoInput list={list} setList={handleSave} />
            </div>
            <div className="gap-5 p-5 w-7/10 flex flex-col justify-start">
                {list.map(item => <TodoItem key={item.id} todo={item} list={list} setList={handleSave} />)}
            </div>
        </div>
    )
}
