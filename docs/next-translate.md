# 使用next-translate翻译next App

参考:

https://medium.com/flycode/step-by-step-how-to-internationalize-your-nextjs-app-with-next-translate-3c8b13b87fc4

# 安装

```bash
yarn add next-translate
```

# 配置

## 修改next.config.js

```javascript
const nextTranslate = require('next-translate');
module.exports = nextTranslate({
  reactStrictMode: true,
});
```

## 添加语言

新建i18n.js 在根目录

```javascript
module.exports = {
  locales: ['en', 'zh'], // Array with the languages that you want to use
  defaultLocale: 'en', // Default language of your website
  pages: {
    '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
  },
};
```

# 添加翻译文件

```bash
mkdir -p ./locales/{zh,en} && touch ./locales/{zh,en}/common.json
```

# 使用

例:

```js
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('metaTitle')}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>{t('description')}</p>
      </main>
    </div>
  );
}
```

# 如何切换语言?

```js
<Link 
href="/" 
locale="en">
<h2>Anglais</h2>
</Link>
```
