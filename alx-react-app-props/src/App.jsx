import UserContext from './UserContext';
import ProfilePage from './ProfilePage'; // or UserProfile if you’re using that

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage /> {/* No more prop drilling */}
    </UserContext.Provider>
  );
}

export default App;


