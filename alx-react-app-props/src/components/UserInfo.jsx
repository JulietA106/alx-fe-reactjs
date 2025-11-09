import UserDetails from './UserDetails';

function UserInfo({ userData }) {  // receiving props
  return <UserDetails userData={userData} />; // passing props
}

export default UserInfo;
