import { NextResponse } from 'next/server'
export function middleware(request) {
    return NextResponse.json({
        hello: 'Middleware '
    })
}