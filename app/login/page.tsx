"use client";

import { useState } from "react";
import {
  User,
  Lock,
  LogIn,
  UserPlus,
  Mail,
  Eye,
  EyeOff,
  Leaf,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const handleLogin = () => {
    // Add authentication here
    router.push("/dashboard");
  };

  const handleSignup = () => {
    // Add signup logic here
  };

  return (
    <div className="min-h-screen bg-slate-950 relative flex items-center justify-center overflow-x-hidden px-3 sm:px-4 py-6">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute top-[-80px] left-[-80px] w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] bg-green-500/15 rounded-full blur-[100px] animate-pulse" />

      <div className="absolute bottom-[-80px] right-[-80px] w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] bg-blue-600/15 rounded-full blur-[100px] animate-pulse" />


      {/* ================= MAIN CARD ================= */}

      <div
        className="
          relative
          w-full
          max-w-4xl
          min-h-[620px]
          md:h-[560px]
          bg-white
          rounded-2xl
          sm:rounded-[32px]
          shadow-[0_25px_70px_rgba(0,0,0,0.45)]
          overflow-hidden
        "
      >


        {/* =====================================================
            DESKTOP FORMS
        ===================================================== */}

        <div className="absolute inset-0 hidden md:flex">


          {/* ================= LOGIN FORM ================= */}

          <div
            className={`w-1/2 flex items-center justify-center p-8 transition-all duration-700 ${
              isSignup
                ? "-translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >

            <div className="w-full max-w-sm">

              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Login
              </h2>

              <p className="text-slate-500 text-sm mb-6">
                Access your eKilimo dashboard
              </p>


              <div className="space-y-4">

                {/* Username */}

                <div className="relative">

                  <User
                    size={18}
                    className="absolute top-3.5 left-4 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Username"
                    className="
                      w-full
                      py-3
                      pl-11
                      pr-4
                      border
                      border-slate-200
                      rounded-xl
                      outline-none
                      focus:ring-2
                      focus:ring-green-600
                      focus:border-transparent
                    "
                  />

                </div>


                {/* Password */}

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute top-3.5 left-4 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="
                      w-full
                      py-3
                      pl-11
                      pr-12
                      border
                      border-slate-200
                      rounded-xl
                      outline-none
                      focus:ring-2
                      focus:ring-green-600
                      focus:border-transparent
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute top-3.5 right-4 text-slate-400 hover:text-green-700"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>


                {/* Remember / Forgot */}

                <div className="flex justify-between items-center text-xs text-slate-500 gap-3">

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="checkbox"
                      className="accent-green-700"
                    />

                    Remember me

                  </label>


                  <button
                    type="button"
                    className="text-green-700 hover:text-green-800"
                  >
                    Forgot Password?
                  </button>

                </div>


                {/* Login Button */}

                <button
                  onClick={handleLogin}
                  className="
                    w-full
                    bg-green-700
                    hover:bg-green-800
                    text-white
                    rounded-xl
                    py-3
                    flex
                    justify-center
                    items-center
                    gap-2
                    transition
                  "
                >

                  <LogIn size={18} />

                  Login

                </button>

              </div>

            </div>

          </div>



          {/* ================= SIGN UP FORM ================= */}

          <div
            className={`w-1/2 flex items-center justify-center p-8 transition-all duration-700 ${
              isSignup
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >

            <div className="w-full max-w-sm">

              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Sign Up
              </h2>

              <p className="text-slate-500 text-sm mb-6">
                Create your eKilimo account
              </p>


              <div className="space-y-4">


                {/* Full Name */}

                <div className="relative">

                  <User
                    size={18}
                    className="absolute top-3.5 left-4 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      w-full
                      py-3
                      pl-11
                      pr-4
                      border
                      border-slate-200
                      rounded-xl
                      outline-none
                      focus:ring-2
                      focus:ring-green-600
                      focus:border-transparent
                    "
                  />

                </div>


                {/* Email */}

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute top-3.5 left-4 text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      w-full
                      py-3
                      pl-11
                      pr-4
                      border
                      border-slate-200
                      rounded-xl
                      outline-none
                      focus:ring-2
                      focus:ring-green-600
                      focus:border-transparent
                    "
                  />

                </div>


                {/* Password */}

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute top-3.5 left-4 text-slate-400"
                  />

                  <input
                    type={
                      showSignupPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Password"
                    className="
                      w-full
                      py-3
                      pl-11
                      pr-12
                      border
                      border-slate-200
                      rounded-xl
                      outline-none
                      focus:ring-2
                      focus:ring-green-600
                      focus:border-transparent
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowSignupPassword(
                        !showSignupPassword
                      )
                    }
                    className="absolute top-3.5 right-4 text-slate-400 hover:text-green-700"
                  >
                    {showSignupPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>


                {/* Create Account */}

                <button
                  onClick={handleSignup}
                  className="
                    w-full
                    bg-green-700
                    hover:bg-green-800
                    text-white
                    rounded-xl
                    py-3
                    flex
                    justify-center
                    items-center
                    gap-2
                    transition
                  "
                >

                  <UserPlus size={18} />

                  Create Account

                </button>

              </div>

            </div>

          </div>

        </div>



        {/* =====================================================
            MOBILE LAYOUT
        ===================================================== */}

        <div className="md:hidden min-h-[620px] flex flex-col">


          {/* ================= MOBILE HEADER ================= */}

          <div className="
            bg-gradient-to-br
            from-green-700
            via-green-800
            to-emerald-950
            text-white
            px-5
            py-8
            text-center
          ">

            <Leaf
              size={42}
              className="mx-auto mb-3"
            />

            <h1 className="text-2xl font-bold mb-2">
              {isSignup
                ? "Create your eKilimo Account"
                : "Welcome to eKilimo"}
            </h1>

            <p className="text-sm text-green-100 max-w-sm mx-auto leading-relaxed">

              {isSignup
                ? "Create your account and start using eKilimo."
                : "Access your account and continue to your dashboard."}

            </p>

          </div>



          {/* ================= MOBILE FORM ================= */}

          <div className="flex-1 px-5 sm:px-8 py-7">


            {/* ================= MOBILE LOGIN ================= */}

            {!isSignup && (

              <div className="w-full">

                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Login
                </h2>

                <p className="text-slate-500 text-sm mb-6">
                  Access your eKilimo dashboard
                </p>


                <div className="space-y-4">


                  {/* Username */}

                  <div className="relative">

                    <User
                      size={18}
                      className="absolute top-3.5 left-4 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="Username"
                      className="
                        w-full
                        py-3
                        pl-11
                        pr-4
                        border
                        border-slate-200
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-green-600
                        focus:border-transparent
                      "
                    />

                  </div>


                  {/* Password */}

                  <div className="relative">

                    <Lock
                      size={18}
                      className="absolute top-3.5 left-4 text-slate-400"
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Password"
                      className="
                        w-full
                        py-3
                        pl-11
                        pr-12
                        border
                        border-slate-200
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-green-600
                        focus:border-transparent
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute top-3.5 right-4 text-slate-400"
                    >

                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}

                    </button>

                  </div>


                  {/* Remember */}

                  <div className="
                    flex
                    flex-wrap
                    justify-between
                    items-center
                    gap-3
                    text-xs
                    text-slate-500
                  ">

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="accent-green-700"
                      />

                      Remember me

                    </label>


                    <button
                      type="button"
                      className="text-green-700"
                    >
                      Forgot Password?
                    </button>

                  </div>


                  {/* Login */}

                  <button
                    onClick={handleLogin}
                    className="
                      w-full
                      bg-green-700
                      hover:bg-green-800
                      text-white
                      rounded-xl
                      py-3.5
                      flex
                      justify-center
                      items-center
                      gap-2
                      transition
                    "
                  >

                    <LogIn size={18} />

                    Login

                  </button>

                </div>


                {/* Switch */}

                <div className="text-center mt-6 text-sm text-slate-500">

                 Don&apos;t have an account?

                  <button
                    type="button"
                    onClick={() => setIsSignup(true)}
                    className="
                      ml-1
                      text-green-700
                      font-semibold
                      hover:underline
                    "
                  >
                    Sign Up
                  </button>

                </div>

              </div>

            )}



            {/* ================= MOBILE SIGNUP ================= */}

            {isSignup && (

              <div className="w-full">

                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Sign Up
                </h2>

                <p className="text-slate-500 text-sm mb-6">
                  Create your eKilimo account
                </p>


                <div className="space-y-4">


                  {/* Full Name */}

                  <div className="relative">

                    <User
                      size={18}
                      className="absolute top-3.5 left-4 text-slate-400"
                    />

                    <input
                      type="text"
                      placeholder="Full Name"
                      className="
                        w-full
                        py-3
                        pl-11
                        pr-4
                        border
                        border-slate-200
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-green-600
                        focus:border-transparent
                      "
                    />

                  </div>


                  {/* Email */}

                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute top-3.5 left-4 text-slate-400"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="
                        w-full
                        py-3
                        pl-11
                        pr-4
                        border
                        border-slate-200
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-green-600
                        focus:border-transparent
                      "
                    />

                  </div>


                  {/* Password */}

                  <div className="relative">

                    <Lock
                      size={18}
                      className="absolute top-3.5 left-4 text-slate-400"
                    />

                    <input
                      type={
                        showSignupPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Password"
                      className="
                        w-full
                        py-3
                        pl-11
                        pr-12
                        border
                        border-slate-200
                        rounded-xl
                        outline-none
                        focus:ring-2
                        focus:ring-green-600
                        focus:border-transparent
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowSignupPassword(
                          !showSignupPassword
                        )
                      }
                      className="absolute top-3.5 right-4 text-slate-400"
                    >

                      {showSignupPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}

                    </button>

                  </div>


                  {/* Create Account */}

                  <button
                    onClick={handleSignup}
                    className="
                      w-full
                      bg-green-700
                      hover:bg-green-800
                      text-white
                      rounded-xl
                      py-3.5
                      flex
                      justify-center
                      items-center
                      gap-2
                      transition
                    "
                  >

                    <UserPlus size={18} />

                    Create Account

                  </button>

                </div>


                {/* Switch */}

                <div className="text-center mt-6 text-sm text-slate-500">

                  Already have an account?

                  <button
                    type="button"
                    onClick={() => setIsSignup(false)}
                    className="
                      ml-1
                      text-green-700
                      font-semibold
                      hover:underline
                    "
                  >
                    Login
                  </button>

                </div>

              </div>

            )}

          </div>

        </div>



        {/* =====================================================
            DESKTOP SLIDING GREEN PANEL
        ===================================================== */}

        <div
          className={`
            hidden
            md:flex
            absolute
            top-0
            h-full
            w-1/2
            bg-gradient-to-br
            from-green-700
            via-green-800
            to-emerald-950
            text-white
            transition-all
            duration-700
            flex-col
            justify-center
            items-center
            px-8
            ${isSignup ? "left-0" : "left-1/2"}
          `}
        >

          <Leaf
            size={55}
            className="mb-5"
          />


          <h1 className="text-3xl font-bold mb-4 text-center">

            {isSignup
              ? "Login to eKilimo"
              : "Welcome to eKilimo"}

          </h1>


          <p className="text-sm text-green-100 text-center max-w-[250px] mb-8">

            {isSignup
              ? "Access your account and continue to your dashboard."
              : "Create your account and start using eKilimo."}

          </p>


          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="
              border
              border-white
              px-8
              py-3
              rounded-xl
              hover:bg-white
              hover:text-green-800
              transition
            "
          >

            {isSignup
              ? "Login"
              : "Sign Up"}

          </button>

        </div>

      </div>

    </div>
  );
}