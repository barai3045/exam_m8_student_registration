import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {

      
      const prisma = new PrismaClient();
  
      const result = await prisma.Student.findMany();

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}

/* 

Postman header

POST:  http://localhost:3000/api/show_all_student


Postman body: None



Postman status:
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "first_name": "Name1",
            "last_name": "LName1",
            "roll": "0103044",
            "age": 24,
            "grade": 3,
            "courses": "Course1, Courese 2, Course 3"
        },
        {
            "id": 2,
            "first_name": "New Name2",
            "last_name": "new LName2",
            "roll": "100202",
            "age": 24,
            "grade": 4,
            "courses": "Course11, Courese 13, Course 14"
        },
        {
            "id": 4,
            "first_name": "Name4",
            "last_name": "LName4",
            "roll": "100004",
            "age": 21,
            "grade": 4,
            "courses": "Course1, Courese 2, Course 3"
        }
    ]
}
*/