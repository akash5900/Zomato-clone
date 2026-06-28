const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl text-red-500 font-bold mb-4">
          About Zomato Clone
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Zomato Clone is a modern food delivery and restaurant discovery
          platform where users can explore restaurants, order food online, and
          enjoy seamless dining experiences from their favorite places.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="font-semibold text-red-500 mb-2">Customer Module</h3>

          <p className="text-sm text-gray-600">
            Browse restaurants, search food items, add dishes to cart, place
            online orders, and track deliveries easily.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="font-semibold text-red-500 mb-2">
            Restaurant Partner
          </h3>

          <p className="text-sm text-gray-600">
            Manage restaurant menus, update food items, receive orders, and
            monitor sales through an organized dashboard.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="font-semibold text-red-500 mb-2">Admin Module</h3>

          <p className="text-sm text-gray-600">
            Control users, restaurants, food categories, and manage the complete
            food delivery platform efficiently.
          </p>
        </div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl text-red-500 font-bold mb-4">
          About Developer
        </h1>

        <p className="text-lg">
          Hi, I am{" "}
          <span className="font-semibold text-red-700">Akashdeep Singh</span>
        </p>

        <p className="text-gray-600 mt-2">
          A passionate MERN Stack Developer focused on building modern,
          scalable, and real-world web applications while continuously improving
          development skills.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-red-500 mb-3">Tech Stack</h2>

        <p className="text-gray-600">
          React • Tailwind CSS • Node.js • Express.js • MongoDB
        </p>
      </div>
    </div>
  );
};

export default About;
