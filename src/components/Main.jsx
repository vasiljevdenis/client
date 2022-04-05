import React, { useState, useEffect } from 'react';
import './Main.scss';

function Main() {
    const dispatch = useDispatch();
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      if(scroll) nextStep();    
    }, [scroll])
    
    function nextStep() {
      let btnMain = document.querySelector('#main input');
      
      // let btnMain = document.querySelector('#main button');
      // btnMain.setAttribute('disabled', 'disabled');
      //   dispatch({
      //       type: "STEP_ONE",
      //       payload: true
      //   });
    }

  return (
    <div id="main">
    <div className="prev container-fluid">
      <div className="row">
        <div className="col text-center">
          <div>
            <h1>Настрой рекламную кампанию <br className="d-none d-sm-block"/> в Яндекс Директ за 5 минут.</h1>
            <p>Самостоятельно. Профессионально. <br/> Без директолога.</p>
          </div>
          <button type="button" className="btn btn-success" onClick={() => setScroll(true)}>Начать настройку</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main