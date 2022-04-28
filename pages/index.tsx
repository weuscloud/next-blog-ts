import Container from "../components/container";
import Layout from "../components/layout";
import MarkDown from "../components/markdown";
import Meta from "../components/meta";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Loading from "../components/loading";
import { getRawFileByPath } from '../lib/io';
import { RawFile } from "../lib/io";
import styles from '../components/index.module.css'
import cn from "classnames";
export default function IndexPage({ data, content }: RawFile) {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading text="loading." />
  }
  return <Layout>
    <Meta />
    <Container>
      <div className=" flex max-w-screen-xl mx-auto md:py-6">
        <div className={cn(styles.navBar, 'hidden md:block mr-2 ')}>11111111111111111111</div>
        <div className={cn(styles.contentBar, 'overflow-x-hidden')}>
        <MarkDown >
            {content}
          </MarkDown>
        </div>
      </div>

    </Container>
  </Layout>;
}
export const getStaticProps: GetStaticProps = async () => {
  const { data, content } = await getRawFileByPath()
  return {
    props: {
      data,
      content
    }
  }
}

