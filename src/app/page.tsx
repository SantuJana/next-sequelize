import Role from "@/models/Role";
import User from "@/models/User";
import Image from "next/image";

export const dynamic = "force-dynamic";

const getUsers = async () => {
  return await User.findAll({
    include: [
      {
        model: Role,
        attributes: {
          exclude: ["id"]
        }
      }
    ]
  });
}

export default async function Home() {
  const users = await getUsers();
  console.log(users)

  return (
    <>
      <h3>Users: </h3>
      {
        users.map((user: any) => [
          <p>name: {user.name} / {user.Role?.role}</p>
        ])
      }
    </>
  );
}
