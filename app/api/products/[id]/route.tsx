import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: {
        id: number,
        name: string,
        price: number
    }
}

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Milk', price: 2.5 },
        { id: 2, name: 'Bread', price: 3.5 },
    ])
}

export async function PUT(request: NextRequest,
    { params }: { params: { id: number } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    if (params.id > 10)
        return NextResponse.json({ error: 'product not found' }, { status: 404 });

    return NextResponse.json({ id: 10, name: body.name, price: body.price }, { status: 201 });
}
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    if (params.id > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    return NextResponse.json({});


}