'use client'
import TailButton from "@/components/TailButton";
import { useState } from "react";
import type { todoDataType } from "./todo";

interface TodoItemProps {
    todo:todoDataType, 
    list:todoDataType[], 
    setList:(list:todoDataType[]) => void
}

export default function TodoItem({ todo, list, setList } : TodoItemProps) {
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleChange = () => {
        setList(list.map(item => item.id == todo.id ? { ...item, completed: !todo.completed } : item));
    };

    const handleSave = () => {
        setList(list.map(item => item.id == todo.id ? { ...item, text: editText } : item));
        setIsEdit(false);
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEdit(false);
    }

    const handleDelete = () => {
        setList(list.filter(item => item.id != todo.id));
    }
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="flex items-center">
                <label className="flex items-center gap-5 w-7/10 h-full">
                    <input type="checkbox" checked={todo.completed} onChange={handleChange} className="w-6 h-6" />
                    {isEdit ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full h-full border border-gray-300 rounded-s bg-white text-start" /> : <span>{todo.text}</span>}
                </label>
                <div className="ml-auto flex gap-5">
                    {
                        isEdit ? 
                        <>
                            <TailButton color="lime" caption="저장" onHandle={handleSave} />
                            <TailButton color="orange" caption="취소" onHandle={handleCancel} />
                        </> : 
                        <>
                            <TailButton color="lime" caption="수정" onHandle={() => setIsEdit(true)} />
                            <TailButton color="orange" caption="삭제" onHandle={handleDelete} />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
