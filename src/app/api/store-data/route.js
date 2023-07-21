//create a api to access supabase database
import { supabase } from 'src/lib/supabase-client';
import { NextResponse } from 'next/server';
import axios from 'axios';

export const runtime = 'nodejs';

/**
 * @param {Request} req
 */
export async function GET(req) {
    const pc_name = (req.nextUrl.searchParams.get('pc_name')).split("=");
    const ch = (req.nextUrl.searchParams.get('ch')).split("=");

    const { data, error } = await supabase
        .storage
        .from('logs')
        .list(null, {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
            search: `${pc_name}.txt`
        })

    

    if (error) {
        return NextResponse.json(error.message, {
            status: 500
        });
    }

    const file = await axios.get(data[0].url);

    return NextResponse.json(`${file}`, {
        status: 200
    });
}