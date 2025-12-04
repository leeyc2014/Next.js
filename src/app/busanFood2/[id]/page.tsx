import restaurantData from "@/data/restaurant.json"
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Restaurant } from "@/types/restaurant";

interface RestaurantDetailProps {
    params: Promise<{ id: string; }>;
}

export async function generateStaticParams() {
    const restaurants: Restaurant[] = restaurantData;
    return restaurants.map((restaurant) => ({ id: String(restaurant.UC_SEQ), }));
}

export default async function RestaurantDetail({ params }: RestaurantDetailProps) {
    const { id } = await params;
    const restaurants: Restaurant[] = restaurantData;
    const restaurant = restaurants.find(item => item.UC_SEQ === Number(id));
    const description = restaurant?.ITEMCNTNTS?.replace(/\\n/g, '\n') || '상세 설명이 없습니다.';
    const usageTime = restaurant?.USAGE_DAY_WEEK_AND_TIME?.replace(/\\n/g, '\n') || '운영 시간 정보가 없습니다.';
    const homepage = restaurant?.HOMEPAGE_URL?.replace(' ', '');
    const kakaoMapUrl = `https://map.kakao.com/link/map/${restaurant?.PLACE.replace(',', '').replace(' ', '')},${restaurant?.LAT},${restaurant?.LNG}`;

    if (!restaurant) {
        notFound();
    }
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-7/10 h-screen flex flex-col shadow-sm mx-auto">
                <p className="text-4xl font-bold p-5">{restaurant?.TITLE}</p>
                <p className="pl-5 text-gray-800">{restaurant?.GUGUN_NM}</p>
                <div className="relative w-7/10 h-[500px] bg-gray-200 rounded-sm m-5">
                    {restaurant?.MAIN_IMG_NORMAL ? (<Image src={restaurant.MAIN_IMG_NORMAL} alt={restaurant.TITLE} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />) : (<div className="w-full flex justify-center items-center">이미지 없음</div>)}
                </div>
                <div className="w-full flex flex-row pb-10 border-b-2">
                    <div className="w-1/2">
                        <div className="flex flex-col mx-5 p-5 border-b-4 border-b-gray-400">
                            <p className="text-gray-500">주소</p>
                            <p>{restaurant?.ADDR1}</p>
                        </div>
                        <div className="flex flex-col mx-5 p-5 border-b-4 border-b-gray-400">
                            <p className="text-gray-500">대표 메뉴</p>
                            <p>{restaurant?.RPRSNTV_MENU}</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex flex-col mx-5 p-5 border-b-4 border-b-gray-400">
                            <p className="text-gray-500">연락처</p>
                            <p>{restaurant?.CNTCT_TEL}</p>
                        </div>
                        <div className="flex flex-col mx-5 p-5 border-b-4 border-b-gray-400">
                            <p className="text-gray-500">운영 시간</p>
                            <p>{usageTime}</p>
                        </div>
                    </div>
                </div>
                <h2 className="p-5 text-gray-500">관련 링크</h2>
                <div className="pl-5">
                    <a href={homepage} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white hover:bg-black rounded-sm p-2 mr-2">홈페이지</a>
                    <a href={kakaoMapUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-400 hover:bg-amber-600 rounded-sm p-2 ml-2">카카오맵으로 보기</a>
                </div>
                <h2 className="p-5 pt-10 text-gray-500">상세 설명</h2>
                <div className="pl-5">
                    {description}
                </div>
                <div className="flex justify-center m-5">
                    <Link href="/restaurant" className="w-20 bg-blue-500 hover:bg-blue-700 text-white rounded-sm p-2">목록으로</Link>
                </div>
            </div>
        </div>
    );
}