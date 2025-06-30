import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/github-users/')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">GitHub Users</h2>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-sm">
              <img
                src={user.avatar_url}
                className="card-img-top"
                alt={`${user.login}'s avatar`}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{user.login}</h5>
                <a
                  href={user.html_url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
