import Link from 'next/link';

export default function CheckOutPage() {
  return (
    <div>
      <hi>Check Out</hi>
      <form>
        <h3>Billing Address</h3>
        <label htmlFor="fname">
          <i className="fa fa-user" />
          Full Name
        </label>
        <input id="fname" name="firstName" placeholder="Full Name" />
        <label htmlFor="email">
          <i className="fa fa-envelope" /> Email
        </label>
        <input id="email" name="email" placeholder="email" />
        <label htmlFor="adr">
          <i className="fa fa-address-card-o" /> Address
        </label>
        <input id="adr" name="address" placeholder="address" />
        <label htmlFor="city">
          <i className="fa fa-institution" />
          City
        </label>
        <input id="city" name="city" placeholder="city" />
        <div className="row">
          <div className="col-50">
            <label htmlFor="state">State</label>
            <input id="state" name="state" placeholder="state" />
          </div>
          <div className="col-50">
            <label htmlFor="zip">Zip</label>
            <input id="zip" name="zip" placeholder="zip" />
          </div>
        </div>

        <div className="col-50">
          <h3>Payment</h3>
          <label htmlFor="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fa fa-cc-visa" />
            <i className="fa fa-cc-amex" />
            <i className="fa fa-cc-mastercard" />
            <i className="fa fa-cc-discover" />
          </div>
          <label htmlFor="cname">Name on Card</label>
          <input id="cname" name="cardname" placeholder="cardname" />
        </div>
        <label htmlFor="ccnum">Credit card number</label>
        <input id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
        <label htmlFor="expmonth">Exp Month</label>
        <input id="expmonth" name="expmonth" placeholder="exp month" />
        <div className="row">
          <div className="col-50">
            <label htmlFor="expyear">Exp Year</label>
            <input id="expyear" name="expyear" placeholder="Exp Year" />
          </div>
          <div className="col-50">
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" name="cvv" placeholder="cvv" />
          </div>
        </div>
        <label>
          <input
            type="checkbox"
            // checked="checked"
            name=""
          />{' '}
          Shipping address same as billing
        </label>
        <Link href="/cart/checkout/thankyou">
          <input type="submit" value="Continue to checkout" className="btn" />
        </Link>
      </form>
    </div>
  );
}

// <div>
//       <div>
//         <div class="container">
//           <form>
//             <div>
//               <div>
//                 <h3>Billing Address</h3>
//                 <Label for="fname">
//                   <i class="fa fa-user"></i> Full Name
//                 </Label>
//                 <input
//                   type="text"
//                   id="fname"
//                   name="firstname"
//                   placeholder="John M. Doe"
//                 />
//                 <Label for="email">
//                   <i class="fa fa-envelope"></i> Email
//                 </Label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   placeholder="john@example.com"
//                 />
//                 <Label for="adr">
//                   <i class="fa fa-address-card-o"></i> Address
//                 </Label>
//                 <input
//                   type="text"
//                   id="adr"
//                   name="address"
//                   placeholder="542 W. 15th Street"
//                 />
//                 <Label for="city">
//                   <i className="fa fa-institution"></i> City
//                 </Label>
//                 <input
//                   type="text"
//                   id="city"
//                   name="city"
//                   placeholder="New York"
//                 />

//                 <div class="row">
//                   <div class="col-50">
//                     <Label for="state">State</Label>
//                     <input
//                       type="text"
//                       id="state"
//                       name="state"
//                       placeholder="NY"
//                     />
//                   </div>
//                   <div class="col-50">
//                     <Label for="zip">Zip</Label>
//                     <input
//                       type="text"
//                       id="zip"
//                       name="zip"
//                       placeholder="10001"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div class="col-50">
//                 <h3>Payment</h3>
//                 <Label for="fname">Accepted Cards</Label>
//                 <div class="icon-container">
//                   <i class="fa fa-cc-visa" style="color:navy;"></i>
//                   <i class="fa fa-cc-amex" style="color:blue;"></i>
//                   <i class="fa fa-cc-mastercard" style="color:red;"></i>
//                   <i class="fa fa-cc-discover" style="color:orange;"></i>
//                 </div>
//                 <Label for="cname">Name on Card</Label>
//                 <input
//                   type="text"
//                   id="cname"
//                   name="cardname"
//                   placeholder="John More Doe"
//                 />
//                 <Label for="ccnum">Credit card number</Label>
//                 <input
//                   type="text"
//                   id="ccnum"
//                   name="cardnumber"
//                   placeholder="1111-2222-3333-4444"
//                 />
//                 <Label for="expmonth">Exp Month</Label>
//                 <input
//                   type="text"
//                   id="expmonth"
//                   name="expmonth"
//                   placeholder="September"
//                 />

//                 <div class="row">
//                   <div class="col-50">
//                     <Label for="expyear">Exp Year</Label>
//                     <input
//                       type="text"
//                       id="expyear"
//                       name="expyear"
//                       placeholder="2018"
//                     />
//                   </div>
//                   <div class="col-50">
//                     <Label for="cvv">CVV</Label>
//                     <input type="text" id="cvv" name="cvv" placeholder="352" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Label>
//               <input type="checkbox" checked="checked" name="sameadr" />{' '}
//               Shipping address same as billing
//             </Label>
//             <input type="submit" value="Continue to checkout" class="btn" />
//           </form>
//         </div>
//       </div>

//       {/* <div class="col-25">
//     <div class="container">
//       <h4>Cart
//         <span class="price" style="color:black">
//           <i class="fa fa-shopping-cart"></i>
//           <b>4</b>
//         </span>
//       </h4>
//       <p><a href="#">Product 1</a> <span class="price">$15</span></p>
//       <p><a href="#">Product 2</a> <span class="price">$5</span></p>
//       <p><a href="#">Product 3</a> <span class="price">$8</span></p>
//       <p><a href="#">Product 4</a> <span class="price">$2</span></p>
//       <hr/> */}
//       {/* <p>Total <span class="price" style="color:black"><b>$30</b></span></p> */}
//     </div>
//     // </div>
//     // </div>
