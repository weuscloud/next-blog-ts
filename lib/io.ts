import fs from 'fs'
import { join } from 'path'
const postsDirectory = join(process.cwd(), '_posts')
//返回所有匹配的路由路径
export function getAllPosts(fields = []) {
    const posts = fs.readdirSync(postsDirectory)
    const posts = posts
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
