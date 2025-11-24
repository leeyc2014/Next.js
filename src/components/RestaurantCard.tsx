import type { Restaurant } from "@/types/restaurant"
import Image from "next/image"
import Link from "next/link"

interface RestaurantProps {
    restaurant : Restaurant
}

export default function RestaurantCard({ restaurant } : RestaurantProps) {
    return (
        <Link href={`/restaurant/${restaurant.UC_SEQ}`} className="border-2 border-gray-200 flex flex-col p-5 shadow-sm">
            {/* {restaurant.MAIN_IMG_THUMB && <img className="rounded-lg h-60 w-full" src={restaurant.MAIN_IMG_THUMB} alt={restaurant.TITLE} />} */}
            <div className="relative w-full h-48 bg-gray-200">
                {restaurant.MAIN_IMG_NORMAL ? (<Image src={restaurant.MAIN_IMG_NORMAL} alt={restaurant.TITLE} fill sizes="(max-width: 768px) 100vw, 50vw" style={{objectFit : 'cover'}} priority />) : (<div className="w-full flex justify-center items-center">이미지 없음</div>)}
            </div>
            <div className="flex flex-col justify-between p-5 mt-5">
                <p className="text-2xl font-bold pb-2">{restaurant.TITLE}</p>
                <p className="mb-2 font-bold tracking-tight text-gray-600 dark:text-white">{restaurant.GUGUN_NM}</p>
                <p className="flex flex-wrap gap-2">대표메뉴: {restaurant.RPRSNTV_MENU}</p>
            </div>
        </Link>
    )
}

//"https://www.visitbusan.net/uploadImgs/files/cntnts/20230613131233567_ttiel",
//"https://www.visitbusan.net/uploadImgs/files/cntnts/20230613131233567_thumbL",