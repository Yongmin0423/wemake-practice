export default function SocialStartPage() {
  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
        Social Login
      </h2>
      <div className="space-y-4">
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <circle cx="19.04" cy="18.92" r="1.4"/>
            <path d="M6.3 20.97c1.01 0 1.97-.4 2.57-1.2-.49-.09-.87-.42-1.14-.96-.27-.54-.42-1.12-.42-1.75 0-.59.14-1.17.42-1.71.36-.55.89-.92 1.57-1.11C8.63 12.73 8 11.43 8 9.92c0-1.63.64-2.97 1.76-3.84-.17-.51-.28-1.04-.28-1.6 0-.55.11-1.05.3-1.53.2-.49.54-.88 1.02-1.2-.36-.87-.58-1.85-.58-2.92 0-1.27.43-2.34 1.2-3.1.77-.76 1.86-1.14 3.1-1.14 1.81 0 3.28.73 4.22 2.16.94-1.42 1.78-2.16 3.1-2.16 1.2 0 2.2.46 2.94 1.38.73-.38 1.33-.58 1.95-.58 2.38 0 3.84 1.46 3.84 4.1 0 2.42-.8 4.43-2.1 5.87.98.27 1.83.46 2.54.57-.81 1.33-1.9 2.22-3.16 2.83l-.81 1.31c-.41.65-.94.99-1.57 1.11.91.84 1.43 1.97 1.43 3.31 0 1.71-.59 3.17-1.73 4.39-1.14 1.22-2.63 1.84-4.27 1.84-1.6 0-3.07-.64-4.07-1.62-.94-.94-1.42-2.38-1.42-4.02 0-1.65.48-3.09 1.42-4.22z"/>
          </svg>
          Sign in with Google
        </button>
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.493c-.896 0-1.631-.059-2.287-.169v-8.169H8.712V12h4.694v5.058H15.625v8.169c1.06-.11 1.932-.17 2.712-.17 2.552 0 4.628-1.876 4.628-4.375V8.719c0-2.499-2.076-4.375-4.628-4.375-1.326 0-2.544.233-3.597.688-1.02-.203-2.157-.328-3.34-.328-2.552 0-4.628 1.876-4.628 4.375V15.767H4.88V12h4.695v1.562c0 .646.067 1.22.185 1.733-.63-.067-1.34-.105-2.286-.105-1.74 0-3.14 1.4-3.14 3.14v8.099C1.325 22.408 1.918 24 2.65 24H22.675c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
          </svg>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
