addSubtractDisplay();


function addSubtractDisplay() {
  let addButton = document.querySelector('.add');
  let subtractButton = document.querySelector('.subtract');
  let orderNumber = document.querySelector('.one');
  let addCartElement = document.querySelector('.addToCart');
  let addBag = document.querySelector("#bag-count");
  let totalPrice = document.querySelector('.cost');
  let add = 0;
  let cost;
  let itemPrice = 10;
  let bagCount = 0;

  addButton.addEventListener('click', () => {
    add += 1
    cost = add * itemPrice

    orderNumber.textContent = add;
    totalPrice.textContent = `$${cost}`

  });

  subtractButton.addEventListener('click', () => {
    add -= 1;
    cost = add * itemPrice

    orderNumber.textContent = add;
    totalPrice.textContent = `$${cost}`

  });

  addCartElement.addEventListener('click', () => {
    bagCount += add;
    addBag.textContent = bagCount;

    bootstrapAlert();
    add = 0;
    orderNumber.textContent = add;
    cost = 0;
    totalPrice.textContent = `$${cost}`

  });

  function bootstrapAlert() {
    let alertBox = document.getElementById('show-alert');
    alertBox.style.display = "inline-block";
    alertBox.innerHTML = ` <div
    class="alert alert-warning alert-dismissible fade show fixed-top"
    id="alert-text"
    role="alert"
  >
    <strong>Your total ${add} items of amount $${cost} added </strong>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>`;

  }

}


