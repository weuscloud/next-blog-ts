import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import cn from 'classnames'
import styles from './markdown.module.css'
export default function MarkDown({ dark, children = "" }: { children?: string, dark?: boolean }) {
    return (
        <div className={cn("w-100 w-full",styles.markdown,dark ? styles.dark : styles.white)}>
            <ReactMarkdown
            
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={theme}
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
            >{children}
            </ReactMarkdown>
        </div>
    )
}