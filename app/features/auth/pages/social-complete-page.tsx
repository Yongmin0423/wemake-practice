export default function SocialCompletePage() {
  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
        Social Login Complete
      </h2>
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Your social login is complete!
        </p>
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
}
