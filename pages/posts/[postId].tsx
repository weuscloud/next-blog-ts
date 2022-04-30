import { useRouter } from "next/router"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { GetStaticProps, NextPage } from "next"
import { getRawFileByPath } from "../../lib/io"
import MarkDown from "../../components/markdown"
import Footer from "../../components/mdnav"
type Post = {
  title: string,
  content: string
}
const Post: NextPage<Post> = ({ title, content }: Post) => {
  const router = useRouter()

  return (
    <Layout >
      <Container>
        <div className=" flex max-w-screen-xl mx-auto md:py-6">
          <div className='flex-4 overflow-x-hidden'>
            <MarkDown >
              {content}
            </MarkDown>
          </div>
          <div className='flex-1 hidden md:block px-6 md:rounded-md'> <Footer></Footer></div>
        </div>
      </Container>
    </Layout>
  )
}
export default Post
//can get router path here
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { data, content } = await getRawFileByPath(String(params?.postId))

  const post: Post = {
    content,
    title: 'title'
  }
  return {
    props: post
  }
}
/**
 * all router possibly are included.
 * any other path will be back to 404
 * 
 * @returns 
 */

export async function getStaticPaths() {
  const data = { postId: 'helloworld' }
  const posts = [
    data
  ]

  return {
    paths: posts.map((post) => {
      return {
        params: {
          postId: post.postId,
        },
      }
    }),
    fallback: false,
  }
}