import { nanoid } from 'nanoid';

export default function List(props) {
  const { users } = props;
  
  const onItemClick = (id) => {
    props.onItemClick(id);
  }

  return (
    <ul className="users-list">
      {users.slice(0, 3).map((user) => (
        <li key={user.id} 
          onClick={() => onItemClick(user.id)}
          className={`user-item${user.selected ? ' selected' : ''}`}
          >{user.name}</li>
      ))}
      <li key={nanoid()} className="user-item more-items">...more users</li>
    </ul>
  )
}
