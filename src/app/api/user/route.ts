import Role from "@/models/Role";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest) {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Role,
                    as: "Role"
                }
            ]
        })
        return Response.json(users, {status: 200});
    } catch (error) {
        return Response.json([], {status: 500});
    }
}