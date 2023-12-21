import { NextResponse } from "next/server";

export async function POST (request:Request) {
  const formData = await request.json()
 console.log(formData)


 return NextResponse.json("data de reciida bien")


}
