import Link from "next/link";

export default function App02Layout({children,} : {children : React.ReactNode;}) {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="bg-gray-200 flex justify-between items-center">
                <h1 className="text-2xl font-bold m-5 p-5 ml-0">맛집 카테고리</h1>
                <nav>
                    <ul className="m-5 flex">
                        <li className="pr-2"><Link href="/app02/junggu" className="hover:text-blue-800">중구</Link></li>
                        <li className="pr-2">동구</li>
                        <li className="pr-2">서구</li>
                    </ul>
                </nav>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}