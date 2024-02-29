// create and store on the global value
var globalValue = "I am global";

// create and store on local value
let localMutable = "I am local and changable";
const localImmutable = "I am local but unchangable";

function sayMyName() {
  // globalFN is global is within this function scope
  var globalFN = "jo3";
  console.log(globalFN);
}

const sayThyName = () => {
  // globalFN is global is within this function scope
  var globalFN = "j0e";
  console.log(globalFN);
};

sayMyName();
sayThyName();

globalThis;
