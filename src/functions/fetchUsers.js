export default async function fetchUsers(url, setState) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    setState(data);
  } catch(err) {
    console.log(err);
  }
}