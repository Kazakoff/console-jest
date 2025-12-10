module.exports =  async function getUser(id) {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}