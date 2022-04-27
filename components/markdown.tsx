import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { vscDarkPlus as themeDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
export default function MarkDown({markdown='',dark}:{markdown?:string,dark?:boolean}) {
    return (
        <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]} 
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            style={dark===true?themeDark:theme}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        >{String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        >{markdown}
        </ReactMarkdown>
    )
}