import Layout from "../components/layout";
import Head from "next/head";
import useTranslation from 'next-translate/useTranslation';
export default function Index(){
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Head>
        <title>{t('title-index')}</title>
      </Head>
    </Layout>
  )
}