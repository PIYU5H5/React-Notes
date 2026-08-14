import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Network,
  Sparkles,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { onRegisterSubmit, navigate } = useAuth();

  // Only used for showing password strength
  const password = watch("password", "");

  const strength =
    (password.length >= 8 ? 1 : 0) +
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/[a-z]/.test(password) ? 1 : 0) +
    (/[0-9]/.test(password) ? 1 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 1 : 0);

  const strengthText = () => {
    if (strength >= 5) return "Strong password";
    if (strength >= 4) return "Good password";
    if (strength >= 2) return "Weak password";
    return "Very weak password";
  };

  return (
    <div className="min-h-screen bg-[#121015] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div className="relative hidden overflow-hidden border-r border-[#28232f] lg:block">

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 50% 45%,
                  rgba(47, 89, 148, 0.35),
                  transparent 45%
                ),
                radial-gradient(
                  circle at 20% 70%,
                  rgba(108, 75, 170, 0.25),
                  transparent 40%
                ),
                linear-gradient(
                  180deg,
                  #08142d 0%,
                  #0b1b38 40%,
                  #11121f 100%
                )
              `,
            }}
          />

          {/* Artificial neural network effect */}
          <div className="absolute inset-0 opacity-30">

            <div className="absolute left-[5%] top-[20%] h-[400px] w-[400px] rounded-full border border-blue-400/20 blur-[1px]" />

            <div className="absolute left-[15%] top-[30%] h-[300px] w-[500px] rotate-[-20deg] rounded-[50%] border border-purple-400/20 blur-[2px]" />

            <div className="absolute left-[0%] top-[40%] h-[350px] w-[600px] rotate-[15deg] rounded-[50%] border border-cyan-400/20 blur-[3px]" />

            <div className="absolute left-[20%] top-[50%] h-[300px] w-[400px] rotate-[-35deg] rounded-[50%] border border-blue-500/20 blur-[2px]" />

            {/* dots */}
            <div className="absolute left-[48%] top-[8%] h-2 w-2 rounded-full bg-blue-300" />
            <div className="absolute left-[70%] top-[20%] h-2 w-2 rounded-full bg-purple-300" />
            <div className="absolute left-[35%] top-[35%] h-2 w-2 rounded-full bg-blue-300" />
            <div className="absolute left-[10%] top-[55%] h-2 w-2 rounded-full bg-purple-300" />
            <div className="absolute left-[65%] top-[55%] h-2 w-2 rounded-full bg-cyan-300" />
            <div className="absolute left-[30%] top-[70%] h-2 w-2 rounded-full bg-purple-300" />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#101017]" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col">

            {/* Logo */}
            <div className="px-7 py-6">
              <h1 className="text-xl font-bold tracking-tight">
                team-sync
              </h1>
            </div>

            {/* Bottom content */}
            <div className="mt-auto px-12 pb-12">

              <div className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#c9a9ff]">
                <Sparkles size={17} />
                NEXT-GEN INTELLIGENCE
              </div>

              <h2 className="max-w-lg text-4xl font-bold leading-tight text-white">
                Accelerate your team's
                <br />
                intelligence.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-300">
                Connect your enterprise data to our specialized AI models and
                unlock unparalleled strategic insights in seconds.
              </p>

              <div className="mt-12 flex gap-10">

                <div>
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-sm text-gray-400">Uptime SLA</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">ISO</p>
                  <p className="text-sm text-gray-400">
                    27001 Certified
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}

        <div className="flex min-h-screen flex-col">

          {/* Form area */}
          <main className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">

            <div className="w-full max-w-[492px]">

              {/* Heading */}
              <div className="mb-9">

                <h2 className="text-3xl font-bold tracking-tight sm:text-[34px]">
                  Create your account
                </h2>

                <p className="mt-2 text-[15px] text-gray-300">
                  Experience the future of collaborative data intelligence.
                </p>

              </div>

              <form
                onSubmit={handleSubmit(onRegisterSubmit)}
                className="space-y-7"
              >

                {/* ================= FULL NAME ================= */}

                <div>

                  <label className="mb-2 block text-xs font-semibold text-gray-300">
                    Full Name
                  </label>

                  <div className="relative">

                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#625b69]"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Full name is required",

                        minLength: {
                          value: 2,
                          message:
                            "Name must contain at least 2 characters",
                        },
                      })}
                      className={`h-[60px] w-full rounded-lg border bg-[#1d1a20] pl-16 pr-4 text-sm text-white outline-none placeholder:text-[#625b69] transition focus:border-[#9b78dd] ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-[#4b4651]"
                      }`}
                    />

                  </div>

                  {errors.fullName && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}

                </div>

                {/* ================= EMAIL ================= */}

                <div>

                  <label className="mb-2 block text-xs font-semibold text-gray-300">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#625b69]"
                    />

                    <input
                      type="email"
                      placeholder="name@company.com"
                      {...register("email", {
                        required: "Email is required",

                        pattern: {
                          value:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`h-[60px] w-full rounded-lg border bg-[#1d1a20] pl-16 pr-4 text-sm text-white outline-none placeholder:text-[#625b69] transition focus:border-[#9b78dd] ${
                        errors.email
                          ? "border-red-500"
                          : "border-[#4b4651]"
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

                  <label className="mb-2 block text-xs font-semibold text-gray-300">
                    Password
                  </label>

                  <div className="relative">

                    <Lock
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#625b69]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password", {

                        required: "Password is required",

                        minLength: {
                          value: 8,
                          message:
                            "Password must contain at least 8 characters",
                        },

                        validate: {

                          uppercase: (value) =>
                            /[A-Z]/.test(value) ||
                            "Password must contain at least one uppercase letter",

                          lowercase: (value) =>
                            /[a-z]/.test(value) ||
                            "Password must contain at least one lowercase letter",

                          number: (value) =>
                            /[0-9]/.test(value) ||
                            "Password must contain at least one number",

                          special: (value) =>
                            /[^A-Za-z0-9]/.test(value) ||
                            "Password must contain at least one special character",

                        },
                      })}
                      className={`h-[60px] w-full rounded-lg border bg-[#1d1a20] pl-16 pr-14 text-sm text-white outline-none placeholder:text-[#625b69] transition focus:border-[#9b78dd] ${
                        errors.password
                          ? "border-red-500"
                          : "border-[#4b4651]"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#625b69] transition hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>

                  </div>

                  {/* Password strength */}
                  {password && (
                    <>
                      <div className="mt-2 flex gap-1">

                        {[1, 2, 3, 4].map((bar) => (
                          <div
                            key={bar}
                            className={`h-[4px] flex-1 rounded-full transition ${
                              strength >= bar
                                ? "bg-[#c7a6ff]"
                                : "bg-[#27232c]"
                            }`}
                          />
                        ))}

                      </div>

                      <p
                        className={`mt-1 text-xs ${
                          strength >= 5
                            ? "text-[#c7a6ff]"
                            : "text-gray-400"
                        }`}
                      >
                        {strengthText()}
                      </p>
                    </>
                  )}

                  {errors.password && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.password.message}
                    </p>
                  )}

                </div>

                {/* ================= TERMS ================= */}

                <div>

                  <label className="flex cursor-pointer items-start gap-4">

                    <input
                      type="checkbox"
                      {...register("terms", {
                        required:
                          "You must agree to the Terms of Service and Privacy Policy",
                      })}
                      className="mt-[1px] h-5 w-5 cursor-pointer appearance-none rounded border border-[#55505c] bg-transparent checked:border-[#9b78dd] checked:bg-[#9b78dd]"
                    />

                    <span className="text-xs leading-5 text-gray-300">
                      I agree to the{" "}

                      <button
                        type="button"
                        className="text-[#c5a7ff] hover:underline"
                      >
                        Terms of Service
                      </button>{" "}

                      and{" "}

                      <button
                        type="button"
                        className="text-[#c5a7ff] hover:underline"
                      >
                        Privacy Policy
                      </button>
                      .
                    </span>

                  </label>

                  {errors.terms && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.terms.message}
                    </p>
                  )}

                </div>

                {/* ================= CREATE ACCOUNT ================= */}

                <button
                  type="submit"
                  className="h-[58px] w-full rounded-lg bg-gradient-to-r from-[#7655b7] to-[#c0a6fa] text-[16px] font-semibold text-[#171025] shadow-lg shadow-purple-950/20 transition hover:brightness-110 active:scale-[0.99]"
                >
                  Create Account
                </button>

              </form>

              {/* ================= DIVIDER ================= */}

              <div className="my-9 flex items-center gap-4">

                <div className="h-px flex-1 bg-[#29252e]" />

                <span className="text-[11px] font-medium text-[#5d5765]">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-[#29252e]" />

              </div>

              {/* ================= SOCIAL LOGIN ================= */}

              <div className="grid grid-cols-2 gap-4">

                <button
                  type="button"
                  className="flex h-[60px] items-center justify-center gap-3 rounded-lg border border-[#4b4651] bg-transparent text-sm font-medium transition hover:bg-[#1d1a20]"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#151515] text-xs">
                    G
                  </span>

                  Google
                </button>

                <button
                  type="button"
                  className="flex h-[60px] items-center justify-center gap-3 rounded-lg border border-[#4b4651] bg-transparent text-sm font-medium transition hover:bg-[#1d1a20]"
                >
                  <Network size={18} />
                  SSO
                </button>

              </div>

              {/* ================= LOGIN ================= */}

              <p className="mt-14 text-center text-[15px] text-gray-300">

                Already have an account?{" "}

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="font-semibold text-[#c4a5ff] hover:underline"
                >
                  Log In
                </button>

              </p>

            </div>

          </main>

          {/* ================= FOOTER ================= */}

          <footer className="border-t border-[#242129] px-6 py-8 sm:px-10">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <h3 className="text-xl font-bold">
                team-sync
              </h3>

              <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-gray-300">

                <button className="hover:text-white">
                  Privacy Policy
                </button>

                <button className="hover:text-white">
                  Terms of Service
                </button>

                <button className="hover:text-white">
                  Security
                </button>

                <button className="hover:text-white">
                  System Status
                </button>

              </div>

              <p className="text-xs text-gray-300">
                © 2024 Synthetix AI. Enterprise Intelligence Platforms.
              </p>

            </div>

          </footer>

        </div>
      </div>
    </div>
  );
};

export default Register;