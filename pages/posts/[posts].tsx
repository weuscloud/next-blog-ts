import Container from "../../components/container";
import Layout from "../../components/layout";
import Meta from "../../components/meta";
import type { GetStaticPaths } from "next";
export default function PageNew() {
  return (
    <Layout>
      <Meta titleTKey="title-page-posts-new" />
      <Container>
        <div className="py-8">
        
        </div>
      </Container>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/posts/helloworld"],
    fallback: false,
  };
};
