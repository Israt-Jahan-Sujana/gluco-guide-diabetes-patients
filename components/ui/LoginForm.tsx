import Icon from "../icons";

export default function LoginForm() {
  return (
    <div className="  w-[1020px] h-auto flex items-center bg-white rounded-xl">
      <div className="w-[510px] h-full rounded-l-xl border-solid">
        <form className="p-10">
          <div className="flex gap-2">
            <Icon className="w-8 h-8-ml-4" name="gluco-guide"></Icon>
            <h3 className="p-2 text-lg font-extrabold text-blue-700">
              Gluco Guide
            </h3>
          </div>
          <h1 className="pt-4 font-extrabold text-xl">
            Log in to your Account.
          </h1>
          <p className=" pt-2 text-sm ">
            Welcome back! Select method to log in:
          </p>
          <div className="flex mt-6 items-center justify-center gap-3 border-2 border-slate-300 rounded-lg p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>

            <a
              className="text-lg text-blue-800 font-bold "
              href="https://www.google.com"
            >
              Google
            </a>
          </div>

          <div className="mt-2 relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="text-xs flex-shrink mx-4 text-gray-400">
              or continue with email
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="border-2 border-slate-100 mt-2 flex   rounded-lg p-2 bg-slate-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="stroke-slate-400 pl-2 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input
              className=" border-none border-slate-300  text-sm bg-slate-100 w-96 pl-4 "
              type="email"
              name="email_address"
              placeholder=" Email"
            />
          </div>

          <div className="border-2 border-slate-100 mt-4 flex   rounded-lg p-2 bg-slate-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="stroke-slate-400 pl-2 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              className=" border-none border-slate-300  text-sm bg-slate-100 w-96 pl-4 "
              type="password"
              name="password"
              placeholder="Password"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="stroke-slate-400 mr-2 size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>

          <div className=" flex mt-4">
            <input className="h-3 pt-2 w-3" type="checkbox" />
            <label className="pl-3 text-xs  text-slate-500">Remember me</label>
            <a
              href="https://mail.google.com/mail"
              className="ml-40 pl-16 text-xs font-semibold text-blue-500"
            >
              Forgot Password?
            </a>
          </div>

          <div className=" flex mt-6 items-center justify-center  bg-blue-600 rounded-lg p-2">
            <a href="" className="text-sm text-white ">
              Log In
            </a>
          </div>

          <p className="mt-8 text-center text-xs">
            Don't have an account?{" "}
            <a className="text-blue-500 font-semibold pl-1" href="">
              Create an account
            </a>
          </p>
        </form>
      </div>
      <div className="w-[510px] h-full bg-blue-600 rounded-e-xl"></div>
    </div>
  );
}
