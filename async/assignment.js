const display = document.getElementById("display");
var count = 10;
setTimeout(() => {
  display.innerText = count;
  setTimeout(() => {
    display.innerText = count -= 1;
    setTimeout(() => {
      display.innerText = count -= 1;
      setTimeout(() => {
        display.innerText = count -= 1;
        setTimeout(() => {
          display.innerText = count -= 1;
          setTimeout(() => {
            display.innerText = count -= 1;
            setTimeout(() => {
              display.innerText = count -= 1;
              setTimeout(() => {
                display.innerText = count -= 1;
                setTimeout(() => {
                  display.innerText = count -= 1;
                  setTimeout(() => {
                    display.innerText = count -= 1;
                    setTimeout(() => {
                      display.innerText = "Happy Independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
