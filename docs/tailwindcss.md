# TailWindCss

# 安装

```bash
yarn add tailwindcss@latest postcss@latest autoprefixer@latest --dev
```

# 配置

```bash
npx tailwindcss init -p
```

# 使用

打开 Next.js 默认为您生成的 ./styles/globals.css 文件 并使用 `@tailwind` 指令来包含 Tailwind的 `base`、 `components` 和 `utilities` 样式，来替换掉原来的文件内容。

```css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
/* tailwind.config.js*/
/*Resole:The `content` option in your Tailwind CSS configuration is missing or empty.*/
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
}

```


