export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-red-500 p-5">파일을 찾을 수 없습니다.</h2>
            <p>해당하는 파일이 존재하지 않습니다.</p>
        </div>
    );
}