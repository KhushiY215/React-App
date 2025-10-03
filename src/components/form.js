import * as React from "react";

export default function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome Back! Please enter your details.
      </p>
      <div className="mt-8">
        <div className="text-lg font-medium ">
          <label>Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="text-lg font-medium ">
          <label>Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
          ></input>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="Remember"></input>
            <label className="ml-2 font-medium text-base" for="Remember">
              {" "}
              Remember for 30 days
            </label>
          </div>
          <button className="font-medium text-base text-violet-500">
            Forgot Password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Sign in</button>
          <button className="flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all ">
            <svg
              className="w-6 h-6 inline-block mr-2"
              viewBox="0 0 533.5 544.3"
            >
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-17.8-1.5-35-4.3-51.7H272v97.9h146.9c-6.4 34.6-25.8 63.9-54.9 83.6v69.2h88.6c51.8-47.7 81.9-118.1 81.9-199z"
              />
              <path
                fill="#34A853"
                d="M272 544.3c73.6 0 135.4-24.4 180.5-66.5l-88.6-69.2c-24.6 16.6-56.2 26.3-91.9 26.3-70.8 0-130.8-47.8-152.3-112.1H29.3v70.9C74.5 485 166 544.3 272 544.3z"
              />
              <path
                fill="#FBBC05"
                d="M119.7 320.8c-5.8-17.5-9.1-36.2-9.1-55.2s3.3-37.7 9.1-55.2V139.5H29.3c-18.5 36.7-29.3 77.9-29.3 120.1s10.8 83.4 29.3 120.1l90.4-58.9z"
              />
              <path
                fill="#EA4335"
                d="M272 107.7c38.8 0 73.7 13.3 101.2 39.4l75.9-75.9C407.5 24.9 345.7 0 272 0 166 0 74.5 59.3 29.3 139.5l90.4 70.8C141.2 155.5 201.2 107.7 272 107.7z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center"> 
            <p className="font-medium text-base">Don't have an account?</p>
            <button className="text-violet-500 text-base font-medium ml-2">Sign up</button>
        </div>
      </div>
    </div>
  );
}
