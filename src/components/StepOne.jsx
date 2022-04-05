import React, { useEffect, useState } from 'react';
import './StepOne.scss';

function StepOne() {
  let stepOne = useSelector(state => state.stepOne);
  const dispatch = useDispatch();
  const [vis, setVis] = useState("step off");
  const [scroll, setScroll] = useState(false);
  const [dis, setDis] = useState(true);

  useEffect(() => {
    let inpFirst = document.querySelector('#first input');
    if (stepOne) {
      setVis("step on");
      setTimeout(scrollToId, 500);
    }
    if (scroll) nextStep();
    if(!dis && inpFirst.value === "") setDis(true);
  }, [stepOne, scroll, dis])

  function scrollToId() {

    let target = document.querySelector('#first');

    if (target !== null) {
      let pos = target.offsetTop;

      window.scroll({
        top: pos,
        behavior: "smooth"
      });
    }
  }

  function nextStep() {    
    // let btnFirst = document.querySelector('#first button');
    // btnFirst.setAttribute('disabled', 'disabled');
    // dispatch({
    //   type: "STEP_TWO",
    //   payload: true
    // });
  }

  return (
    <div id="first" className={vis}>
      <div className="prev container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <div>
              <h2>Шаг 1</h2>
              <p>Вставьте ссылку на сайт</p>
            </div>
          </div>
          <div className="col-12 text-center">
          <input type="text" className="input" placeholder="https://example.ru" onChange={() => setDis(false)}/>
        </div>
        <div className="col-12 text-center">
          <button type="button" className="btn btn-sm btn-success" onClick={() => setScroll(true)} disabled={dis}>Далее</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne