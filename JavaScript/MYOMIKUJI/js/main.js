'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = [1, 2, 3];
    const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];

        // switch(n){
        //   case 0:
        //   btn.textContent = '大吉';
        //   break;
        //   case 1:
        //   btn.textContent = '中吉';
        //   break;
        //   case 2:
        //   btn.textContent = '木r';
        //   break;
        // }
  })
}
