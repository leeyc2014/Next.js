'use client'
import TailButton from "@/components/TailButton";
import { useRef } from "react";
import type { todoDataType } from "./todo";

interface TodoInputProps {
    list: todoDataType[],
    setList: (newItem: todoDataType[]) => void
}

export default function TodoInput({ list, setList }: TodoInputProps) {
    // const setTodos = useSetAtom(todosAtom);
    const inRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inRef.current?.value == "") {
            alert("할일을 입력하세요")
            inRef.current?.focus();
            return;
        }
        const newList : todoDataType = {
            id: Date.now(), text: inRef.current?.value, completed: false
        }
        setList([newList, ...list]);
        if (inRef.current) {
            inRef.current.value = "";
            inRef.current?.focus();
        }
    };

    return (
        <div className="w-full h-3/5">
            <input type="text" name="txt1" ref={inRef} placeholder="새로운 할 일을 입력하세요" className="w-9/10 h-1/2 border border-gray-300 rounded-s bg-white text-start p-5" />
            <TailButton color="blue" caption="추가" onHandle={() => handleClick()} />
        </div>
    )
}
