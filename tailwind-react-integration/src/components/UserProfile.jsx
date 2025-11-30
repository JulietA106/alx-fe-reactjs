function UserProfile() {
  return (
    <div
      className="user-profile bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ backgroundColor: '#f3f4f6' }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        style={{ width: 150, height: 150 }}
      />
      <h1
        className="text-lg md:text-xl text-blue-800 my-4 text-center hover:text-blue-500 transition-colors duration-200"
        style={{ color: '#1e3a8a' }}
      >
        John Doe
      </h1>
      <p className="text-gray-600 text-sm md:text-base text-center" style={{ color: '#4b5563' }}>
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
