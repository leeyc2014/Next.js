'use client'
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { useState, useEffect } from "react"
import type { todoDataType } from "./todo";

export default function TodoList() {
    // const todos = useAtomValue(todosAtom);
    // const completed = useAtomValue(completedAtom);
    // const incompleted = useAtomValue(incompletedAtom);
    const [list, setList] = useState<todoDataType[]>([]);
    const [completed, setCompleted] = useState(0);
    const [incompleted, setIncompleted] = useState(0);

    const handleSave = (newItem : todoDataType[]) => {
        setList(newItem);
        localStorage.setItem("todo", JSON.stringify(newItem));
    };

    useEffect(() => {
        // const newItem = [
        //     {id:1, text:"리액트 공부", completed:false}, 
        //     {id:2, text:"HTML 공부", completed:false}
        // ];

        // // 자바스크립트 객체 -> 문자열(JSON.stringify())
        // localStorage.setItem("todo", JSON.stringify(newItem))

        // 문자열 -> 자바스크립트 객체(JSON.parse())
        const local = localStorage.getItem("todo");
        const todos = (local == null) ? [] : JSON.parse(local);
        setList(todos);
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
                {list.map(item => <TodoItem key={item.id} todo={item} list={list} setList={handleSave}/>)}
            </div>
        </div>
    )
}
