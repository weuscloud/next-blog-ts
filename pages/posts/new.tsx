import Container from "../../components/container";
import Layout from "../../components/layout";
import MarkdownEditor from "../../components/MarkdownEditor";
PageNew.auth = true
export default function PageNew() {
    return (
        <Layout>
            <Container>
            <div className="py-8" >
            <MarkdownEditor />
            </div>
            </Container>
        </Layout>
    )
}