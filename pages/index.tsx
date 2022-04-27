import Container from "../components/container";
import Layout from "../components/layout";
import MarkDown from "../components/markdown";
import Meta from "../components/meta";
export default function Index() {
  return <Layout>
    <Meta />
    <Container>
    <MarkDown dark  markdown={`~~~ts\nfunction helloWorld(){console.log('hello world')}\n~~~`}></MarkDown>
    </Container>
  </Layout>;
}
