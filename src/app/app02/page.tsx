
export default function App02Page() {
    return (
        <div className='w-full flex flex-col justify-start m-5 p-5'>
            <h1 className='text-4xl font-bold'>
                오늘의 맛집 추천
            </h1>
            <h1 className='m-5 ml-0'>
                여기에 오늘의 맛집 목록이 표시됩니다.
            </h1>
            <div className='border rounded-lg bg-gray-50'>
                <div className='text-2xl font-bold m-2 p-2'>
                    맛있는 파스타 집
                </div>
                <div className='m-2 p-2'>
                    방금 추천받은 따끈따끈한 맛집
                </div>
            </div>
        </div>
    )
}
