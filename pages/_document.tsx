import Document, { Html, Head, Main, NextScript } from 'next/document'

class NetlipressDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Outfit:wght@300;400;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-gray-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default NetlipressDocument
