//ES6:
let type = 'quartz';
let color = 'rose';
let carat = 21.29;
const gemstone = {
  type,
  color,
  carat,
  calculateWorth:function(){
    // will calculate worth of gemstone based on type, color, and carat
  }
};

// function is not needed
let type = 'quartz';
let color = 'rose';
let carat = 21.29;
let gemstone = {
  type,
  color,
  carat,
  calculateWorth(){
    // will calculate worth of gemstone based on type, color, and carat
  }
};
