import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { url } = request;

    if (!url) {
      return NextResponse.json({
        success: false,
        message: "Invalid request URL",
      });
    }

    const { searchParams } = new URL(url);
    const extractCategoryID = searchParams.get("categoryID");

    if (!extractCategoryID) {
      return NextResponse.json({
        success: false,
        message: "Missing category ID in the request URL",
      });
    }

    const getBlogPostListBasedOnCurrentCategoryID = await prisma.post.findMany({
      where: {
        category: extractCategoryID,
      },
    });

    if (getBlogPostListBasedOnCurrentCategoryID.length > 0) {
      return NextResponse.json({
        success: true,
        data: getBlogPostListBasedOnCurrentCategoryID,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No data found for the given category ID",
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
