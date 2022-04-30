import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export type PostData = {
    title: string,
    content: string,
    brief?:string,
    author:string
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