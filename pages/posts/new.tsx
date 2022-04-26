import Container from "../../components/container";
import Layout from "../../components/layout";
import MarkdownEditor from "../../components/MarkdownEditor";
import Meta from "../../components/meta";

export default function PageNew() {
  return (
    <Layout>
      <Meta titleTKey="title-page-posts-new" />
      <Container>
        <div className="py-8">
          <MarkdownEditor />
        </div>
      </Container>
    </Layout>
  );
}
