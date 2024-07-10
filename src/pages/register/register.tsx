export default function SignUpPage() {
    return (
        <main className = "bg-signupBg bg-cover bg-center bg-no-repeat">
            <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
                <div className = "bg-white w-full max-w-md rounded-xl bg-opacity-100 shadow-lg shadow-black">
                <h1 className = "text-center text-black font-light text-4xl rounded-t-xl my-10 py-4 font-bold">
                    OnlyImages
                    </h1>
                <form className = "p-6 mt-10">
                    <label className="font-bold">Username</label>
                    <input type="text" name ="" placeholder = "Username" className = "rounded-full pl-4 py-2 px-3 bg-secondary w-full text-black text-lg font-light outline-none bg-opacity-20"/>
                    <label className="font-bold">Email Address</label>
                    <input type="email" name ="" placeholder = "Username" className = "rounded-full pl-4 py-2 px-3 bg-secondary w-full text-black text-lg font-light outline-none bg-opacity-20"/>
                    <label className="font-bold">Password</label>
                    <input type="password" name ="" placeholder = "Password" className = "rounded-full pl-4 py-2 px-3 bg-secondary w-full text-black text-lg font-light outline-none bg-opacity-20"/>
                    <label className="font-bold">Confirm Password</label>
                    <input type="password" name ="" placeholder = "Confirm Password" className = "rounded-full pl-4 py-2 px-3 bg-secondary w-full text-black text-lg font-light outline-none bg-opacity-20"/>
                    <div className="flex justify-center mt-5">
                    <label className="flex space-x-1 my-5 mb-20 items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary"/>
                    <span className="text-black">I agree to the </span><span className="text-primary text-decoration-line: underline">Terms and Privacy Policy</span>
                    </label>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                    <button type="submit" className="my-5 items-center rounded-lg bg-primary text-black font-medium py-2 px-8 transition hover:text-white font-bold">
                    Sign Up
                    </button>
                    <a href="#" className="items-center text-black cursor-pointer transition hover:text-primary text-decoration-line: underline font-bold">
                    Log In
                    </a>
                    </div>
                </form>
                </div>
            </div>
        </main>
    );
}