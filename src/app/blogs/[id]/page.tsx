import BlogDetailsHome from "@/src/components/blogs/blog-details";

interface Param {
  id: string;
}

async function extractBlogDetails(id: string) {
  const res = await fetch(
    `${process.env.URL}/api/blog-post/details-post?blogID=${id}`,
    {
      method: "GET",
      next: {
        revalidate: 0
      }
    });

  const data = await res.json();

  if (data.success) {
    return data.data
  }}

export default async function BlogDetails({ params }: { params: any }) {
  const { id } = params;

  const blogData = await extractBlogDetails(id);

  return <BlogDetailsHome blogData={blogData} />;
}