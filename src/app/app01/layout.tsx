import Link from "next/link";

export default function App01Layout({children,} : {children : React.ReactNode;}) {
    return (
        <div className="flex h-full">
            <aside className="w-65 bg-gray-200">
                <h1 className="text-2xl font-bold m-5 p-5 ml-0">맛집 카테고리</h1>
                <nav>
                    <ul className="m-5">
                        <li className="pb-2"><Link href="/app01/junggu" className="hover:text-blue-800">중구</Link></li>
                        <li className="pb-2">동구</li>
                        <li className="pb-2">서구</li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}