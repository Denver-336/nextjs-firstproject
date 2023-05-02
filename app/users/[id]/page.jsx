async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function User({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="row">
      <h1 className="text-center mb-4">User details</h1>
      <div className="col-md-6 offset-md-3">
        <div className="card m-auto text-center w-50">
          <div className="card-header card-img-top bg-light bg-gradient">
            <img
              style={{ borderRadius: "50%" }}
              src={user.avatar}
              alt={user.email}
            />
          </div>
          <div className="card-body mt-2">
            <h5 className="card-title">
              {user.first_name} {user.last_name}
            </h5>
            <p className="card-text">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
