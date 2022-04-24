import { ComponentProps } from "../lib/type"
export default function Container({ children }:ComponentProps) {
    return <div className="container mx-auto px-5">{children}</div>
}
