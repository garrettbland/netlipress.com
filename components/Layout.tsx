import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <main className="max-w-4xl mx-auto px-5 lg:px-0">{children}</main>
        </>
    )
}

export default Layout
