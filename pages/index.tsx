import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import SignUp from '@/components/SignUp'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <Layout>
            <section className="border-b-2 border-gray-300">
                <div className="flex justify-center pb-6">
                    <small className="bg-orange-400 text-orange-900 rounded-full px-3 py-1 inline-block mx-auto">
                        Coming Soon!
                    </small>
                </div>
                <h1 className="text-center text-7xl lg:text-8xl font-semibold mb-4">Netlipress</h1>
                <h2 className="text-center text-4xl lg:text-5xl font-light text-[#1C97B2]">
                    Wordpress on Netlify
                </h2>
                <p>
                    Build websites using Wordpress and host on your Netlify account. Sign up today
                    to be notified on launch for a{' '}
                    <span className="relative">
                        <span className="relative z-20 font-medium">free website.</span>
                        <div className="w-full h-3 w-full z-10 bg-[#AEF0EC] absolute bottom-0 right-0 -mr-px"></div>
                    </span>
                </p>
                <SignUp />
            </section>
            <section>
                <h2 className="text-center text-5xl leading-tight font-semibold">
                    The best of Wordpress.
                    <br />
                    The best of Netlify.
                </h2>
                <p>
                    Use everything you love about Wordpress, and host it statically on Netlify -
                    worry free.
                </p>
                <img
                    src="/Wordpress-to-Netlify.png"
                    alt="Wordpress to Netlify simple flow illustration"
                    className="py-14 px-0 lg:px-12"
                />
                <p>
                    We take care of giving you a Wordpress site to build you and your client sites.
                    All changes are built and updated to your Netlify site automatically.
                </p>
                <p>
                    Never think about Wordpress hosting again, and take full advantage of Netlify.
                </p>
                <p>
                    Sign up below to get notified on launch, and get a{' '}
                    <span className="relative">
                        <span className="relative z-20 font-medium">free website.</span>
                        <div className="w-full h-3 w-full z-10 bg-[#AEF0EC] absolute bottom-0 right-0 -mr-px"></div>
                    </span>
                </p>
                <SignUp />
            </section>
        </Layout>
    )
}

export default Home
