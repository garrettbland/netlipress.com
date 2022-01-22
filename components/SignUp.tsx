const SignUp = () => {
    return (
        <form className="grid grid-cols-1 md:grid-cols-6 gap-5 max-w-lg mx-auto">
            <input
                name="email"
                placeholder="you@example.com"
                className="col-span-1 md:col-span-4 bg-gray-100"
            />
            <button type="submit" className="col-span-1 md:col-span-2 bg-gray-300">
                Submit
            </button>
        </form>
    )
}

export default SignUp
