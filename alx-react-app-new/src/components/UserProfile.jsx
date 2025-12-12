// src/components/UserProfile.jsx
function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

