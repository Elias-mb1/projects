export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800">My Next.js App</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white flex-grow">
        <div className="container mx-auto p-6 text-center">
          <h2 className="text-4xl font-bold mb-2">Welcome to My App</h2>
          <p className="text-lg mb-4">Building simple website.</p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-6">
        <h3 className="text-2xl font-bold text-center mb-6">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">Feature One</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">Feature Two</h4>
            <p className="text-gray-700">Praesent tincidunt sed tellus ut rutrum.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">Feature Three</h4>
            <p className="text-gray-700">Sed sit amet sapien vitae libero bibendum.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Next.js App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
