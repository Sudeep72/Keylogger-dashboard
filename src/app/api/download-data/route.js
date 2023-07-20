import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

import axios from 'axios';

// export const runtime = 'edge';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY
);

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
            search: `${pc_name}.txt`
        })

    if (error) {
        return NextResponse.json(error.message, {
            status: 500
        });
    }

    if (data.length !== 0) {
        const file = await supabase.storage
            .from('logs')
            .createSignedUrl(data[0].name, 60)

        return NextResponse.json(file.data.signedUrl, {
            status: 200
        });
    } else {
        return NextResponse.json("No data found", {
            status: 404
        });
    }
}