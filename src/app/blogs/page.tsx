import BlogList from "@/components/blogs/blog-list";

async function extractAllBlogs() {
  if (process.env.NODE_ENV === 'production') {
    // Handle logic for static generation
    return [];
  }

  const res = await fetch(`/api/blog-post/get-all-post`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Blogs() {
  const blogPostsList = await extractAllBlogs();

  return <BlogList lists={blogPostsList} />;
}
