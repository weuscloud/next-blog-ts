import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
export default function Meta({
  titleTKey = "common:title-index",
  descriptionTKey = "common:description",
  namespace = "common",
  keyWordsTKey = "common:keywords",
}: {
  titleTKey?: string;
  descriptionTKey?: string;
  namespace?: string;
  keyWordsTKey?: string;
}) {
  const { t } = useTranslation(namespace);
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{t(titleTKey)}</title>
      <meta name="description" content={t(descriptionTKey)}></meta>
      <meta name="keywords" content={t(keyWordsTKey)} />
    </Head>
  );
}
