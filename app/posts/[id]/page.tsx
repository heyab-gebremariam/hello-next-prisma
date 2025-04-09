import { prisma } from "@/lib/db"

const PostPage = async ({params}) => {
    const post = await prisma.post.findUnique({
        where: {
            id: params.id
        }
    })

    return (
        <div>
            <h1>{post?.title}</h1>
        </div>
    )
}

export default PostPage
