import Input from "../../components/ui/Input";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-black">
      <div className="sm:mx-auto sm:w-full">
        <h2 className="mt-10 text-center text-4xl tracking-tight text-white">
          Reset your password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Enter your email address and we’ll send you a reset link.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <Input
            id="email"
            label="Email address"
            type="email"
            autoComplete="email"
            required
            placeholder="your@email.com"
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Send reset link
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Remember your password?{" "}
          <a
            href="/auth/login"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Back to login
          </a>
        </p>
      </div>
    </div>
  );
}
