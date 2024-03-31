
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {

        const reqBody = await req.json();
        const prisma = new PrismaClient();

        let result = await prisma.Student.create({
            data: reqBody
        })

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}


//  postman data
//{
   // "id": 1,
   // "first_name": "Name1",
   // "last_name": "LName1",
   // "roll": "0103044",
   // "age": 24,
    //"grade": 3,
   // "courses": "Course1, Courese 2, Course 3"
//}