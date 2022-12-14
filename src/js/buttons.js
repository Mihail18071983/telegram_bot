import { counter1, submitBtn } from './counter';
import { counter2 } from './counter';
import { counter3 } from './counter';



const counterArr =[counter1, counter2, counter3];
submitBtn.classList.add('is-hidden');

counterArr.forEach(counter=>{    
    counter.refs.btnBuy.addEventListener('click', onClick)
    function onClick() {
    
        submitBtn.classList.remove('is-hidden')
      }
      if (counter.refs.btnBuy.classList.remove('is-hidden')) {
        submitBtn.classList.add('is-hidden')
      }
})



