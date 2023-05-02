"use client";

import { useRouter } from "next/navigation";

export default function Users({ users }) {
  const router = useRouter();

  return (
    <div className="list-group">
      {users.map((user) => (
        <a
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
        >
          <h5>{user.id}._</h5>
          <h5>{user.email}</h5>
        </a>
      ))}
    </div>
  );
}
