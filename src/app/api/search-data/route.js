import { supabase } from 'src/lib/supabase-client';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * @param {Request} req
 */
export async function GET(req) {
    const { data, error } = await supabase
        .storage
        .from('logs')
        .list(null, {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
            search: `${req.nextUrl.searchParams.get('pc_name')}`
        })

    if (data.length == 0) {
        return NextResponse.json(false, {
            status: 404
        });
    } else {
        return NextResponse.json({
            title: data[0].name,
            description: `${data[0].updated_at}`,
        }, {
            status: 200
        });
    }
}