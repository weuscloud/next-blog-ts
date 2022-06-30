import Container from "../components/container";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { getAllPosts } from "../lib/io";
import { format } from 'date-fns'
export default function IndexPage({allPosts}) {
  return <Layout>
    <Meta />
    <Container>
    {allPosts.map((post) => (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2 md:my-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={post.coverImage} alt="Man looking at item at a store"/>
          </div>
          <div className="p-8">
            <a href={"/posts/"+post.slug} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post.title}</a>
            <p className="mt-2 text-slate-500">{post.excerpt}</p>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{format(new Date(post.date), 'yyyy/MM/dd')}</div>
          </div>
        </div>
      </div>
        ))}
      
    </Container>
  </Layout>;
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { allPosts },
  }
}
