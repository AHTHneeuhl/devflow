type AuthFormProps = {
  type: 'login' | 'register';
};

export function AuthForm({ type }: AuthFormProps) {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-semibold">
        {type === 'login' ? 'Login' : 'Create account'}
      </h1>

      <form className="space-y-4">
        {type === 'register' && (
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded border px-3 py-2"
              placeholder="Your name"
            />
          </div>
        )}

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded border px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full rounded border px-3 py-2"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-black py-2 text-white"
        >
          {type === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
}
