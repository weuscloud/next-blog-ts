import Editor from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useEffect, useState } from "react";
import sanitizeHtml from 'sanitize-html';
import { useRouter } from "next/router";
import styles from './MarkdownEditor.module.css';
type editorProps={
    previewOnly?: boolean|undefined,
    htmlPreview?:boolean|undefined,
}
const key = `<table><thead><tr><th>键位</th><th>功能</th><th>说明</th></tr></thead><tbody><tr><td>TAB</td><td>空格</td><td>通过<code>tabWidth</code>属性预设 TAB 键位新增空格长度，默认 2，支持多行</td></tr><tr><td>SHIFT + TAB</td><td>取消空格</td><td>同上，一次取消两个空格，支持多行</td></tr><tr><td>CTRL + C</td><td>复制</td><td>选中时复制选中内容，未选中时复制当前行内容</td></tr><tr><td>CTRL + X</td><td>剪切</td><td>选中时剪切选中内容，未选中时剪切当前行</td></tr><tr><td>CTRL + D</td><td>删除</td><td>选中时删除选中内容，未选中时删除当前行</td></tr><tr><td>CTRL + S</td><td>保存</td><td>触发编辑器的<code>onSave</code>回调</td></tr><tr><td>CTRL + B</td><td>加粗</td><td><code>**加粗**</code></td></tr><tr><td>CTRL + U</td><td>下划线</td><td><code>&lt;u&gt;下划线&lt;/u&gt;</code></td></tr><tr><td>CTRL + I</td><td>斜体</td><td><code>*斜体*</code></td></tr><tr><td>CTRL + 1-6</td><td>1-6 级标题</td><td><code># 标题</code></td></tr><tr><td>CTRL + ↑</td><td>上角标</td><td><code>&lt;sup&gt;上角标&lt;/sup&gt;</code></td></tr><tr><td>CTRL + ↓</td><td>下角标</td><td><code>&lt;sub&gt;下角标&lt;/sub&gt;</code></td></tr><tr><td>CTRL + Q</td><td>引用</td><td><code>&gt; 引用</code></td></tr><tr><td>CTRL + O</td><td>有序列表</td><td><code>1. 有序列表</code></td></tr><tr><td>CTRL + L</td><td>链接</td><td><code>[链接](https://imbf.cc)</code></td></tr><tr><td>CTRL + Z</td><td>撤回</td><td>触发编辑器内内容撤回，与系统无关</td></tr><tr><td>CTRL + SHIFT + S</td><td>删除线</td><td><code>~删除线~</code></td></tr><tr><td>CTRL + SHIFT + U</td><td>无序列表</td><td><code>- 无序列表</code></td></tr><tr><td>CTRL + SHIFT + C</td><td>块级代码</td><td>多行代码块</td></tr><tr><td>CTRL + SHIFT + I</td><td>图片链接</td><td><code>![图片](https://imbf.cc)</code></td></tr><tr><td>CTRL + SHIFT + Z</td><td>前进一步</td><td>触发编辑器内内容前进，与系统无关</td></tr><tr><td>CTRL + SHIFT + F</td><td>美化内容</td><td></td></tr><tr><td>CTRL + ALT + C</td><td>行内代码</td><td>行内代码块</td></tr><tr><td>CTRL + SHIFT + ALT + T</td><td>表格</td><td><code>|表格|</code></td></tr></tbody></table>`
export default function MarkdownEditor({previewOnly,htmlPreview}:editorProps) {
    const router = useRouter()
    const [text, setText] = useState(key);

    return (
        < Editor
        previewTheme="github"
        style={{'height':'84vh'}}
        language={router.locale}
        sanitize={(html) => sanitizeHtml(html)}
        modelValue={text}
        previewOnly={previewOnly}
        onChange={(modelValue) => {
            setText(modelValue);
        }}
    />
    )
}
