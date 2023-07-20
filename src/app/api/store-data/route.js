//create a api to access supabase database
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY
);

/**
 * @param {Request} req
 */
export async function GET(req) {
    const pc_name = (req.nextUrl.searchParams.get('pc_name')).split("=");

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

    return NextResponse.json(data, {
        status: 200
    });
}