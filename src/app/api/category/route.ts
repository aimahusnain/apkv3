import prisma from "@/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const extractCategoryID = req.query.categoryID as string | undefined;
    console.log('Category ID:', extractCategoryID);

    if (!extractCategoryID) {
      console.log('Missing category ID in the request query');
      return res.status(400).json({
        success: false,
        message: "Missing category ID in the request query",
      });
    }

    const getBlogPostListBasedOnCurrentCategoryID = await prisma.post.findMany({
      where: {
        category: extractCategoryID,
      },
    });

    if (getBlogPostListBasedOnCurrentCategoryID.length > 0) {
      console.log('Data fetched successfully:', getBlogPostListBasedOnCurrentCategoryID);
      return res.status(200).json({
        success: true,
        data: getBlogPostListBasedOnCurrentCategoryID,
      });
    } else {
      console.log('No data found for the given category ID');
      return res.status(404).json({
        success: false,
        message: "No data found for the given category ID",
      });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
