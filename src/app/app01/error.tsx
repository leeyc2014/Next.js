'use client';

export default function Error({ error, reset }: {error:Error, reset:() => void}) {
  return (
    <div className="p-5 m-5">
      <h2 className="text-2xl text-red-500 font-bold pb-5">에러 발생</h2>
      <p className="pb-5">{error.message}</p>
      <button className="bg-red-500 hover:bg-red-700 rounded-sm font-bold text-white py-2 px-4" onClick={() => {reset()}}>다시 시도</button>
    </div>
  );
}