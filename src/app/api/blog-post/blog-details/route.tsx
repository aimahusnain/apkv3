import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

interface CustomRequest extends NextRequest {
  query: {
    blogID?: string;
  };
}

export async function GET(req: CustomRequest) {
  try {
    const blogID = req.query.blogID;

    if (!blogID) {
      return NextResponse.json({
        success: false,
        message: "Invalid or missing blog ID",
      });
    }

    const blogDetails = await prisma.post.findUnique({
      where: {
        id: String(blogID),
      },
    });

    if (blogDetails) {
      return NextResponse.json({
        success: true,
        data: blogDetails,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch the blog details! Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
