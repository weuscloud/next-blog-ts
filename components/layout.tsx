import { ComponentProps } from "../lib/type"
import Container from "./container"
export default function Layout({ children }: ComponentProps) {
    return (
        <>
            <div className="min-h-screen">
            <main>{children}</main>
            </div>
        </>
    )
}
