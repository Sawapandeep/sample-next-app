//? GET - getting data
//? POST - creating datal
//? PUT — updating data

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {   //! if we remove "request :NextRequest()" nextjs caches the data and cahed data on ai not good
    const users = await prisma.user.findMany()
    return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)   //?validation
        return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    });
    if (user)
        return NextResponse.json({ error: 'User already exists' }, { status: 404 })
    const newuser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(newuser, { status: 201 });
} 