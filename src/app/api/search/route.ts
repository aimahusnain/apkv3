export const dynamic = 'force-dynamic'

import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url)
    const getQuery = searchParams.get('query')

    const getPostsFromQuery = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: getQuery ? {
              contains: getQuery,
              mode: "insensitive",
            } : undefined,
          },
        ]
      }
    })

    if (getPostsFromQuery) {
      return NextResponse.json({
        success: true,
        data: getPostsFromQuery
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to search posts!'
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      success: false,
      message: 'Something went wrong, please try again!'
    })
  }
}