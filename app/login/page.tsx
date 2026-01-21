'use client';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/5 p-8 rounded-xl w-96 border border-white/10">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          className="w-full p-2 mb-4 text-black rounded"
          placeholder="Email"
        />
        <input
          className="w-full p-2 mb-4 text-black rounded"
          type="password"
          placeholder="Password"
        />

        <select className="w-full p-2 mb-6 text-black rounded">
          <option>Admin</option>
          <option>Teacher</option>
          <option>Student</option>
        </select>

        <button className="w-full bg-pink-600 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
