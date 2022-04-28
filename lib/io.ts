import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
export type field = Array<string>;
export type RawFile={data:string,content:string}
type postsData = {
    'title'?: string,
    'author'?: string,
    'description'?: string,
    'content'?: string,
}
const postsDirectory = join(process.cwd(), '_posts')

export function getRawFileByPath(fileName = 'helloworld') {
    const fullPath = join(postsDirectory, `${fileName}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
        data,
        content
    }
}