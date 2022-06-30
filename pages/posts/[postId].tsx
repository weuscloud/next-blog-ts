import { useRouter } from "next/router"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { GetStaticProps, NextPage } from "next"
import { getAllPosts, getRawFileByPath, PostData } from "../../lib/io"
import MarkDown from "../../components/markdown"
import Footer from "../../components/mdnav"
import Meta from "../../components/meta"

const Post: NextPage<PostData> = ({ title, content }: PostData) => {
  const router = useRouter()

  return (
    <Layout >
      <Meta titleTKey=""/>
      <Container>
        <div className=" flex max-w-screen-xl mx-auto md:py-6">
          <div className='flex-4 overflow-x-hidden'>
            <MarkDown >
              {content}
            </MarkDown>
          </div>
          <div className='flex-1 hidden md:block px-6'> <Footer></Footer></div>
        </div>
      </Container>
    </Layout>
  )
}

export default Post

//can get router path here
export const getStaticProps: GetStaticProps = async ({ params }) => {
console.log(params)
  const { data, content } = await getRawFileByPath(String(params?.postId))

  const post: PostData = {
    content,
    title: 'title',
    author:'official'
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
  const data = getAllPosts(['slug'])


  return {
    paths: data.map((post) => {
      //return params of each page
      return {
        params: {
          postId: post.slug,
        },
      }
    }),
    fallback: false,
  }
}