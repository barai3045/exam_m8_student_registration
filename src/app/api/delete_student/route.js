import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {

      const {searchParams} = new URL(req.url)

      const id = parseInt(searchParams.get('id'))
      
      const prisma = new PrismaClient();
      
      const result = await prisma.Student.delete({
      
            where:{id:id}
      })
        
        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}

/* 

POST:  http://localhost:3000/api/delete_student?id=3

Postman body 



Postman status:

{
    "status": "success",
    "data": {
        "id": 3,
        "first_name": "Name3",
        "last_name": "LName3",
        "roll": "100003",
        "age": 22,
        "grade": 4,
        "courses": "Course1, Courese 2, Course 3"
    }
}
*/