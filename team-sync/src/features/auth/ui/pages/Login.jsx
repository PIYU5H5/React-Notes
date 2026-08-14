import { useState } from "react";
import { useForm } from "react-hook-form";
import { Cloud, Lock, Mail, LogIn, Network, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  let { register, onLoginSubmit, handleSubmit, errors, navigate } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121016] text-white">
      {/* ================= BACKGROUND ================= */}

      {/* Left glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#5f43a3]/10 blur-[150px]" />

      {/* Right glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#5f43a3]/10 blur-[150px]" />

      {/* ================= MAIN ================= */}

      <main className="relative flex min-h-screen items-center justify-center px-5 py-10">
        <div className="w-full max-w-[535px]">
          {/* ================= CARD ================= */}

          <div className="rounded-xl border border-[#302c34] bg-[#1b191e] px-8 py-10 shadow-2xl shadow-black/20 sm:px-10">
            {/* ================= LOGO ================= */}

            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#7153b5] shadow-lg shadow-purple-900/20">
                <Network size={34} strokeWidth={2} className="text-[#e5d8ff]" />
              </div>

              <h1 className="text-[28px] font-semibold tracking-tight">
                team-sync
              </h1>

              <p className="mt-1 text-[16px] text-[#c3bdc8]">
                Sign in to your workspace
              </p>
            </div>

            {/* ================= SOCIAL LOGIN ================= */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {/* Google */}
              <button
                type="button"
                className="flex h-[51px] items-center justify-center gap-3 rounded-lg border border-[#454149] bg-[#2a272d] text-sm font-semibold tracking-wide text-[#ddd8e1] transition hover:bg-[#332f37]"
              >
                <Cloud size={23} strokeWidth={2} className="text-[#d7d0dc]" />
                GOOGLE
              </button>

              {/* Github */}
              <button
                type="button"
                className="flex h-[51px] items-center justify-center gap-3 rounded-lg border border-[#454149] bg-[#2a272d] text-sm font-semibold tracking-wide text-[#ddd8e1] transition hover:bg-[#332f37]"
              >
                {/* <Github
                  size={22}
                  fill="currentColor"
                /> */}
                GITHUB
              </button>
            </div>

            {/* ================= DIVIDER ================= */}

            <div className="my-10 flex items-center gap-5">
              <div className="h-px flex-1 bg-[#302c34]" />

              <span className="whitespace-nowrap text-sm text-[#c2bcc7]">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-[#302c34]" />
            </div>

            {/* ================= FORM ================= */}

            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-7">
              {/* ================= EMAIL ================= */}

              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-[#c9c3ce]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#69636e]"
                  />

                  <input
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={`h-[51px] w-full rounded-lg border bg-[#0e0c11] pl-12 pr-4 text-[16px] text-white outline-none placeholder:text-[#e3dfe5] transition ${
                      errors.email
                        ? "border-red-500"
                        : "border-[#39353d] focus:border-[#7657b8]"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* ================= PASSWORD ================= */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold uppercase tracking-wide text-[#c9c3ce]">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-[#c7a7ff] transition hover:text-[#d9c5ff]"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#69636e]"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters",
                      },
                    })}
                    className={`h-[51px] w-full rounded-lg border bg-[#0e0c11] pl-12 pr-12 text-[16px] text-white outline-none placeholder:text-[#e3dfe5] transition ${
                      errors.password
                        ? "border-red-500"
                        : "border-[#39353d] focus:border-[#7657b8]"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#69636e] transition hover:text-white"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* ================= STAY SIGNED IN ================= */}

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="h-[19px] w-[19px] cursor-pointer appearance-none rounded border border-[#4a454e] bg-[#0e0c11] checked:border-[#7657b8] checked:bg-[#7657b8]"
                />

                <span className="text-sm text-[#c5beca]">Stay signed in</span>
              </label>

              {/* ================= SIGN IN ================= */}

              <button
                type="submit"
                className="flex h-[58px] w-full items-center justify-center gap-3 rounded-lg bg-[#7153b5] text-[16px] font-medium text-[#f4efff] shadow-lg shadow-purple-950/20 transition hover:bg-[#7d5ec3] active:scale-[0.99]"
              >
                Sign In
                <LogIn size={21} />
              </button>
            </form>

            {/* ================= BOTTOM DIVIDER ================= */}

            <div className="mt-10 border-t border-[#302c34]" />

            {/* ================= SIGN UP ================= */}

            <p className="mt-8 text-center text-[15px] text-[#c4bec8]">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                type="button"
                className="font-semibold text-[#c7a7ff] transition hover:text-[#ddcaff] hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </main>

      {/* ================= DECORATIVE RIGHT ART ================= */}

      <div className="pointer-events-none absolute bottom-12 right-8 hidden h-[310px] w-[310px] overflow-hidden rounded-xl border border-[#201d24] bg-[#100e13] opacity-60 xl:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[160px] w-[220px] rotate-[-15deg] rounded-[50%] border border-purple-500/20 blur-[2px]" />

          <div className="absolute h-[130px] w-[200px] rotate-[25deg] rounded-[50%] border border-purple-400/20 blur-[3px]" />

          <div className="absolute h-[100px] w-[160px] rotate-[-40deg] rounded-[50%] border border-indigo-400/20 blur-[2px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
