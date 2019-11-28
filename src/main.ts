const litObj = {
  balance: 3000
}

function FnObject() {
  this.balance = 2000;
}

class ClsObject {
  balance = 3000;
}

const objCreate = Object.create(litObj);

let fnObject = new FnObject();
let clsObject = new ClsObject();

const render = () => {
  console.log(`The balance using literal object is ${litObj.balance}`);
  console.log(`The balance using function object is ${fnObject.balance}`);
  console.log(`The balance using class object is ${clsObject.balance}`);
  console.log(`The balance using object.create is ${objCreate.balance}`);

}

render();