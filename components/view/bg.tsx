import { ComponentProps } from "../../lib/type";
export default function Background({ children }:ComponentProps){
    return (
        <div className="w-screen h-screen bg-gray-10 dark:bg-gray-1">{children}</div>
    )
}