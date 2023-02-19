'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {

    // 確率を操作
    const n = Math.random();
      if(n < 0.1){
        btn.textContent =  '大吉'; //10%
      }else if(n < 0.3){
        btn.textContent = '中吉'; //20%
      }else{
        btn.textContent = '凶'; //70%
      }

    // 配列を使って作成

    // const results = ['大吉','中吉','凶','末吉'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];

    // switch文を使って作成

    // const n = Math.floor(Math.random() * 3);
    // btn.textContent = n;

    // switch(n){
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;     
    // }
  });


}