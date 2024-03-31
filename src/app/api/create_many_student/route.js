import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {

        const reqBody = await req.json();
        const prisma = new PrismaClient();

        let result = await prisma.Student.createMany({
            data: reqBody
        })

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}

/* Postman body 
[{
  "first_name": "Name2",
  "last_name": "LName3",
    "roll": "100002",
  "age": 24,
  "grade": 4,
  "courses": "Course1, Courese 3, Course 4"
},
{
  "first_name": "Name3",
  "last_name": "LName3",
    "roll": "100003",
  "age": 22,
  "grade": 4,
  "courses": "Course1, Courese 2, Course 3"
},
{
  "first_name": "Name4",
  "last_name": "LName4",
    "roll": "100004",
  "age": 21,
  "grade": 4,
  "courses": "Course1, Courese 2, Course 3"
}


]


Postman status:

{
    "status": "success",
    "data": {
        "count": 3
    }
}
*/