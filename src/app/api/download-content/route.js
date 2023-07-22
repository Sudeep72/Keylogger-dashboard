import { supabase } from 'src/lib/supabase-client';
import { NextResponse } from 'next/server';

import axios from 'axios';

export const runtime = 'edge';

/**
 * 
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
            search: `${req.nextUrl.searchParams.get('pc_name')}`
        })

    if (error) {
        return NextResponse.json(error.message, {
            status: 500
        });
    }

    if (data.length !== 0) {
        const signedUrl = await supabase.storage
            .from('logs')
            .createSignedUrl(data[0].name, 10, {
                download: true
            })

        return NextResponse.json(signedUrl.data.signedUrl, {
            status: 200
        });
    } else {
        return NextResponse.json("No data found", {
            status: 404
        });
    }
}