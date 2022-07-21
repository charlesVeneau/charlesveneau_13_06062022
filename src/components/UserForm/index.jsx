function UserForm({ firstName, lastName }) {
  return (
    <div className="userForm">
      <input
        className="userForm-input"
        id="firstName"
        type="text"
        defaultValue={firstName}
      />
      <input
        className="userForm-input"
        id="lastName"
        type="text"
        defaultValue={lastName}
      />
    </div>
  );
}

export default UserForm;
