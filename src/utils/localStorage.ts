export const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

export const saveUsers = (users: any) => {
  localStorage.setItem("users", JSON.stringify(users));
};
