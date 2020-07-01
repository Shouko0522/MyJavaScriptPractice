'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = [1, 2, 3];
    // const n = Math.floor(Math.random() * results.length);
    //     btn.textContent = results[n];
    const n = Math.random();
    if (n < 0.05){
      btn.textContent = "Unlucky";

    } else {
      btn.textContent = "Lucky";

    }


  })
}
