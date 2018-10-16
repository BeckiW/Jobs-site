import React from 'react';
import Jobs from './Jobs';

const UsersList = props => {

  const results = props.data;
  let users = results.map(user =>
    <Jobs city={job.city} title={job.title} department={job.department} id={job.id} />
  );

  return(
    <ul className="users-list">
      {users}
    </ul>
  );

}

export default UsersList
