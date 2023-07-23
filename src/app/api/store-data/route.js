//create a api to access supabase database
import { supabase } from 'src/lib/supabase-client';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

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

    if (data.length !== 0) {
        const signedUrl = await supabase.storage
            .from('logs')
            .createSignedUrl(data[0].name, 60)

        const file = await fetch(signedUrl.data.signedUrl);
        const text = await file.text();

        const newCh = text + ch;

        const { data: h, error } = await supabase.storage
            .from('logs')
            .upload(`${pc_name}.txt`, newCh, {
                cacheControl: '3600',
                upsert: true
            })

        if (error) {
            return NextResponse.json(error.message, {
                status: 500
            });
        } else {
            return NextResponse.json("Success", {
                status: 200
            });
        }
    } else {
        const { data: h, error } = await supabase.storage
            .from('logs')
            .upload(`${pc_name}.txt`, ch, {
                cacheControl: '3600',
                upsert: true
            })

        if (error) {
            return NextResponse.json(error.message, {
                status: 500
            });
        } else {
            return NextResponse.json("Success", {
                status: 200
            });
        }
    }
}