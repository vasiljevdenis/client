import React, { FC, useEffect, useContext, useState } from 'react';
import './App.scss';
import Main from './components/Main';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import LoginForm from './components/LoginForm';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { IUser } from './models/IUser';
import UserService from './services/UserService';

const App: FC = () => {
const {store} = useContext(Context);
const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
if(localStorage.getItem('token')) {
store.checkAuth()
}
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    } catch (e) {
      console.log(e);
      
    }
  }

  if(store.isLoading) {
    return <div>Загрузка...</div>
  }

  if(!store.isAuth) {
    return (
      <div>
      <LoginForm/>
      <button className="btn btn-success" onClick={getUsers}>Получить пользователей</button>
      </div>
    )
  }

  return (
    <>        
    <div id="first" className="step">
      <div className="prev container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <p>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</p>
            <p>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</p>
            <button className="btn btn-success" onClick={() => store.logout()}>Выйти</button>
            <div>
                <button className="btn btn-success" onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>          
        </div>
        </div>
        </div>
    </>
  );
}

export default observer(App);