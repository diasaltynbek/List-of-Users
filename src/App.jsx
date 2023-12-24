import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';


function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [invites, setInvites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err);
      alert('Ошибка при получение пользователей')
    }).finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id != id));
    }else {
      setInvites((prev) => [...prev, id]);
    }
  }

  const onClickSentInvites = () => {
    setSuccess(true);
  }
  return (
    <div className="App">
      {
        success ? (
        <Success count={invites.length}/> 
        ) : (
         <Users 
          searchValue={searchValue} 
          onChangeSearchValue={onChangeSearchValue} 
          items={users} 
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSentInvites={onClickSentInvites}
        />
        )
      }
    </div>
  );
}

export default App;