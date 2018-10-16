import React from 'react';
import Users from "./Users"

const UserslistCircle = props => {

  const results = props.data;
  let users = results.map(users =>
    <Users image={users.pictureUrl} name={users.name} title={users.title} id={users.id} />
  );

  return(
    <div className="users-list">
      {users}
    </div>
  );

}

export default UserslistCircle
