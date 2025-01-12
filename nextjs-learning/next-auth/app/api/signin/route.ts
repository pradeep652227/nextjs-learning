import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // assuming the user entered correct credentials
    const body = await req.json();

    const username = body.username;
    const password = body.password;
    // check in the db
    console.log('jwt secret',process.env.JWT_SECRET);
    const userId = 1;
    const token = jwt.sign({ userId }, String(process.env.JWT_SECRET), {
        expiresIn: '1h'
    });

    const response = NextResponse.json({ token }, { status: 200 });

    return response;
}