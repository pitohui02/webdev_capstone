export default function LoginPage() {
    return (
        <main className = "bg-loginBg bg-cover bg-center bg-no-repeat">
            <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
                <div className = "bg-white w-full max-w-md rounded-xl bg-opacity-100 shadow-lg shadow-black">
                <h1 className = "text-center text-black font-light text-4xl rounded-t-xl my-10 py-4 font-bold">
                    OnlyImages
                    </h1>
                <form className = "p-6 mt-10">
                    <label className="font-bold">Username</label>
                    <input type="text" name ="" placeholder = "Username" className = "rounded-full pl-4 py-2 px-3 bg-secondary w-full text-black text-lg font-light outline-none bg-opacity-20"/>
                    <label className="font-bold">Password</label>
                    <input type="password" name ="" placeholder = "Password" className = "rounded-full pl-4 py-2 px-3 bg-secondary w-full text-black text-lg font-light outline-none bg-opacity-20"/>
                    <label className ="flex items-center space-x-2 my-5 mb-20">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary"/>
                    <span className="text-black">Remember me</span>
                     </label>
                    <div className="flex flex-col items-center space-y-4">
                    <button type="submit" className="my-5 items-center rounded-lg bg-primary text-black font-medium py-2 px-8 transition hover:text-white font-bold">
                    Log in
                    </button>
                    <a href="" className="items-center text-black cursor-pointer transition hover:text-primary text-decoration-line: underline">
                    Forgot Password
                    </a>
                    <a href="" className="items-center text-primary cursor-pointer transition hover:text-black text-decoration-line: underline font-bold">
                    Create an Account
                    </a>
                    </div>
                </form>
                </div>
            </div>
        </main>
    );
}