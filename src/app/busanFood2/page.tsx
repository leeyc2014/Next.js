'use client'
import { useState, useEffect, useRef } from "react";
import type { Restaurant } from "@/types/restaurant";
import RestaurantCard from "@/components/RestaurantCard";
import TailButton from "@/components/TailButton";
import { fetchRestaurants } from "./actions";

export default function BusanRestaurantPage() {
    const [tdata, setTdata] = useState<Restaurant[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const isMounted = useRef(false);

    const loadRestaurants = async (pageNum: number) => {
        if (loading && pageNum > 1) {
            return;
        }
        setLoading(true);

        const { data, currentPage, totalPages, error } = await fetchRestaurants(pageNum);

        if (error) {
            console.error("Failed to load restaurants", error);
            setLoading(false);
            return;
        }

        if (data.length > 0) {
            if (pageNum === 1) {
                setTdata(data);
            }
            else {
                setTdata((prev) => [...prev, ...data])
            }
        }

        if (currentPage >= totalPages) {
            setHasMore(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (isMounted.current || page === 1) {
            loadRestaurants(page)
        }
        if (!isMounted.current) {
            isMounted.current = true;
        }
    }, [page]);

    const handleLoadMore = () => {
        // 로딩 중이 아니고, 더 불러올 데이터가 있을 때만 페이지 번호를 증가
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold p-5">부산 맛집 목록</h2>
            <div className="mt-4 w-9/10 h-3/4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tdata.map((item: Restaurant) => (
                    <RestaurantCard key={item.UC_SEQ} restaurant={item} />
                ))}
            </div>

            {loading && (<div className="text-center my-4"><p>불러오는 중..</p></div>)}

            {hasMore && !loading && (
                <div className="text-center my-8"><TailButton color="blue" caption="더보기" onHandle={handleLoadMore} /></div>
            )}

            {!hasMore && (<div className="text-center my-8"><p>더 이상 맛집이 없습니다.</p></div>)}
        </div>
    );
}