import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {

      const {searchParams} = new URL(req.url) 
      const id = parseInt(searchParams.get('id')) 
      const reqBody = await req.json();

      const prisma = new PrismaClient();
  
      const result = await prisma.Student.update({
          where:{id:id},
          data:reqBody
      })

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}

/* 

Postman header

POST:  http://localhost:3000/api/update_student?id=2


Postman body 
{
  "first_name": "New Name2",
  "last_name": "new LName2",
    "roll": "100202",
  "age": 24,
  "grade": 4,
  "courses": "Course11, Courese 13, Course 14"
}


Postman status:

{
    "status": "success",
    "data": {
        "id": 2,
        "first_name": "New Name2",
        "last_name": "new LName2",
        "roll": "100202",
        "age": 24,
        "grade": 4,
        "courses": "Course11, Courese 13, Course 14"
    }
}
*/