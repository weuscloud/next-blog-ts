import { useRouter } from "next/router"
import ErrorPage from 'next/error'
import Layout from "../../components/layout"
import Container from "../../components/container"
import Head from "next/head"
import { GetStaticProps, NextPage } from "next"
import { getRawFileByPath } from "../../lib/io"
import styles from '../../components/post.module.css'
import cn from "classnames";
import MarkDown from "../../components/markdown"
type Post={
  title:string,
  content:string
}
const Post:NextPage<Post>=({title,content}:Post)=> {
  const router = useRouter()
 
  return (
    <Layout >
      <Container>
      <>
            <article className="mb-32">
              <Head>
                <title>
                  {title} | Next.js Blog 
                </title>
                <meta property="og:image"  />
              </Head>
              <div className=" flex max-w-screen-xl mx-auto md:py-6">
        <div className={cn(styles.navBar, 'hidden md:block mr-2 ')}>11111111111111111111</div>
        <div className={cn(styles.contentBar, 'overflow-x-hidden')}>
        <MarkDown dark>
            {content}
          </MarkDown>
        </div>
      </div>
            </article>
          </>
      </Container>
    </Layout>
  )
}
export default Post
//can get router path here
export  const  getStaticProps:GetStaticProps=async({params})=> {
  
  const { data, content } = await getRawFileByPath(String(params?.postId))

const post:Post={
  content,
  title:'title'
}
  return {
    props:post
  }
}
/**
 * all router possibly are included.
 * any other path will be back to 404
 * 
 * @returns 
 */

export async function getStaticPaths() {
  const data={postId:'helloworld'}
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