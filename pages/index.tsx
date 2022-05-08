import Container from "../components/container";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { Counter } from "../components/counter/Counter";
export default function IndexPage() {
  return <Layout>
    <Meta />
    <Container>
      <Counter/>
    </Container>
  </Layout>;
}
