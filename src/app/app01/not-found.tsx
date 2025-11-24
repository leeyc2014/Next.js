import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-red-500 p-5">파일을 찾을 수 없습니다.</h2>
            <p className="p-5">app01 폴더에는 해당 파일이 존재하지 않습니다.</p>
            <Link href="/app01" className="bg-red-500 hover:bg-red-700 rounded-sm font-bold text-white py-2 px-4">맛집</Link>
        </div>
    );
}