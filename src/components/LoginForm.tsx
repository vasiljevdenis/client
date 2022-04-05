import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react'
import { Context } from '..';

const LoginForm: FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

  return (
    <div id="first" className="step">
      <div className="prev container-fluid">
        <div className="row">
          <div className="col-12 text-center">
        <input 
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email" 
        placeholder='Email'
        className='input'
        />
        <input 
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password" 
        placeholder='Password'
        className='input'
        />
        <button className="btn btn-success" onClick={() => store.login(email, password)}>Войти</button>
        <button className="btn btn-success" onClick={() => store.registration(email, password)}>Регистрация</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default observer(LoginForm)