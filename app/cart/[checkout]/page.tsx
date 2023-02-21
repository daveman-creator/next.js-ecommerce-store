import Link from 'next/link';
import styles from './page.module.scss';

type MetaData = {
  title: string;

  shortcut: string;
};
export const metadata: MetaData = {
  title: 'CheckOut Page',
  shortcut: '/favicon.ico',
};

export default function CheckOutPage() {
  return (
    <div className={styles.row}>
      <div className={styles.com}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Check Out</h1>
          <form>
            <h3>Billing Address</h3>
            <label htmlFor="fname">
              <i className="fa fa-user" />
              Full Name
            </label>
            <input
              className={styles.input}
              id="fname"
              name="firstName"
              placeholder="Full Name"
              required
            />
            <label htmlFor="email">
              <i className="fa fa-envelope" /> Email
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              placeholder="email"
              required
            />
            <label htmlFor="adr">
              <i className="fa fa-address-card-o" /> Address
            </label>
            <input
              className={styles.input}
              id="adr"
              name="address"
              placeholder="address"
              required
            />
            <label htmlFor="city">
              <i className="fa fa-institution" />
              City
            </label>
            <input
              className={styles.input}
              id="city"
              name="city"
              placeholder="city"
              required
            />
            <div className={styles.col}>
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input
                  className={styles.input}
                  id="state"
                  name="state"
                  placeholder="state"
                  required
                />
              </div>
              <div className={styles.col}>
                <label htmlFor="zip">Zip</label>
                <input
                  className={styles.input}
                  id="zip"
                  name="zip"
                  placeholder="zip"
                  required
                />
              </div>
            </div>

            <div className={styles.col}>
              <h3>Payment</h3>
              <label htmlFor="fname">Accepted Cards</label>
              <div className="icon-container">
                <i className="fa fa-cc-visa" />
                <i className="fa fa-cc-amex" />
                <i className="fa fa-cc-mastercard" />
                <i className="fa fa-cc-discover" />
              </div>
              <label htmlFor="cname">Name on Card</label>
              <input
                className={styles.input}
                id="cname"
                name="cardname"
                placeholder="cardname"
                required
              />
            </div>
            <label htmlFor="ccnum">Credit card number</label>
            <input
              className={styles.input}
              id="ccnum"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
              required
            />
            <label htmlFor="expmonth">Exp Month</label>
            <input
              className={styles.input}
              id="expmonth"
              name="expmonth"
              placeholder="exp month"
              required
            />
            <div className={styles.row}>
              <div className={styles.col}>
                <label htmlFor="expyear">Exp Year</label>
                <input
                  className={styles.input}
                  id="expyear"
                  name="expyear"
                  placeholder="Exp Year"
                  required
                />
              </div>
              <div className="col-50">
                <label htmlFor="cvv">CVV</label>
                <input
                  className={styles.input}
                  id="cvv"
                  name="cvv"
                  placeholder="cvv"
                  required
                />
              </div>
            </div>
            <label>
              <input
                type="checkbox"
                // checked="checked"
                name=""
                required
              />
              Shipping address same as billing
            </label>
            <Link href="/cart/checkout/thankyou">
              <input
                className={styles.input}
                type="submit"
                value="Continue to checkout"
              />
            </Link>
          </form>
        </div>
      </div>
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
