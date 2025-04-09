import { prisma } from "@/lib/db";

const BlogsPage = async () => {
    const blogs = await prisma.blog.findMany();

    return (
        <div>
            <h1>Blogs</h1>
            { blogs.map((blog)=>(
                <li key={blog.id}>{blog.title}</li>
            ))}
        </div>
    )
}

export default BlogsPage
