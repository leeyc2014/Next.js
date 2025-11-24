import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-red-500 p-5">맛집을 찾을 수 없습니다.</h2>
            <p className="p-5">맛집이 존재하지 않습니다.</p>
            <Link href="/restaurant" className="bg-red-500 hover:bg-red-700 rounded-sm font-bold text-white py-2 px-4">맛집</Link>
        </div>
    );
}