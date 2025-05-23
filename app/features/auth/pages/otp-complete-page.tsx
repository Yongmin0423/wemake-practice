export default function OtpCompletePage() {
  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
        Enter OTP
      </h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
            One-time Password
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
}
