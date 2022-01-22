import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import SignUp from '@/components/SignUp'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <Layout>
            <section className="border-b-2 border-gray-300">
                <h1 className="text-center text-8xl font-semibold">Netlipress</h1>
                <h2 className="text-center text-5xl font-light">Wordpress on Netlify</h2>
                <p>
                    Build websites using Wordpress and host on your Netlify account. Sign up today
                    to be notified on launch for a free website.
                </p>
                <SignUp />
            </section>
            <section>
                <h2 className="text-center text-5xl font-thin">
                    The best of Wordpress.
                    <br />
                    The best of Netlify.
                </h2>
                <p>
                    Use everything you love about Wordpress, and host it statically on Netlify -
                    worry free.
                </p>
                <div className="grid grid-cols-8 gap-5">
                    <Image
                        src="/#"
                        alt="Wordpress Logo"
                        width="200"
                        height="300"
                        className="col-span-3 bg-gray-100"
                    />
                    <Image
                        src="/#"
                        alt="Arrow"
                        width="200"
                        height="300"
                        className="col-span-2 bg-gray-300"
                    />
                    <Image
                        src="/#"
                        alt="Netlify Logo"
                        width="200"
                        height="300"
                        className="col-span-3 bg-gray-100"
                    />
                </div>
                <p>
                    We take care of giving you a Wordpress site to build you and your client sites.
                    All changes are built and updated to your Netlify site automatically.
                </p>
                <p>
                    Never think about Wordpress hosting again, and take full advantage of Netlify.
                </p>
                <p>Sign up below to get notified on launch, and get a free website.</p>
                <SignUp />
            </section>
        </Layout>
    )
}

export default Home
