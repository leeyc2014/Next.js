"use server";

import { supabase } from "@/supabase/client";
import { Restaurant } from "@/types/restaurant";

export async function fetchRestaurants(page: number) {
    const limit = 6;
    const offset = (page - 1) * limit;

    const { data, error, count } = await supabase
        .from("restaurants")
        .select("*", { count: "exact" })
        .order('UC_SEQ', { ascending: true })
        .range(offset, offset + limit - 1);

    if (error) {
        console.error("Fetching 에러: ", error);
        return { data: [], currentPage: page, totalPages: 0, error: error.message };
    }

    const totalPages = Math.ceil(count! / limit);

    return {
        data,
        currentPage: page,
        totalPages,
    };
}