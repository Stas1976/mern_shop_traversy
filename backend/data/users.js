import bcrybt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrybt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Stas",
    email: "stas@mail.com",
    password: bcrybt.hashSync("123456", 10),
  },
  {
    name: "Sveta",
    email: "sveta@mail.com",
    password: bcrybt.hashSync("123456", 10),
  },
];

export default users;
