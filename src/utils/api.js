export const deleteUser = (id) => {
  fetch(`http://localhost:4000/user/${id}`, { method: "DELETE" });
  window.location.reload();
};
