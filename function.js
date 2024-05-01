let cartItems = [];

    document.getElementById('loginLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('mainPage').style.display = 'none';
    });

    document.getElementById('registerLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = 'block';
      document.getElementById('mainPage').style.display = 'none';
    });

    document.getElementById('itemLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('content').innerHTML = `
        <div class="content">
          <h2>Items Page</h2>
          <h3>Food</h3>
          <table class="item-table">
            <tr>
              <td>
                <div class="item-details">
                  <img src="product_04.jpg" alt="Food">
                  <div>
                    <p class="item-name">Dry Food</p>
                    <p class="item-price"> ₱150.00</p>
                    <button class="item-add-button" onclick="addItemToCart('Dry Food', 150.00)">Add to Cart</button>
                  </div>
                </div>
              </td>
              <td>
                <div class="item-details">
                  <img src="product_05.jpg" alt="Dry Food">
                  <div>
                    <p class="item-name">Premium Dry Food</p>
                    <p class="item-price">₱300.00</p>
                    <button class="item-add-button" onclick="addItemToCart('Premium Dry Food', 300.00)">Add to Cart</button>
                  </div>
                </div>
              </td>
              <!-- Add more food items here -->
            </tr>
          </table>
          <h3>Toy</h3>
          <table class="item-table">
            <tr>
              <td>
                <div class="item-details">
                  <img src="category-5.jpg" alt="Toy">
                  <div>
                    <p class="item-name">Bone pillow</p>
                    <p class="item-price">₱150.00</p>
                    <button class="item-add-button" onclick="addItemToCart('Bone pillow ', 150.00)">Add to Cart</button>
                  </div>
                </div>
              </td>
              <td>
                <div class="item-details">
                  <img src="toy 2.jpg" alt="Toy">
                  <div>
                    <p class="item-name">Rubber Ball</p>
                    <p class="item-price">₱150.00</p>
                    <button class="item-add-button" onclick="addItemToCart('Rubber Ball', 150.00)">Add to Cart</button>
                  </div>
                </div>
              </td>
              
              <td>
              <!-- Add more toy items here -->
            </tr>
          </table>
          <h3>Personal Needs</h3>
          <table class="item-table">
            <tr>
              <td>
                <div class="item-details">
                  <img src="Pneeds1.jpg" alt="Personal Needs">
                  <div>
                    <p class="item-name">Shampoo</p>
                    <p class="item-price">₱250.00</p>
                    <button class="item-add-button" onclick="addItemToCart('Personal', 250.00)">Add to Cart</button>
                  </div>
                </div>
              </td>
              <td>
                <div class="item-details">
                  <img src="bed.jpg" alt="Personal Needs">
                  <div>
                    <p class="item-name">Comfortable Dog Bed</p>
                    <p class="item-price">1000.00</p>
                    <button class="item-add-button" onclick="addItemToCart('Comfortable Dog Bed', 1000.00)">Add to Cart</button>
                  </div>
                </div>
              </td>
              <!-- Add more personal needs items here -->
            </tr>
          </table>
        </div>
      `;
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
    });

    document.getElementById('casherLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('content').innerHTML = `
        <div class="content">
          <h2>Cashier</h2>
          <div class="cart">
            <h4>Cart</h4>
            <div id="cartItems"></div>
            <div class="cart-total" id="cartTotal"></div>
            <h4>Payment Method</h4>
            <label>
              <input type="radio" name="paymentMethod" value="online" onclick="togglePaymentFields()">
              Online Payment
            </label>
            <div id="paymentFields" style="display: none;">
              <div id="bankAccountFields" style="display: none;">
                <input type="text" placeholder="Bank Account Number" required>
                <input type="text" placeholder="Verification Code" required>
              </div>
            </div>
            <label>
              <input type="radio" name="paymentMethod" value="cashonDelivery" onclick="toggleCODFields()">
              Cash on Delivery
            </label>
            <div id="codFields" style="display: none;">
              <input type="text" placeholder="Name" required>
              <input type="text" placeholder="Address" required>
              <input type="tel" placeholder="Contact Number" required>
            </div>
            <button onclick="checkout()">Checkout</button>
          </div>
        </div>
      `;
      displayCartItems();
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
    });

    document.getElementById('aboutLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('content').innerHTML = `
        <div class="content">
          
          <h2>about service</h2>
          <p>Welcome to our online pet shop, where your furry friends' needs 
          are our top priority! We offer a wide range of quality products to cater
          to every aspect of your pet's life. From nutritious food options to comfortable
          bedding, stylish accessories, and interactive toys, we have everything you need
          to keep your beloved companions happy and healthy. With convenient online ordering 
          and swift delivery, shopping for your pets has never been easier. Whether you're a
         proud cat parent, a devoted dog lover, or have other cherished animal companions,
         we're here to provide the best products and service for you and your pets.
          Shop with us today and experience the joy of pampering your pets from the comfort of your own home!</p>
        </div>
      `; 

      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
    });

    function addItemToCart(name, price) {
      cartItems.push({
        name,
        price
      });
      displayCartItems();
    }

    function displayCartItems() {
      const cartItemsDiv = document.getElementById('cartItems');
      cartItemsDiv.innerHTML = "";
      let total = 0;

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `<span>${item.name} - ₱${item.price}</span><button onclick="removeItemFromCart(₱{i})">Remove</button>`;
        cartItemsDiv.appendChild(cartItemDiv);
        total += item.price;
      }

      document.getElementById('cartTotal').innerHTML = `Total: ₱${total}`;
    }

    function removeItemFromCart(index) {
      cartItems.splice(index, 1);
      displayCartItems();
    }

    function togglePaymentFields() {
      const paymentFields = document.getElementById('paymentFields');
      const bankAccountFields = document.getElementById('bankAccountFields');
      const onlinePaymentRadio = document.querySelector('input[name="paymentMethod"][value="online"]');

      if (onlinePaymentRadio.checked) {
        paymentFields.style.display = "block";
        bankAccountFields.style.display = "block";
      } else {
        paymentFields.style.display = "none";
        bankAccountFields.style.display = "none";
      }
    }

    function toggleCODFields() {
      const codFields = document.getElementById('codFields');
      const codPaymentRadio = document.querySelector('input[name="paymentMethod"][value="cashonDelivery"]');

      if (codPaymentRadio.checked) {
        codFields.style.display = "block";
      } else {
        codFields.style.display = "none";
      }
    }

    function checkout() {
      const onlinePaymentRadio = document.querySelector('input[name="paymentMethod"][value="online"]');
      const bankAccountFields = document.getElementById('bankAccountFields');

      if (onlinePaymentRadio.checked) {
        const bankAccountNumber = document.querySelector('input[placeholder="Bank Account Number"]').value;
        const verificationCode = document.querySelector('input[placeholder="Verification Code"]').value;

        if (bankAccountNumber && verificationCode) {
          // Perform bank account payment verification here

          // Process payment and perform further checks if necessary
          document.getElementById('content').innerHTML = `
            <div class="content">
              <h2>Checkout Successfully</h2>
              <p>Your payment through Bank Account is successful. Thank you for your purchase!</p>
            </div>`;
        } else {
          alert("Please fill in the required bank account details.");
        }
      } else {
        const name = document.querySelector('input[placeholder="Name"]').value;
        const address = document.querySelector('input[placeholder="Address"]').value;
        const contactNumber = document.querySelector('input[placeholder="Contact Number"]').value;

        if (name && address && contactNumber) {
          // Perform the cash on delivery process here with the provided details
          // Add any necessary validations or checks before processing

          // Process payment and perform further checks if necessary
          document.getElementById('content').innerHTML = `
            <div class="content">
              <h2>Checkout Successfully</h2>
              <p>Your payment through Cash on Delivery is successful. Thank you for your purchase!</p>
            </div>`;
        } else {
          alert("Please fill in the required details for Cash on Delivery.");
        }
      }
    }

 