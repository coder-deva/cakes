import { useState } from "react";

const LoginSignupForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex flex-col md:flex-row">
        
        {/* Left side: Form */}
        <div className="p-8 w-full md:w-1/2 border-orange-500 border-2 rounded animate-blink-orange">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>

          <form className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            {isSignUp ? (
              <>
                <p className="text-gray-600">Already have an account?</p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-purple-600 hover:underline focus:outline-none"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <p className="text-gray-600">Don&#39;t have an account?</p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-purple-600 hover:underline focus:outline-none"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        {/* Gap between the form and the image */}
        <div className="hidden md:block w-12"></div>

        {/* Right side: Image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src="https://ik.imagekit.io/os5tqthul/Cakes/login%20logo.jpg?updatedAt=1727083394625"
            alt="Login Banner"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>

      {/* Tailwind Custom Styles */}
      <style >{`
        @keyframes blink-orange {
          0%, 100% {
            box-shadow: 0 0 10px rgba(249, 115, 22, 1);
          }
          50% {
            box-shadow: 0 0 10px rgba(249, 115, 22, 0);
          }
        }

        .animate-blink-orange {
          animation: blink-orange 1.5s infinite;
          border-color: rgba(249, 115, 22, 1) !important;
        }
      `}</style>
    </div>
  );
};

export default LoginSignupForm;
