import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { translate } = useLanguage();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="page-container users-page">
      <h1>{translate('users.title')}</h1>
      <div className="users-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{translate('users.email')}: {user.email}</p>
            <p>{translate('users.phone')}: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;   