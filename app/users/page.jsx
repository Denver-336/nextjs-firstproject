import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function UserList() {
  const userList = await fetchUsers();

  return (
    <div>
      <h1 className="text-center mb-4 text-light">User List</h1>
      <Users users={userList} />
    </div>
  );
}

export default UserList;
