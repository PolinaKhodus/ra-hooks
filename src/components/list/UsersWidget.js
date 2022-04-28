import { useState, useEffect } from 'react';
import List from './List';
import Details from './Details';
import fetchUsers from '../../functions/fetchUsers';

export default function UserCard({ url }) {
  const [usersList, setUsersList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [fetchParams, setFetchParams] = useState({
    fetchUrl: `users.json`,
    stateFunc: setUsersList,
  });

  useEffect(() => {
    fetchUsers(`${url}${fetchParams.fetchUrl}`, fetchParams.stateFunc);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchParams]);

  const onClickHandle = (id) => {
    if (userInfo.id === id) return ;

    setUsersList((prev) => prev.map((user) => {
      if (user.id === id) {
        return { ...user, selected: true }
      } else {
        return { ...user, selected: false }
      }
    }));

    setFetchParams((prev) => (
      {...prev, fetchUrl: `${id}.json`, stateFunc: setUserInfo}
    ));  
  }

  return (
    <div className="users-widget_container">
      <List users={usersList} 
        selectedId={fetchParams.id}
        onItemClick={onClickHandle}/>
      <Details info={userInfo} />
    </div>
  );
}