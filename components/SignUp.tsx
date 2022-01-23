const SignUp = () => {
    return (
        <form className="grid grid-cols-1 md:grid-cols-6 gap-5 max-w-lg mx-auto my-12">
            <input
                name="email"
                placeholder="you@example.com"
                className="col-span-1 md:col-span-4 bg-gray-100 border border-gray-400 hover:border-[#006278] p-3 rounded focus:outline-none focus:border-[#1C97B2] focus:ring-2 ring-[#1C97B2] text-lg antialiased"
            />
            <button
                type="submit"
                className="col-span-1 md:col-span-2 rounded bg-[#1C97B2] border border-[#006278] text-[#E5FAFF] text-lg tracking-wide hover:bg-[#006278] p-3"
            >
                Notify Me
            </button>
        </form>
    )
}

export default SignUp
