import BlogList from "@/components/blogs/blog-list";
import CategoryList from "@/components/category";

async function getAllListsByCategory(getId: string) {
  const res = await fetch(`${process.env.URL}/api/category?categoryId=${getId}`, {
    method: "GET",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;
  const getAllList = await getAllListsByCategory(id);

  return <BlogList lists={getAllList} />;
}