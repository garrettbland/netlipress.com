import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <main className="max-w-4xl mx-auto">{children}</main>
        </>
    )
}

export default Layout
