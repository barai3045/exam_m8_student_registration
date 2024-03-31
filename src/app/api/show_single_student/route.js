import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {

      const {searchParams} = new URL(req.url) 
      const id = parseInt(searchParams.get('id')) 
      

      const prisma = new PrismaClient();
  
      const result = await prisma.Student.findMany({
          where:{id:id}
      })

        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}

/* 

Postman header

POST:  http://localhost:3000/api/show_single_student?id=1


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
        }
    ]
}
*/