"use client";
const page = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen ">
      <form className="mx-auto w-5/6 md:w-1/4">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
          />
        </div>
        <button className="bg-blue-300 w-full py-2 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default page;
