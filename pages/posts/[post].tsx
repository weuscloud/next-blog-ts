import styles from '../../components/index.module.css'
import { ComponentProps } from '../../lib/type'
import cn from 'classnames'
export default function Index({ children }: ComponentProps) {
    return (
        <div className=" flex max-w-screen-xl my-2 md:my-4 mx-auto">
            <div className={cn(styles.navBar,'hidden md:block mr-2 ')}>11111111111111111111</div>
            <div className={cn(styles.contentBar,'overflow-x-auto w-full')}>
                {children}
            </div>
        </div>
    )
}
