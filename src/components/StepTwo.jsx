import React from 'react'
import './StepTwo.scss';

function StepTwo() {
  return (
    <div id="second" className="step off">
  <div className="prev container-fluid">
    <div className="row">
      <div className="col-12 text-center">
        <div>
          <h2>Шаг 2</h2>
          <p>Вставьте ссылку на сайт</p>
        </div>
      </div>
      <div className="col-12 text-center">
      <input type="text" className="input" placeholder="https://example.ru"/>
    </div>
    <div className="col-12 text-center">
      <button type="button" className="btn btn-sm btn-success">Далее</button>
    </div>
    </div>
  </div>
</div>
  )
}

export default StepTwo