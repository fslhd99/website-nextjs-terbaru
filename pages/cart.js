import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import styles from '../styles/Megastore.css'

export default function Cart() {
  return (
    <>
      <Head>

        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://yoursite.com" />
        <link rel="shortcut icon" href="./assets/images/fav.png" type="image/png" />
        <title>Megastore HTML</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Megastore HTML" />
        <meta property="og:url" content="https://yoursite.com" />
        <meta property="og:description" content="Responsive HTML Template" />
        <meta property="og:site_name" content="Responsive HTML Template" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Megastore HTML" />
        <meta name="twitter:description" content="" />

      </Head>

      <div
        id="CartDrawer"
        className="drawer drawer--right drawer--has-fixed-footer"
        tabIndex={-1}
      >
        <div className="drawer__fixed-header">
          <div className="drawer__header">
            <div className="drawer__title">Your cart</div>
            <div className="drawer__close">
              <button
                type="button"
                className="icon-fallback-text drawer__close-button js-drawer-close"
              >
                <span className="icon icon-x" aria-hidden="true" />
                <span className="fallback-text">Close Cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="drawer__inner">
          <div id="CartContainer" className="drawer__cart">
            <form
              action="./cart"
              method="post"
              noValidate=""
              className="cart ajaxcart"
            >
              <div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer">
                <div className="ajaxcart__product">
                  <div className="ajaxcart__row" data-line={1}>
                    <div className="grid">
                      <div className="grid__item one-quarter">
                        <a
                          href="./product"
                          className="ajaxcart__product-image"
                        >
                          <img
                            src="./assets/images/cart1.png"
                            alt="Raesent Scelerisque Dan"
                          />
                        </a>
                      </div>
                      <div className="grid__item three-quarters">
                        <div className="ajaxcart__product-name--wrapper">
                          <a
                            href="./product"
                            className="ajaxcart__product-name"
                          >
                            Raesent Scelerisque Dan
                          </a>
                          <span className="ajaxcart__product-meta">XS / Red</span>
                        </div>
                        <div className="grid--full display-table">
                          <div className="grid__item display-table-cell one-half">
                            <div className="ajaxcart__qty">
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--minus icon-fallback-text"
                                data-qty={0}
                                data-line={1}
                                aria-label="Reduce item quantity by one"
                              >
                                <span
                                  className="icon icon-minus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  −
                                </span>
                              </button>
                              <input
                                type="text"
                                name="updates[]"
                                className="ajaxcart__qty-num"
                                defaultValue={1}
                                min={0}
                                data-line={1}
                                aria-label="quantity"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--plus icon-fallback-text"
                                data-line={1}
                                data-qty={2}
                                aria-label="Increase item quantity by one"
                              >
                                <span
                                  className="icon icon-plus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  +
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="grid__item display-table-cell one-half text-right">
                            <span className="ajaxcart__price">
                              <span className="money">$60.00 USD</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ajaxcart__product">
                  <div className="ajaxcart__row" data-line={2}>
                    <div className="grid">
                      <div className="grid__item one-quarter">
                        <a
                          href="./product"
                          className="ajaxcart__product-image"
                        >
                          <img
                            src="./assets/images/cart2.png"
                            alt="Reprehenderit qui in ea"
                          />
                        </a>
                      </div>
                      <div className="grid__item three-quarters">
                        <div className="ajaxcart__product-name--wrapper">
                          <a
                            href="./product"
                            className="ajaxcart__product-name"
                          >
                            Reprehenderit qui in ea
                          </a>
                          <span className="ajaxcart__product-meta">
                            Lithograph / Green
                          </span>
                        </div>
                        <div className="grid--full display-table">
                          <div className="grid__item display-table-cell one-half">
                            <div className="ajaxcart__qty">
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--minus icon-fallback-text"
                                data-qty={0}
                                data-line={2}
                                aria-label="Reduce item quantity by one"
                              >
                                <span
                                  className="icon icon-minus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  −
                                </span>
                              </button>
                              <input
                                type="text"
                                name="updates[]"
                                className="ajaxcart__qty-num"
                                defaultValue={1}
                                min={0}
                                data-line={2}
                                aria-label="quantity"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--plus icon-fallback-text"
                                data-line={2}
                                data-qty={2}
                                aria-label="Increase item quantity by one"
                              >
                                <span
                                  className="icon icon-plus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  +
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="grid__item display-table-cell one-half text-right">
                            <span className="ajaxcart__price">
                              <span className="money">$25.00 USD</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ajaxcart__product">
                  <div className="ajaxcart__row" data-line={3}>
                    <div className="grid">
                      <div className="grid__item one-quarter">
                        <a
                          href="./product"
                          className="ajaxcart__product-image"
                        >
                          <img
                            src="./assets/images/cart3.png"
                            alt="Etiam lobortis purus dictum"
                          />
                        </a>
                      </div>
                      <div className="grid__item three-quarters">
                        <div className="ajaxcart__product-name--wrapper">
                          <a
                            href="./product"
                            className="ajaxcart__product-name"
                          >
                            Etiam lobortis purus dictum
                          </a>
                          <span className="ajaxcart__product-meta">Large</span>
                        </div>
                        <div className="grid--full display-table">
                          <div className="grid__item display-table-cell one-half">
                            <div className="ajaxcart__qty">
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--minus icon-fallback-text"
                                data-qty={0}
                                data-line={3}
                                aria-label="Reduce item quantity by one"
                              >
                                <span
                                  className="icon icon-minus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  −
                                </span>
                              </button>
                              <input
                                type="text"
                                name="updates[]"
                                className="ajaxcart__qty-num"
                                defaultValue={1}
                                min={0}
                                data-line={3}
                                aria-label="quantity"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--plus icon-fallback-text"
                                data-line={3}
                                data-qty={2}
                                aria-label="Increase item quantity by one"
                              >
                                <span
                                  className="icon icon-plus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  +
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="grid__item display-table-cell one-half text-right">
                            <span className="ajaxcart__price">
                              <span className="money">$25.00 USD</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ajaxcart__product">
                  <div className="ajaxcart__row" data-line={4}>
                    <div className="grid">
                      <div className="grid__item one-quarter">
                        <a
                          href="./product"
                          className="ajaxcart__product-image"
                        >
                          <img
                            src="./assets/images/cart4.png"
                            alt="Raesent Scelerisque Dan"
                          />
                        </a>
                      </div>
                      <div className="grid__item three-quarters">
                        <div className="ajaxcart__product-name--wrapper">
                          <a
                            href="./product"
                            className="ajaxcart__product-name"
                          >
                            Raesent Scelerisque Dan
                          </a>
                          <span className="ajaxcart__product-meta">XS / Red</span>
                        </div>
                        <div className="grid--full display-table">
                          <div className="grid__item display-table-cell one-half">
                            <div className="ajaxcart__qty">
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--minus icon-fallback-text"
                                data-qty={0}
                                data-line={4}
                                aria-label="Reduce item quantity by one"
                              >
                                <span
                                  className="icon icon-minus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  −
                                </span>
                              </button>
                              <input
                                type="text"
                                name="updates[]"
                                className="ajaxcart__qty-num"
                                defaultValue={1}
                                min={0}
                                data-line={4}
                                aria-label="quantity"
                                pattern="[0-9]*"
                              />
                              <button
                                type="button"
                                className="ajaxcart__qty-adjust ajaxcart__qty--plus icon-fallback-text"
                                data-line={4}
                                data-qty={2}
                                aria-label="Increase item quantity by one"
                              >
                                <span
                                  className="icon icon-plus"
                                  aria-hidden="true"
                                />
                                <span className="fallback-text" aria-hidden="true">
                                  +
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="grid__item display-table-cell one-half text-right">
                            <span className="ajaxcart__price">
                              <span className="money">$78.00 USD</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ajaxcart__footer ajaxcart__footer--fixed">
                <div className="grid--full">
                  <div className="grid__item two-thirds">
                    <p className="ajaxcart__subtotal">Subtotal</p>
                  </div>
                  <div className="grid__item one-third text-right">
                    <p className="ajaxcart__subtotal">
                      <span className="money">$188.00 USD</span>
                    </p>
                  </div>
                </div>
                <p className="ajaxcart__note text-center">
                  Shipping, taxes, and discounts calculated at checkout.
                </p>
                <a
                  href="./cart"
                  className="btn--secondary btn--full cart__checkout"
                  style={{ marginBottom: 10 }}
                >
                  Shopping Cart{" "}
                  <span className="icon icon-arrow-right" aria-hidden="true" />
                </a>
                <button
                  type="submit"
                  className="btn--secondary btn--full cart__checkout"
                  name="checkout"
                >
                  Check Out{" "}
                  <span className="icon icon-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="PageContainer" className="is-moved-by-drawer">
        <header className="">
          <div id="html-section-header" className="html-section">
            <div className="topinfom small--hide">
              <div className="topinfo-text" style={{ backgroundColor: "#cccccc" }}>
                <div className="wrapper">
                  <a href="./collection">
                    50+ Valentine's Day 2019 Food Freebies, Specials and Deals
                  </a>
                </div>
              </div>
            </div>
            <div className="topheader small--hide">
              <div className="wrapper">
                <div className="left-area">
                  <div className="site-nav__item nav-language medium-down--hide">
                    <div className="switcher notranslate">
                      <div className="selected lang-switcher">
                        <a href="./">
                          <img
                            src="./assets/images/en.png"
                            height={16}
                            width={16}
                            alt="en"
                          />{" "}
                          English
                        </a>
                      </div>
                      <div className="option">
                        <a
                          href="./"
                          title="English"
                          className="lang-sub selected"
                        >
                          <img
                            src="./assets/images/en.png"
                            height={16}
                            width={16}
                            alt="en"
                          />{" "}
                          English
                        </a>
                        <a href="./" title="French" className="lang-sub">
                          <img
                            src="./assets/images/fr.png"
                            height={16}
                            width={16}
                            alt="fr"
                          />{" "}
                          French
                        </a>
                        <a href="./" title="German" className="lang-sub">
                          <img
                            src="./assets/images/de.png"
                            height={16}
                            width={16}
                            alt="de"
                          />{" "}
                          German
                        </a>
                        <a href="./" title="Italian" className="lang-sub">
                          <img
                            src="./assets/images/it.png"
                            height={16}
                            width={16}
                            alt="it"
                          />{" "}
                          Italian
                        </a>
                        <a href="./" title="Russian" className="lang-sub">
                          <img
                            src="./assets/images/ru.png"
                            height={16}
                            width={16}
                            alt="ru"
                          />{" "}
                          Russian
                        </a>
                        <a href="./" title="Spanish" className="lang-sub">
                          <img
                            src="./assets/images/es.png"
                            height={16}
                            width={16}
                            alt="es"
                          />{" "}
                          Spanish
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="site-nav__item nav-currency medium-down--hide">
                    <div className="switcher notranslate">
                      <div className="selected currency-switcher">
                        <a href="./">
                          <img
                            src="./assets/images/usd.png"
                            height={16}
                            width={16}
                            alt="en"
                          />{" "}
                          US Dollar
                        </a>
                      </div>
                      <div className="option">
                        <a
                          href="./"
                          title="English"
                          className="curr-sub selected"
                        >
                          <img
                            src="./assets/images/usd.png"
                            height={16}
                            width={16}
                            alt="en"
                          />{" "}
                          USD
                        </a>
                        <a href="./" title="French" className="curr-sub">
                          <img
                            src="./assets/images/euro.png"
                            height={16}
                            width={16}
                            alt="en"
                          />{" "}
                          Euro
                        </a>
                        <a href="./" title="German" className="curr-sub">
                          <img
                            src="./assets/images/pound.png"
                            height={16}
                            width={16}
                            alt="en"
                          />{" "}
                          Pound
                        </a>
                        <a href="./" title="Italian" className="curr-sub">
                          <img
                            src="./assets/images/yen.png"
                            height={16}
                            width={16}
                            alt="en"
                          />{" "}
                          Yen
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="site-nav__item nav-qrcode">
                    <div className="qrcode-title">
                      <a className=" js-app-modal" data-mfp-src="#AppModal">
                        Shop in App
                      </a>
                    </div>
                  </div>
                  <div
                    id="AppModal"
                    className="mfp-hide"
                    style={{ maxWidth: 500, margin: "0 auto" }}
                  >
                    <div className="ios-area">
                      <div className="qrimg-ios">
                        <a href="#">
                          <img src="./assets/images/QR_Code_Tadatheme.png" alt="" />
                        </a>
                      </div>
                      <div className="qropt-ios">
                        <img src="./assets/images/apple-store.png" alt="" />
                      </div>
                    </div>
                    <div className="ios-area">
                      <div className="qrimg-android">
                        <a href="#">
                          <img
                            src="./assets/images/QR_Code_Megastore.png"
                            alt="Image Column"
                          />
                        </a>
                      </div>
                      <div className="qropt-android">
                        <img src="./assets/images/google-play.png" alt="" />
                      </div>
                    </div>
                    <button title="Close (Esc)" type="button" className="mfp-close">
                      ×
                    </button>
                  </div>
                  <div className="social-icons">
                    <div className="social-title">
                      <a className=" js-social-modal" data-mfp-src="#SocialModal">
                        Connect with us
                      </a>
                    </div>
                    <div
                      id="SocialModal"
                      className="mfp-hide"
                      style={{ maxWidth: 500, margin: "0 auto" }}
                    >
                      <div className="inline-list social-icons">
                        <a
                          href="#"
                          title="Twitter"
                          className="icon-social twitter"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                        <a
                          href="#"
                          title="Facebook"
                          className="icon-social facebook"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                        <a
                          href="#"
                          title="Google+"
                          className="icon-social google"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-google-plus" />
                        </a>
                        <a
                          href="#"
                          title="Pinterest"
                          className="icon-social pinterest"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-pinterest" />
                        </a>
                        <a
                          href="#"
                          title="Youtube"
                          className="icon-social youtube"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-youtube" />
                        </a>
                        <a
                          href="#"
                          title="Instagram"
                          className="icon-social instagram"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                        <a
                          href="#"
                          title="translation missing: en.layout.footer.news"
                          className="icon-social atom"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-share-alt" />
                        </a>
                        <a
                          href="#"
                          title="Vimeo"
                          className="icon-social vimeo"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-vimeo" />
                        </a>
                        <a
                          href="#"
                          title="Tumblr"
                          className="icon-social tumblr"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="fa fa-tumblr" />
                        </a>
                      </div>
                      <button
                        title="Close (Esc)"
                        type="button"
                        className="mfp-close"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
                <div className="right-area">
                  <ul>
                    <li className="shopguide-link site-nav__item medium-down--hide">
                      <a href="./pagecontact">Contact Us</a>
                    </li>
                    <li className="customer-link site-nav__item">
                      <a
                        className="site-nav__link site-nav__link--icon js-login-modal"
                        data-mfp-src="#LoginModal"
                      >
                        <i className="icon-customer" aria-hidden="true" />
                        <span className="text">My Account</span>
                      </a>
                      <div
                        id="LoginModal"
                        className="mfp-hide"
                        style={{ maxWidth: 500, margin: "0 auto" }}
                      >
                        <div id="loginBox" className="loginLightbox">
                          <div id="lightboxlogin">
                            <form
                              method="post"
                              action="./account-login.html"
                              id="customer_login"
                              acceptCharset="UTF-8"
                            >
                              <input
                                type="hidden"
                                name="form_type"
                                defaultValue="customer_login"
                              />
                              <input type="hidden" name="utf8" defaultValue="✓" />
                              <div id="bodyBox">
                                <h3>Login</h3>
                                <label
                                  htmlFor="CustomerEmail"
                                  className="hidden-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="customer[email]"
                                  id="CustomerEmail"
                                  className="input-full"
                                  placeholder="Email"
                                />
                                <label
                                  htmlFor="CustomerPassword"
                                  className="hidden-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  defaultValue=""
                                  name="customer[password]"
                                  id="CustomerPassword"
                                  className="input-full"
                                  placeholder="Password"
                                />
                                <input
                                  type="submit"
                                  className="btn btn2 btn--full"
                                  defaultValue="Sign In"
                                />
                                <div>
                                  <p className="forgot">
                                    <a
                                      href="#recover"
                                      onclick="showRecoverPasswordForm();return false;"
                                      id="RecoverPassword"
                                    >
                                      Forgot your password?
                                    </a>
                                  </p>
                                  <p className="create">
                                    <a
                                      href="#create_accountBox"
                                      onclick="showCreateAccountForm();return false;"
                                      id="CreateAccountPassword"
                                    >
                                      Create Account
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div id="recover-password" style={{ display: "none" }}>
                            <h3>Reset your password</h3>
                            <p className="note">
                              We will send you an email to reset your password.
                            </p>
                            <form
                              method="post"
                              action="/account/recover"
                              acceptCharset="UTF-8"
                            >
                              <input
                                type="hidden"
                                name="form_type"
                                defaultValue="recover_customer_password"
                              />
                              <input type="hidden" name="utf8" defaultValue="✓" />
                              <p>
                                <label htmlFor="recover-email" className="label">
                                  Email
                                </label>
                              </p>
                              <input
                                type="email"
                                defaultValue=""
                                size={30}
                                name="email"
                                id="recover-email"
                                className="text"
                              />
                              <div className="action_bottom">
                                <p>
                                  <input
                                    className="btn btn2"
                                    type="submit"
                                    defaultValue="Submit"
                                  />
                                </p>
                                <p>
                                  <a
                                    className="btn--secondary back btn--full"
                                    href="#"
                                    onclick="hideRecoverPasswordForm();return false;"
                                  >
                                    Cancel
                                  </a>
                                </p>
                              </div>
                            </form>
                          </div>
                          <div id="create_accountBox" style={{ display: "none" }}>
                            <h3>Register</h3>
                            <div className="form-vertical">
                              <form
                                method="post"
                                action="/account"
                                id="create_customer"
                                acceptCharset="UTF-8"
                              >
                                <input
                                  type="hidden"
                                  name="form_type"
                                  defaultValue="create_customer"
                                />
                                <input type="hidden" name="utf8" defaultValue="✓" />
                                <label htmlFor="FirstName" className="hidden-label">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  name="customer[first_name]"
                                  id="FirstName"
                                  className="input-full"
                                  placeholder="First Name"
                                />
                                <label htmlFor="LastName" className="hidden-label">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  name="customer[last_name]"
                                  id="LastName"
                                  className="input-full"
                                  placeholder="Last Name"
                                />
                                <label htmlFor="Email" className="hidden-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="customer[email]"
                                  id="Email2"
                                  className="input-full"
                                  placeholder="Email"
                                />
                                <label
                                  htmlFor="CreatePassword"
                                  className="hidden-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  name="customer[password]"
                                  id="CreatePassword"
                                  className="input-full"
                                  placeholder="Password"
                                />
                                <p>
                                  <input
                                    type="submit"
                                    defaultValue="Create"
                                    className="btn btn2 btn--full"
                                  />
                                </p>
                                <p>
                                  <span>
                                    <a
                                      className="btn--secondary btn--full"
                                      href="#"
                                      onclick="hideRecoverPasswordForm();return false;"
                                    >
                                      Cancel
                                    </a>
                                  </span>
                                </p>
                              </form>
                            </div>
                          </div>
                        </div>
                        <button
                          title="Close (Esc)"
                          type="button"
                          className="mfp-close"
                        >
                          ×
                        </button>
                      </div>
                    </li>
                    <li className="site-nav__item compare_link">
                      <a href="./pagecompare">
                        <i
                          className="fa fa-refresh"
                          aria-hidden="true"
                          title="Compare"
                        />
                      </a>
                    </li>
                    <li className="site-nav__item wishlist_link">
                      <a href="./pagewishlist">
                        <i
                          className="fa fa-heart-o"
                          aria-hidden="true"
                          title="Wishlist"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-section-id="header"
              data-section-type="header-section"
              className="header-section"
            >
              <div className="header-wrapper header-wrapper--over-hero">
                <div className="wrapper main-header-wrapper">
                  <div className="grid--full grid--table">
                    {/* Mobile Button */}
                    <div className="grid__item large--hide medium-down--one-quarter small--one-quarter nav-mobile">
                      <div>
                        <button
                          type="button"
                          className="icon-fallback-text site-nav__link js-drawer-open-left site-mobileNav-bar"
                          aria-controls="NavDrawer"
                        >
                          <span
                            className="icon icon-hamburger"
                            aria-hidden="true"
                          />
                          <span className="fallback-text">Site navigation</span>
                        </button>
                      </div>
                    </div>
                    {/* Mobile Logo */}
                    <div
                      className="grid__item large--hide medium-down--two-quarters small--two-quarters logo-mobile"
                      style={{ backgroudColor: "#fff" }}
                    >
                      <a href="./" className="site-header__logo-image">
                        <img src="./assets/images/logo.png" alt="" />
                      </a>
                    </div>
                    {/* Mobile Cart */}
                    <div className="grid__item large--hide medium-down--one-quarter small--one-quarter cart-mobile">
                      <div className="text-right">
                        <a
                          href="./cart"
                          className="site-nav__link cart-link js-drawer-open-right"
                          aria-controls="CartDrawer"
                          aria-expanded="false"
                        >
                          <span className="icon-fallback-text">
                            <span className="icon icon-cart" aria-hidden="true" />
                            <span className="fallback-text">Shopping Cart</span>
                          </span>
                          <span className="cart-link__bubble" />
                        </a>
                      </div>
                    </div>
                    <div className="mobileNav-search large--hide medium-down--one-whole small--one-whole">
                      <form
                        action="./search"
                        method="get"
                        className="input-group search-bar search-bar--drawer"
                        role="search"
                        style={{ position: "relative" }}
                      >
                        <input
                          type="search"
                          name="q"
                          defaultValue=""
                          placeholder="Search something"
                          className="input-group-field"
                          aria-label="Search something"
                          autoComplete="off"
                        />
                        <span className="input-group-btn">
                          <button
                            type="submit"
                            className="btn--secondary icon-fallback-text"
                          >
                            <i className="icon-search" aria-hidden="true" />
                            <span className="fallback-text">Search</span>
                          </button>
                        </span>
                      </form>
                    </div>
                    {/* Desktop Header */}
                    <div className="grid__item large--show medium-down--hide smal--hide">
                      <div className="wrapper-middle">
                        {/* Logo */}
                        <div className="grid__item large--three-tenths logo-wrapper">
                          <a
                            href="./"
                            itemProp="url"
                            className="site-header__logo-image"
                          >
                            <img src="./assets/images/logo.png" alt="" />
                          </a>
                        </div>
                        {/* Search Box */}
                        <div className="grid__item header-search large--five-tenths small--hide">
                          <div className="header-search-inner">
                            <form
                              action="./search"
                              method="get"
                              className="input-group search-bar "
                              role="search"
                              style={{ position: "relative" }}
                            >
                              <input
                                type="hidden"
                                name="type"
                                defaultValue="product"
                              />
                              <input
                                type="search"
                                name="q"
                                defaultValue=""
                                placeholder="Search something"
                                className="input-group-field"
                                aria-label="Search something"
                                autoComplete="off"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="submit"
                                  className=" icon-fallback-text"
                                >
                                  <i className="icon-search" aria-hidden="true" />
                                  <span className="fallback-text">Search</span>
                                </button>
                              </span>
                              <ul
                                className="search-results"
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 40,
                                  display: "none"
                                }}
                              />
                            </form>
                            <div className="header-search-suggestion">
                              <ul className="grid__link">
                                <li>
                                  <a href="./collection">
                                    <span>samsung</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="./collection">
                                    <span>bosch</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="./collection">
                                    <span>kingston</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="./collection">
                                    <span>ensure gold</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="./collection">
                                    <span>converse</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* Cart */}
                        <div className="grid__item header-cart large--two-tenths small--hide">
                          <div className="cart-link site-nav__item">
                            <a
                              href="./cart"
                              className="site-nav__link site-nav__link--icon cart-link js-drawer-open-right"
                              aria-controls="CartDrawer"
                              aria-expanded="false"
                            >
                              <span className="icon-fallback-text">
                                <div className="left-block">
                                  <i
                                    className="fa fa-shopping-basket"
                                    aria-hidden="true"
                                  />
                                  <span className="cart-link__bubble">4</span>
                                </div>
                                <div className="right-block">
                                  <div className="text1">Shopping Cart</div>
                                </div>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className="menu-navigation">
          <div className="navigation-bar menu-bar">
            <div className="wrapper wrapper-allcoll">
              <div className="innerpages-allcoll small--hide">
                <div className="wrap_allcoll">
                  <div
                    id="html-section-home-vertical-menu"
                    className="html-section index-section revolution-slider"
                  >
                    <div className="allcollections-title">
                      <span className="title">Categories</span>
                      <div className="icon-main-toggle navbar-toggle">
                        <i className="fa fa-caret-down" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="allcollections-content have-icon">
                      <ul className="sdcollections-list">
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-1">
                              <img
                                src="./assets/images/cocktail-dress.png"
                                alt=""
                              />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Women’s Clothing
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Hot Categories
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Dresses</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Jackets &amp; Coats
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Sweaters</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Jeans</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Suits &amp; Sets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Blouses &amp; Shirts
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Bottoms</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Skirts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Leggings</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Jeans</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Pants &amp; Capris
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Wide Leg Pants</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Shorts</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./collection">
                                      New arrival plus size
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product1.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Outwear &amp; Jackets
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Basic Jackets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Real Fur</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Down Coats</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Blazers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Trench</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Parkas</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Tops &amp; Sets
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Tank Tops</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Suits &amp; Sets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Jumpsuits</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Rompers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Intimates</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Sleep &amp; Lounge
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./collection">
                                      Sweater Collection
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="assets/images/product2.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Weddings &amp; Events
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Wedding Dresses
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Evening Dresses
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Prom Dresses</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Bridesmaid Dresses
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Flower Girl Dresses
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cocktail Dresses
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Accessories</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Eyewear &amp; Accessories
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Hats &amp; Caps
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Belts &amp; Cummerbunds
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Scarves &amp; Wraps
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Gloves &amp; Mittens
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Prescription Glasses
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      High Quality Formal Dresses
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="assets/images/product3.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-2">
                              <img
                                src="./assets/images/cotton-polo-shirt.png"
                                alt=""
                              />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Men’s Clothing
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Hot Sale</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Hoodies &amp; Sweatshirts
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Jackets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">T-Shirts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Shirts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Sweaters</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Socks</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Bottoms</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Skirts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Leggings</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Jeans</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Pants &amp; Capris
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Wide Leg Pants</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Shorts</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Workout &amp; Training Clothes
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product4.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Underwear &amp; Loungewear
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Boxers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Briefs</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Long Johns</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Men's Sleep &amp; Lounge
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Pajama Sets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Robes</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Outwear &amp; Jackets
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Basic Jackets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Real Fur</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Down Coats</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Blazers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Trench</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Parkas</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">3D Printed Hoodies</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product5.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Accessories</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Scarves</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Skullies &amp; Beanies
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Prescription Glasses
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Gloves &amp; Mittens
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Belts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Bomber Hats</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Fedoras</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Berets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Baseball Caps</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Novelty &amp; Special Use
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cosplay Costumes
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Stage &amp; Dance Wear
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Exotic Apparel</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Sunglasses</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product6.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-3">
                              <img
                                src="./assets/images/mobile-phone-popular-model-nexus-5.png"
                                alt=""
                              />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Cellphones &amp; Accessories
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Mobile Phones
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Octa Core</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Deca Core</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Single SIM Card
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Dual SIM Card</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">4GB RAM</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        5.5-inch Display
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Mobile Phone Parts
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mobile Phone LCDs
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mobile Phone Batteries
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mobile Phone Housings
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mobile Phone Touch Panel
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Flex Cables</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        SIM Card &amp; Tools
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Samsung Smartphones</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product7.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Cases &amp; Covers
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Patterned Cases
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Wallet Cases</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Waterproof Cases
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Leather Cases</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Silicone Cases</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Flip Cases</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">iPhone X Cases</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cases For iPhone 8/8 Plus{" "}
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cases For iPhone 7/7 Plus
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cases For iPhone 6/6 Plus
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Galaxy S8 Cases
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Galaxy S7 Cases
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Xiaomi Cases</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Huawei Cases</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">New iPhone</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product8.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Mobile Phone Accessories
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Power Bank</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Screen Protectors
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mobile Phone Cables
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mobile Phone Chargers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Holders &amp; Stands
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mobile Phone Lenses
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Hot Categories
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Car Chargers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Quick Chargers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">iPhone Cables</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Type C Cables</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        20000mAh Power Bank
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Battery Charger Cases
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Power Bank</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product9.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-4">
                              <img src="./assets/images/web.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Computer, Office, Security
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Laptops</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Gaming Laptops</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Tablets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">2 in 1 Tablets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Phone Call Tablets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">iPad</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Tablet &amp; Laptop Accessories
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Laptop Bags &amp; Cases
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Laptop Batteries
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Tablet Accessories
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Tablet LCD Screens
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Tablet Cases</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Gaming Laptops</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product10.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Security &amp; Protection
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Surveillance Products
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Access Control</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Fire Protection
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Workplace Safety Supplies
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Alarm &amp; Sensor
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Door Intercom</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Storage Devices
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        USB Flash Drives
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Memory Cards</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        External Hard Drives
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">HDD Enclosures</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">SSD</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">IP Cameras</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product11.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Office Electronics
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Printer Supplies
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Office &amp; School Supplies
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">3D Printers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Printers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Scanners</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">3D Pens</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Networking</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Wireless Routers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Network Cards</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">3G Modems</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Modem-Router Combos
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Networking Tools
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Mouse &amp; Keyboards
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product12.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-5">
                              <img src="./assets/images/fan.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Consumer Electronics
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Accessories &amp; Parts
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Digital Cables</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collectionsearch">
                                        Electronic Cigarettes
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Batteries</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Charger</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Home Electronic Accessories
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Digital Gear Bags
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Home Audio &amp; Video
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Television</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">TV Receivers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Projectors</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Audio Amplifiers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">TV Sticks</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Drones</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product13.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Camera &amp; Photo
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Digital Cameras
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Camcorders</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Camera Drones</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Action Cameras</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Photo Studio</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Camera &amp; Photo Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Portable Audio &amp; Video
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Earphones &amp; Headphones
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Speakers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">MP3 Players</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Microphones</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">VR/AR Devices</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">VR/AR Devices</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product14.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Smart Electronics
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Wearable Devices
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Smart Home Appliances
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Smart Wearable Accessories
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Smart Remote Controls
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Smart Watches</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Smart Wristbands
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Video Games</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Handheld Game Players
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Gamepads</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Joysticks</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Stickers</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Smart Watches</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product15.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-6">
                              <img src="./assets/images/diamond.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Jewelry &amp; Watches
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Fine Jewelry
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        925 Silver Jewelry{" "}
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Diamond Jewelry
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Pearls Jewelry</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Various Gemstones
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">K-Gold</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Fine Earrings</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Fine Jewelry Sets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Men's Fine Jewelry
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Wedding &amp; Engagement
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Bridal Jewelry Sets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Engagement Rings
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Wedding Hair Jewelry
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Street Style Jewelry
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product16.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Men's Watches
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Mechanical Watches
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Quartz Watches</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Digital Watches
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Dual Display Watches
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Sports Watches</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Women's Watches
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Sports Watches</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Women's Bracelet Watches
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Dress Watches</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Lovers' Watches
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Children's Watches
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Creative Watches
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Chinese Brand Watches
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product17.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Fashion Jewelry
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Necklaces &amp; Pendants
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Hot Rings</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Trendy Earrings
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Bracelets &amp; Bangles
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Men's Cuff Links
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Fashion Jewelry Sets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Charms</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Body Jewelry</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Beads &amp; DIY Jewelry
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Beads</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Jewelry Findings &amp; Components
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Jewelry Packaging &amp; Display
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Religious Jewelry</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product18.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-7">
                              <img src="./assets/images/shovels.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Home &amp; Garden, Appliance
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Arts</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        DIY Apparel Sewing &amp; Fabric
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Needle Arts &amp; Craft
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Scrapbook &amp; Stamping
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        5D DIY Diamond Painting
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Home Decor</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Painting &amp; Calligraphy
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Wall Stickers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Figurines &amp; Miniatures
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Wall Clocks</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Home Textile</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Cushions</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Curtains</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Bedding Set</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Beach Towels</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Pet Supplies</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product19.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Festival</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Event &amp; Party
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Ballons</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Artificial &amp; Dried Flowers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Gift Bags &amp; Boxes
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Home Storage
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Storage Boxes &amp; Bins
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Laundry Baskets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Drawer Organizers{" "}
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Makeup Organizers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Household Merchandises
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Umbrellas</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Bathroom Scales
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Hand Push Sweepers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Dust Covers</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Birthday</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product20.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Kitchen</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Bakeware</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Drinkware</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Kitchen Tools &amp; Gadgets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Kitchen Knives &amp; Accessories
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Garden Supplies
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Watering Kits</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Flower Pots &amp; Planters
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Repellents</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Garden Water Timers
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Furniture</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Home Furniture</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Office Furniture
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Outdoor Furniture
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Top Furniture Stores
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Hot Small Appliances
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product1.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-8">
                              <img src="./assets/images/shopping-bag.png" alt="" />
                            </span>
                            <a href="h./collection" className="site-nav__text">
                              Bags &amp; Shoes
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Women's Luggage &amp; Bags
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Fashion Backpacks
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Totes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Shoulder Bags</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Wallets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Evening Bags</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Clutches</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Women's Shoes
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Boots</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Snow Boots</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Pumps</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Sandals</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">house slippers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Vulcanize Shoes
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Purse</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product2.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Men's Luggage &amp; Bags
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Men's Backpacks
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Crossbody Bags</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Briefcases</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Luggage &amp; Travel Bags
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Wallets</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Men's Shoes</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Basic boots</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Men's Casual Shoes
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Chelsea boots</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        motorcycle boots
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Snow Boots</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Vulcanized Shoes
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Ankle Boots</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product3.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Other Bags &amp; Accessories
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Kids &amp; Baby Bags
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cosmetic Bags &amp; Cases
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Coin Purses &amp; Holders
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Luggage Cover</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Passport Covers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Bag Parts &amp; Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Bestselling Shoes
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Fashion Sneakers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Flat Sandals</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Chunky Sandals</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Vulcanized Shoes
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Men's Loafers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Shoes &amp; Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Men's Oxfords</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product4.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-9">
                              <img src="./assets/images/horse.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Toys, Kids &amp; Baby
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Baby Clothing
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Baby Dresses</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collectionsearch">
                                        Baby Rompers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Clothing Sets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Baby Outerwear</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Baby Pants</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Baby Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Toys &amp; Hobbies
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">RC Helicopters</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Stuffed &amp; Plush Animals
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Action &amp; Toy Figures
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Blocks</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Electronic Pets
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Marvel's The Avengers
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product5.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Girls Clothing
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Dresses</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Clothing Sets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Tops &amp; Tees
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Sleepwear &amp; Robes
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Accessories</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Family Matching Outfits
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Shoes &amp; Bags
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Baby’s First Walkers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Girls´ Shoes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Boys’ Shoes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">School Bags</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Kids´ Wallets</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Blocks</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product6.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Boys Clothing
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Clothing Sets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">T-Shirts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Hoodies &amp; Sweatshirts
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Outerwear &amp; Coats
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Jeans</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Accessories</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Baby &amp; Mother
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Nappy Changing</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Activity &amp; Gear
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Baby Care</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Backpacks &amp; Carriers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Maternity</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Girls’ Clothing Sets
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product7.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-10">
                              <img src="./assets/images/trophy.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Sports &amp; Outdoors
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Swimming</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Bikini Set</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        One-Piece Suits
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Two-Piece Suits
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Cover-Ups</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Men's Swimwear</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Children's Swimwear
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Cycling</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Bicycles</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Bicycle Frames</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Bicycle Lights</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Bicycle Helmets
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cycling Jerseys
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Cycling Eyewear
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Running Shoes</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product8.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Sneakers</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Running Shoes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Hiking Shoes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Soccer Shoes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Skateboarding Shoes
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Dance Shoes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Basketball Shoes
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Fishing</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Fishing Reels</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Fishing Lures</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Fishing Lines</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Fishing Rods</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Rod Combos</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Fishing Tackle Boxes
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Guitars</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product9.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Sportswear</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Jerseys</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Hiking Jackets</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Pants</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Shorts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Sports Bags</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Sports Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Other Sports Equipment
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Camping &amp; Hiking
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Hunting</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Golf</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Fitness &amp; Bodybuilding
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Skiing &amp; Snowboarding
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Musical Instruments
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Bicycles</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product10.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-11">
                              <img src="./assets/images/heart.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Health &amp; Beauty, Hair
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Hair Weaves</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Bundles With Closure
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">3/4 Bundles</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Pre-Colored Weaves
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Closures</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Top Quality Virgin Hair
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Remy Hair Weaves
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Lace Wigs</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collectionsearch">
                                        Lace Front Wigs
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Full Lace Wig</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">360 Lace Wigs</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        250 Density Lace Wigs
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Synthetic Lace Wigs
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Hair Braids</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Clip-in Hair Extensions
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product11.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">Makeup</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Beauty Essentials
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Makeup Set</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Makeup Brushes</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Eyeshadow</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Lipstick</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        False Eyelashes
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">
                                    Nail Art &amp; Tools
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Nail Art Kits</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Nail Gel</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Nail Dryers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Nail Glitters</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Stickers &amp; Decals
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Nail Decorations
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Fusion Hair Extensions
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product12.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Beauty Tools
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Curling Iron</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Straightening Irons
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Electric Face Cleanser
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Facial Steamer</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Face Skin Care Tools
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Massage &amp; Relaxation
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-2">
                                <ul>
                                  <li className="site-nav__heading">Skin Care</li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Essential Oil</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Face Mask</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Facial Care</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Sun care</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Body Care</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Razor</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Tape Hair Extensions
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product13.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                          aria-haspopup="true"
                        >
                          <p className="site-nav__link">
                            <span className="site-nav__icon icon-12">
                              <img src="./assets/images/motorcycle.png" alt="" />
                            </span>
                            <a href="./collection" className="site-nav__text">
                              Automobiles &amp; Motorcycles
                            </a>
                            <span
                              className="fa fa-caret-right click_arrow"
                              aria-hidden="true"
                            />
                          </p>
                          <ul
                            className="site-nav__dropdown"
                            style={{ zIndex: 999 }}
                          >
                            <li className="column-1 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Auto Replacement Parts
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">Car Lights</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Interior Parts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Exterior Parts</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Spark Plugs &amp; Ignition System
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Automobiles Sensors
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Brake System</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Windscreen Wipers &amp; Windows
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Other Replacement Parts
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      ATV,RV,Boat &amp; Other Vehicle
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product14.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-2 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Car Electronics
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Car Multimedia Player
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        DVR/Dash Camera
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Alarm Systems &amp; Security
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">GPS Trackers</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Car Radios</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Car Monitors</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Car Refrigerators
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Vehicle Camera</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Vehicle GPS</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Jump Starter</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">
                                      Travel &amp; Roadway Product
                                    </a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product15.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="column-3 grid__item one-third">
                              <div className="row-1">
                                <ul>
                                  <li className="site-nav__heading">
                                    Motorcycle Accessories &amp; Parts
                                  </li>
                                  <ul className="sub">
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Body &amp; Frame
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Helmet &amp; Protective Gear
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Lighting</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Brake System</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Exhaust &amp; Exhaust Systems
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">Helmet Headset</a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Motorcycle Seat Covers
                                      </a>
                                    </li>
                                    <li className="site-nav__link">
                                      <a href="./collection">
                                        Other Motorcycle Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                              <div className="row-3">
                                <div className="box-border">
                                  <div className="site-nav__text">
                                    <a href="./product">Diagnostic Tools</a>
                                  </div>
                                  <div className="site-nav__banner">
                                    <a href="./product">
                                      <img
                                        src="./assets/images/product16.png"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="html-section-navigation" className="html-section">
                <div
                  data-section-id="navigation"
                  data-section-type="horizontal-menu-section"
                >
                  <div className="grid--full grid--table">
                    <div
                      className="horizontal-menu desktop-menu medium-down--hide"
                      style={{}}
                    >
                      <ul className="site-nav site-nav--init" id="AccessibleNav">
                        <li
                          className="site-nav__item site-nav__expanded-item  active"
                          data-url="/"
                        >
                          <a href="./" className="site-nav__link">
                            <span>Home</span>
                          </a>
                        </li>
                        <li
                          className="site-nav__item site-nav__expanded-item site-nav--has-dropdown dropdown navigation desknav mega-menu"
                          aria-haspopup="true"
                        >
                          <a href="./collection" className="site-nav__link">
                            <span>Collections</span>
                            <span
                              className="icon icon-arrow-down"
                              aria-hidden="true"
                            />
                          </a>
                          <ul
                            className="site-nav__dropdown column-5"
                            style={{ maxWidth: 1220 }}
                          >
                            <li className="site-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                              <ul>
                                <li className="site-nav__item site-nav__item-title">
                                  Fashion Collection
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Dresses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Blouses &amp; Shirts</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Jumpsuits</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Jackets</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Trench Coats</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Tops &amp; Tees</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Hoodies</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="site-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                              <ul>
                                <li className="site-nav__item site-nav__item-title">
                                  Jewelry Collection
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Pendant Necklaces</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Rings</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Hot Earrings</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Popular Bracelets</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Jewelry Sets</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Beads for DIY Jewelry</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Men's Brand Watches</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="site-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                              <ul>
                                <li className="site-nav__item site-nav__item-title">
                                  Beauty Collection
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Human Hair</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Natural Color Weave</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Pre-Colored Weave</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Nail Polish</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Nail Tools</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Makeup</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Face Care</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="site-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                              <ul>
                                <li className="site-nav__item site-nav__item-title">
                                  Furniture Collection
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Space Home Store</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Living Room</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Bedroom</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Kitchen</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Bathroom</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Dining Room</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Children's Room</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="site-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                              <ul>
                                <li className="site-nav__item site-nav__item-title">
                                  Weddings &amp; Events
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Wedding Dresses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Evening Dresses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Prom Dresses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Bridesmaid Dresses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Flower Girl Dresses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Cocktail Dresses</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav__expanded-item site-nav--has-dropdown dropdown navigation desknav mega-menu"
                          aria-haspopup="true"
                        >
                          <a href="./collection" className="site-nav__link">
                            <span>New Arrivals</span>
                            <span
                              className="icon icon-arrow-down"
                              aria-hidden="true"
                            />
                          </a>
                          <ul
                            className="site-nav__dropdown column-5"
                            style={{ maxWidth: 1220 }}
                          >
                            <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                              <div className="grid-view-item">
                                <div className="grid-normal-display">
                                  <div className="grid__image product-image">
                                    <a
                                      className="grid-view-item__link"
                                      href="./product"
                                    >
                                      <img
                                        className="grid-view-item__image"
                                        src="./assets/images/product1.png"
                                        alt="Consequuntur magni dolores"
                                      />
                                      <img
                                        className="hover-image"
                                        src="./assets/images/product1x.png"
                                        alt="Consequuntur magni dolores"
                                        title="Consequuntur magni dolores"
                                      />
                                    </a>
                                    <div className="product-label">
                                      <div className="label-element deal-label">
                                        <span
                                          style={{
                                            color: "#ff5722",
                                            backgroundColor: "#ffd839"
                                          }}
                                        >
                                          20% off
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="quickbuy">
                                    <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                      <div className="effect-ajax-cart">
                                        <form
                                          action="./product"
                                          method="post"
                                          encType="multipart/form-data"
                                          className="AddToCartForm form-vertical"
                                        >
                                          <input
                                            type="hidden"
                                            name="quantity"
                                            defaultValue={1}
                                          />
                                          <div className="product-single__add-to-cart">
                                            <button
                                              type="submit"
                                              name="add"
                                              className="btn AddToCart"
                                            >
                                              <span className="AddToCartText">
                                                Add to Cart
                                              </span>
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="group-information style-">
                                  <div className="grid-view-item__vendor">
                                    APPLE
                                  </div>
                                  <div className="h4 grid-view-item__title">
                                    <a href="./product">
                                      Consequuntur magni dolores
                                    </a>
                                  </div>
                                  <div className="price-and-ship">
                                    <div className="grid-view-item__meta grid__item large--three-quarters">
                                      <s className="product-price__price">
                                        <span className="money">$24.99 USD</span>
                                      </s>
                                      <span className="product-price__price product-price__sale">
                                        <span className="money">$19.99 USD</span>
                                        <span className="product-price__sale-label">
                                          On Sale
                                        </span>
                                      </span>
                                    </div>
                                    <div className="shipcode grid__item large--one-quarter">
                                      <img
                                        src="./assets/images/freeshipicon.svg"
                                        alt="free shipping icon"
                                      />
                                    </div>
                                  </div>
                                  <div className="group-functions">
                                    <div className="rating-star grid__item one-half">
                                      <span className="spr-badge" data-rating={5.0}>
                                        <span className="spr-starrating spr-badge-starrating">
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                        </span>
                                      </span>
                                    </div>
                                    <ul className="action-button grid__item one-half">
                                      <li className="button-wishlist">
                                        <a
                                          className="wish-list wlc wl-1552981229660"
                                          data-wishlistid={1552981229660}
                                          title="Add to Wishlist"
                                        >
                                          <span className="">
                                            <i className="fa fa-heart-o" />
                                          </span>
                                        </a>
                                      </li>
                                      <li className="button-compare">
                                        <a
                                          className="wish-list cmc cm-1552981229660"
                                          data-compareid={1552981229660}
                                          title="Add to Compare"
                                        >
                                          <span className="">
                                            <i className="fa fa-exchange" />
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                              <div className="grid-view-item">
                                <div className="grid-normal-display">
                                  <div className="grid__image product-image">
                                    <a
                                      className="grid-view-item__link"
                                      href="./product"
                                    >
                                      <img
                                        className="grid-view-item__image"
                                        src="./assets/images/product3.png"
                                        alt="Consequuntur magni dolores"
                                      />
                                      <img
                                        className="hover-image"
                                        src="./assets/images/product3x.png"
                                        alt="Consequuntur magni dolores"
                                        title="Consequuntur magni dolores"
                                      />
                                    </a>
                                  </div>
                                  <div className="quickbuy">
                                    <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                      <div className="effect-ajax-cart">
                                        <form
                                          action="./product"
                                          method="post"
                                          encType="multipart/form-data"
                                          className="AddToCartForm form-vertical"
                                        >
                                          <input
                                            type="hidden"
                                            name="quantity"
                                            defaultValue={1}
                                          />
                                          <div className="product-single__add-to-cart">
                                            <button
                                              type="submit"
                                              name="add"
                                              className="btn AddToCart"
                                            >
                                              <span className="AddToCartText">
                                                Add to Cart
                                              </span>
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="group-information style-">
                                  <div className="grid-view-item__vendor">
                                    KingStone
                                  </div>
                                  <div className="h4 grid-view-item__title">
                                    <a href="./product">
                                      Consequuntur magni dolores
                                    </a>
                                  </div>
                                  <div className="price-and-ship">
                                    <div className="grid-view-item__meta grid__item large--three-quarters">
                                      <s className="product-price__price">
                                        <span className="money">$24.99 USD</span>
                                      </s>
                                      <span className="product-price__price product-price__sale">
                                        <span className="money">$19.99 USD</span>
                                        <span className="product-price__sale-label">
                                          On Sale
                                        </span>
                                      </span>
                                    </div>
                                    <div className="shipcode grid__item large--one-quarter"></div>
                                  </div>
                                  <div className="group-functions">
                                    <div className="rating-star grid__item one-half">
                                      <span className="spr-badge" data-rating={5.0}>
                                        <span className="spr-starrating spr-badge-starrating">
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                        </span>
                                      </span>
                                    </div>
                                    <ul className="action-button grid__item one-half">
                                      <li className="button-wishlist">
                                        <a
                                          className="wish-list wlc wl-1559895399994"
                                          data-wishlistid={1559895399994}
                                          title="Add to Wishlist"
                                        >
                                          <span className="">
                                            <i className="fa fa-heart-o" />
                                          </span>
                                        </a>
                                      </li>
                                      <li className="button-compare">
                                        <a
                                          className="wish-list cmc cm-1559895399994"
                                          data-compareid={1559895399994}
                                          title="Add to Compare"
                                        >
                                          <span className="">
                                            <i className="fa fa-exchange" />
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                              <div className="grid-view-item">
                                <div className="grid-normal-display">
                                  <div className="grid__image product-image">
                                    <a
                                      className="grid-view-item__link"
                                      href="./product"
                                    >
                                      <img
                                        className="grid-view-item__image"
                                        src="./assets/images/product4.png"
                                        alt="Consequuntur magni dolores"
                                      />
                                      <img
                                        className="hover-image"
                                        src="./assets/images/product4x.png"
                                        alt="Consequuntur magni dolores"
                                        title="Consequuntur magni dolores"
                                      />
                                    </a>
                                    <div className="product-label">
                                      <div className="label-element deal-label">
                                        <span
                                          style={{
                                            color: "#ff5722",
                                            backgroundColor: "#ffd839"
                                          }}
                                        >
                                          20% off
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="quickbuy">
                                    <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                      <div className="effect-ajax-cart">
                                        <form
                                          action="./product"
                                          method="post"
                                          encType="multipart/form-data"
                                          className="AddToCartForm form-vertical"
                                        >
                                          <input
                                            type="hidden"
                                            name="quantity"
                                            defaultValue={1}
                                          />
                                          <div className="product-single__add-to-cart">
                                            <button
                                              type="submit"
                                              name="add"
                                              className="btn AddToCart"
                                            >
                                              <span className="AddToCartText">
                                                Add to Cart
                                              </span>
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="group-information style-">
                                  <div className="grid-view-item__vendor">
                                    SAMSUNG
                                  </div>
                                  <div className="h4 grid-view-item__title">
                                    <a href="./product">
                                      Consequuntur magni dolores
                                    </a>
                                  </div>
                                  <div className="price-and-ship">
                                    <div className="grid-view-item__meta grid__item large--three-quarters">
                                      <s className="product-price__price">
                                        <span className="money">$24.99 USD</span>
                                      </s>
                                      <span className="product-price__price product-price__sale">
                                        <span className="money">$19.99 USD</span>
                                        <span className="product-price__sale-label">
                                          On Sale
                                        </span>
                                      </span>
                                    </div>
                                    <div className="shipcode grid__item large--one-quarter"></div>
                                  </div>
                                  <div className="group-functions">
                                    <div className="rating-star grid__item one-half">
                                      <span
                                        className="spr-badge"
                                        id="spr_badge_1419620057177"
                                        data-rating={0.0}
                                      >
                                        <span className="spr-starrating spr-badge-starrating">
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                        </span>
                                        <span className="spr-badge-caption">
                                          No reviews
                                        </span>
                                      </span>
                                    </div>
                                    <ul className="action-button grid__item one-half">
                                      <li className="button-wishlist">
                                        <a
                                          className="wish-list wlc wl-1554438559100"
                                          data-wishlistid={1554438559100}
                                          title="Add to Wishlist"
                                        >
                                          <span className="">
                                            <i className="fa fa-heart-o" />
                                          </span>
                                        </a>
                                      </li>
                                      <li className="button-compare">
                                        <a
                                          className="wish-list cmc cm-1554438559100"
                                          data-compareid={1554438559100}
                                          title="Add to Compare"
                                        >
                                          <span className="">
                                            <i className="fa fa-exchange" />
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                              <div className="grid-view-item">
                                <div className="grid-normal-display">
                                  <div className="grid__image product-image">
                                    <a
                                      className="grid-view-item__link"
                                      href="./product"
                                    >
                                      <img
                                        className="grid-view-item__image"
                                        src="./assets/images/product2.png"
                                        alt="Consequuntur magni dolores"
                                      />
                                      <img
                                        className="hover-image"
                                        src="./assets/images/product2x.png"
                                        alt="Consequuntur magni dolores"
                                        title="Consequuntur magni dolores"
                                      />
                                    </a>
                                  </div>
                                  <div className="quickbuy">
                                    <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                      <div className="effect-ajax-cart">
                                        <form
                                          action="./product"
                                          method="post"
                                          encType="multipart/form-data"
                                          className="AddToCartForm form-vertical"
                                        >
                                          <input
                                            type="hidden"
                                            name="quantity"
                                            defaultValue={1}
                                          />
                                          <div className="product-single__add-to-cart">
                                            <button
                                              type="submit"
                                              name="add"
                                              className="btn AddToCart"
                                            >
                                              <span className="AddToCartText">
                                                Add to Cart
                                              </span>
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="group-information style-">
                                  <div className="grid-view-item__vendor">
                                    BOSCH
                                  </div>
                                  <div className="h4 grid-view-item__title">
                                    <a href="./product">
                                      Consequuntur magni dolores
                                    </a>
                                  </div>
                                  <div className="price-and-ship">
                                    <div className="grid-view-item__meta grid__item large--three-quarters">
                                      <s className="product-price__price">
                                        <span className="money">$24.99 USD</span>
                                      </s>
                                      <span className="product-price__price product-price__sale">
                                        <span className="money">$19.99 USD</span>
                                        <span className="product-price__sale-label">
                                          On Sale
                                        </span>
                                      </span>
                                    </div>
                                    <div className="shipcode grid__item large--one-quarter"></div>
                                  </div>
                                  <div className="group-functions">
                                    <div className="rating-star grid__item one-half">
                                      <span className="spr-badge" data-rating={5.0}>
                                        <span className="spr-starrating spr-badge-starrating">
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                        </span>
                                      </span>
                                    </div>
                                    <ul className="action-button grid__item one-half">
                                      <li className="button-wishlist">
                                        <a
                                          className="wish-list wlc wl-1559895406376"
                                          data-wishlistid={1559895406376}
                                          title="Add to Wishlist"
                                        >
                                          <span className="">
                                            <i className="fa fa-heart-o" />
                                          </span>
                                        </a>
                                      </li>
                                      <li className="button-compare">
                                        <a
                                          className="wish-list cmc cm-1559895406376"
                                          data-compareid={1559895406376}
                                          title="Add to Compare"
                                        >
                                          <span className="">
                                            <i className="fa fa-exchange" />
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                              <div className="grid-view-item">
                                <div className="grid-normal-display">
                                  <div className="grid__image product-image">
                                    <a
                                      className="grid-view-item__link"
                                      href="./product"
                                    >
                                      <img
                                        className="grid-view-item__image"
                                        src="./assets/images/product5.png"
                                        alt="Consequuntur magni dolores"
                                      />
                                      <img
                                        className="hover-image"
                                        src="./assets/images/product5x.png"
                                        alt="Consequuntur magni dolores"
                                        title="Consequuntur magni dolores"
                                      />
                                    </a>
                                  </div>
                                  <div className="quickbuy">
                                    <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                      <div className="effect-ajax-cart">
                                        <form
                                          action="./product"
                                          method="post"
                                          encType="multipart/form-data"
                                          className="AddToCartForm form-vertical"
                                        >
                                          <input
                                            type="hidden"
                                            name="quantity"
                                            defaultValue={1}
                                          />
                                          <div className="product-single__add-to-cart">
                                            <button
                                              type="submit"
                                              name="add"
                                              className="btn AddToCart"
                                            >
                                              <span className="AddToCartText">
                                                Add to Cart
                                              </span>
                                            </button>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="group-information style-">
                                  <div className="grid-view-item__vendor">ACME</div>
                                  <div className="h4 grid-view-item__title">
                                    <a href="./product">
                                      Consequuntur magni dolores
                                    </a>
                                  </div>
                                  <div className="price-and-ship">
                                    <div className="grid-view-item__meta grid__item large--three-quarters">
                                      <s className="product-price__price">
                                        <span className="money">$24.99 USD</span>
                                      </s>
                                      <span className="product-price__price product-price__sale">
                                        <span className="money">$19.99 USD</span>
                                        <span className="product-price__sale-label">
                                          On Sale
                                        </span>
                                      </span>
                                    </div>
                                    <div className="shipcode grid__item large--one-quarter">
                                      <img
                                        src="./assets/images/freeshipicon.svg"
                                        alt="free shipping icon"
                                      />
                                    </div>
                                  </div>
                                  <div className="group-functions">
                                    <div className="rating-star grid__item one-half">
                                      <span className="spr-badge" data-rating={5.0}>
                                        <span className="spr-starrating spr-badge-starrating">
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                          <i className="spr-icon spr-icon-star" />
                                        </span>
                                      </span>
                                    </div>
                                    <ul className="action-button grid__item one-half">
                                      <li className="button-wishlist">
                                        <a
                                          className="wish-list wlc wl-1559895404763"
                                          data-wishlistid={1559895404763}
                                          title="Add to Wishlist"
                                        >
                                          <span className="">
                                            <i className="fa fa-heart-o" />
                                          </span>
                                        </a>
                                      </li>
                                      <li className="button-compare">
                                        <a
                                          className="wish-list cmc cm-1559895404763"
                                          data-compareid={1559895404763}
                                          title="Add to Compare"
                                        >
                                          <span className="">
                                            <i className="fa fa-exchange" />
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav__expanded-item site-nav--has-dropdown dropdown navigation desknav mega-menu"
                          aria-haspopup="true"
                          data-url="/collections/all"
                        >
                          <a href="./collection" className="site-nav__link">
                            <span>Special Deals</span>
                            <span
                              className="icon icon-arrow-down"
                              aria-hidden="true"
                            />
                          </a>
                          <ul
                            className="site-nav__dropdown column-5"
                            style={{ maxWidth: 1220 }}
                          >
                            <li className="site-nav__item column-text grid__item small--one-whole medium-up--one-third one-fifth">
                              <div className="heading">Jewelry Collection</div>
                              <div className="content">
                                <ul>
                                  <li>Rings</li>
                                  <li>Hot Earrings</li>
                                  <li>Popular Bracelets</li>
                                  <li>Jewelry Sets</li>
                                  <li>Beads for DIY Jewelry</li>
                                  <li>Men's Brand Watches</li>
                                  <li>Pendant Necklaces</li>
                                </ul>
                              </div>
                            </li>
                            <li className="site-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                              <ul>
                                <li className="site-nav__item site-nav__item-title">
                                  Fashion Collection
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Dresses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Blouses &amp; Shirts</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Jumpsuits</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Jackets</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Trench Coats</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Tops &amp; Tees</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Hoodies</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="site-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                              <ul>
                                <li className="site-nav__item site-nav__item-title">
                                  Accessories
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Eyewear &amp; Accessories</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Hats &amp; Caps</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Belts &amp; Cummerbunds</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Scarves &amp; Wraps</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Gloves &amp; Mittens</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Prescription Glasses</span>
                                  </a>
                                </li>
                                <li className="site-nav__item">
                                  <a
                                    href="./collection"
                                    className="site-nav__link"
                                  >
                                    <span>Scarves &amp; Wraps</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="site-nav__item column-image grid__item small--one-whole medium-up--one-third one-fifth">
                              <a href="./collection">
                                <img src="./assets/images/mega-img1.png" alt="" />
                              </a>
                            </li>
                            <li className="site-nav__item column-image grid__item small--one-whole medium-up--one-third one-fifth">
                              <a href="./collection">
                                <img src="./assets/images/mega-img2.png" alt="" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav__expanded-item site-nav--has-dropdown dropdown navigation desknav dropdown-menu"
                          aria-haspopup="true"
                          data-url="/collections/all"
                        >
                          <a href="./collection" className="site-nav__link">
                            <span>Pages</span>
                            <span
                              className="icon icon-arrow-down"
                              aria-hidden="true"
                            />
                          </a>
                          <ul
                            className="site-nav__dropdown column-1"
                            style={{ maxWidth: 300 }}
                          >
                            <li
                              className="site-nav__item site-nav__expanded-item site-nav--has-dropdown  dropdown navigation desknav"
                              aria-haspopup="true"
                            >
                              <a
                                href="./pageabout"
                                className="site-nav__link"
                              >
                                <span>About Us</span>
                                <span
                                  className="icon icon-arrow-down"
                                  aria-hidden="true"
                                />
                              </a>
                              <ul className="site-nav__dropdown">
                                <li className="li-sub-mega">
                                  <a tabIndex={-1} href="./pageabout">
                                    Services
                                  </a>
                                </li>
                                <li className="li-sub-mega">
                                  <a tabIndex={-1} href="./pageabout">
                                    Shopping Guide
                                  </a>
                                </li>
                                <li className="li-sub-mega">
                                  <a tabIndex={-1} href="./pageabout">
                                    Typography
                                  </a>
                                </li>
                                <li className="li-sub-mega">
                                  <a tabIndex={-1} href="./pageabout">
                                    Store Location
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="site-nav__item site-nav__expanded-item">
                              <a
                                href="./pagecontact"
                                className="site-nav__link"
                              >
                                <span>Contact Us</span>
                              </a>
                            </li>
                            <li className="site-nav__item site-nav__expanded-item">
                              <a href="./pagefaqs" className="site-nav__link">
                                <span>FAQ</span>
                              </a>
                            </li>
                            <li className="site-nav__item site-nav__expanded-item">
                              <a
                                href="./pageabout"
                                className="site-nav__link"
                              >
                                <span>Heading</span>
                              </a>
                            </li>
                            <li className="site-nav__item site-nav__expanded-item">
                              <a
                                href="./collection"
                                className="site-nav__link"
                              >
                                <span>Sale Off</span>
                              </a>
                            </li>
                            <li className="site-nav__item site-nav__expanded-item">
                              <a
                                href="./pagewishlist"
                                className="site-nav__link"
                              >
                                <span>Wishlist</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="site-nav__item site-nav__expanded-item "
                          data-url="/pages/contact-us"
                        >
                          <a href="./pagecontact" className="site-nav__link">
                            <span>Contact Us</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="horizontal-menu mobile-menu large--hide">
                      <div id="MobileNav" className="mobileNav-left">
                        <div className="mobileNav-header">
                          <div className="mobileNav-close">
                            <button
                              type="button"
                              className="icon-fallback-text mobileNav-icon-close"
                            >
                              <span className="icon icon-x" aria-hidden="true" />
                              <span className="fallback-text">Close menu</span>
                            </button>
                          </div>
                        </div>
                        <div className="mobileNav-menu">
                          <ul className="mobileNav-nav">
                            <li className="mobile-nav__item active" data-url="/">
                              <a href="./" className="site-nav__link">
                                <span>Home</span>
                              </a>
                            </li>
                            <li
                              className="mobile-nav__item mobile-nav__item-menulv1 mega-menu"
                              data-father="none"
                              data-url="/collections/all"
                            >
                              <div className="mobile-nav__has-sublist">
                                <a
                                  href="./collection"
                                  className="mobile-nav__link"
                                >
                                  Collections
                                </a>
                                <div className="mobile-nav__toggle">
                                  <button
                                    type="button"
                                    className="mobile-nav__toggle-btn icon-fallback-text mobileNav-menulv1-button"
                                  >
                                    <span className="icon-fallback-text mobile-nav__toggle-open">
                                      <span
                                        className="icon icon-plus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Expand submenu
                                      </span>
                                    </span>
                                    <span className="icon-fallback-text mobile-nav__toggle-close">
                                      <span
                                        className="icon icon-minus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Collapse submenu
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <ul className="mobile-nav__sublist mobile-nav__sublist-menulv1 megamenu__dropdown megamenu_1">
                                <li className="mobile-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                                  <ul>
                                    <li className="site-nav__item site-nav__item-title">
                                      Fashion Collection
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Dresses</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Blouses &amp; Shirts</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Jumpsuits</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Jackets</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Trench Coats</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Tops &amp; Tees</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Hoodies</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mobile-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                                  <ul>
                                    <li className="site-nav__item site-nav__item-title">
                                      Jewelry Collection
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Pendant Necklaces</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Rings</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Hot Earrings</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Popular Bracelets</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Jewelry Sets</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Beads for DIY Jewelry</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Men's Brand Watches</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mobile-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                                  <ul>
                                    <li className="site-nav__item site-nav__item-title">
                                      Beauty Collection
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Human Hair</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Natural Color Weave</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Pre-Colored Weave</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Nail Polish</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Nail Tools</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Makeup</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Face Care</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mobile-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                                  <ul>
                                    <li className="site-nav__item site-nav__item-title">
                                      Furniture Collection
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Space Home Store</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Living Room</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Bedroom</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Kitchen</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Bathroom</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Dining Room</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Children's Room</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mobile-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                                  <ul>
                                    <li className="site-nav__item site-nav__item-title">
                                      Weddings &amp; Events
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Wedding Dresses</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Evening Dresses</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Prom Dresses</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Bridesmaid Dresses</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Flower Girl Dresses</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Cocktail Dresses</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mobile-nav__item mobile-nav__item-menulv1 mega-menu"
                              data-father="none"
                              data-url="/collections/all"
                            >
                              <div className="mobile-nav__has-sublist">
                                <a
                                  href="./collection"
                                  className="mobile-nav__link"
                                >
                                  New Arrivals
                                </a>
                                <div className="mobile-nav__toggle">
                                  <button
                                    type="button"
                                    className="mobile-nav__toggle-btn icon-fallback-text mobileNav-menulv1-button"
                                  >
                                    <span className="icon-fallback-text mobile-nav__toggle-open">
                                      <span
                                        className="icon icon-plus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Expand submenu
                                      </span>
                                    </span>
                                    <span className="icon-fallback-text mobile-nav__toggle-close">
                                      <span
                                        className="icon icon-minus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Collapse submenu
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <ul className="mobile-nav__sublist mobile-nav__sublist-menulv1 megamenu__dropdown megamenu_1">
                                <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                                  <div className="grid-view-item">
                                    <div className="grid-normal-display">
                                      <div className="grid__image product-image">
                                        <a
                                          className="grid-view-item__link"
                                          href="./product"
                                        >
                                          <img
                                            className="grid-view-item__image"
                                            src="./assets/images/product1.png"
                                            alt="Consequuntur magni dolores"
                                          />
                                          <img
                                            className="hover-image"
                                            src="./assets/images/product1x.png"
                                            alt="Consequuntur magni dolores"
                                            title="Consequuntur magni dolores"
                                          />
                                        </a>
                                        <div className="product-label">
                                          <div className="label-element deal-label">
                                            <span
                                              style={{
                                                color: "#ff5722",
                                                backgroundColor: "#ffd839"
                                              }}
                                            >
                                              20% off
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="quickbuy">
                                        <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                          <div className="effect-ajax-cart">
                                            <form
                                              action="./product"
                                              method="post"
                                              encType="multipart/form-data"
                                              className="AddToCartForm form-vertical"
                                            >
                                              <input
                                                type="hidden"
                                                name="quantity"
                                                defaultValue={1}
                                              />
                                              <div className="product-single__add-to-cart">
                                                <button
                                                  type="submit"
                                                  name="add"
                                                  className="btn AddToCart"
                                                >
                                                  <span className="AddToCartText">
                                                    Add to Cart
                                                  </span>
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group-information style-">
                                      <div className="grid-view-item__vendor">
                                        APPLE
                                      </div>
                                      <div className="h4 grid-view-item__title">
                                        <a href="./product">
                                          Consequuntur magni dolores
                                        </a>
                                      </div>
                                      <div className="price-and-ship">
                                        <div className="grid-view-item__meta grid__item large--three-quarters">
                                          <s className="product-price__price">
                                            <span className="money">
                                              $24.99 USD
                                            </span>
                                          </s>
                                          <span className="product-price__price product-price__sale">
                                            <span className="money">
                                              $19.99 USD
                                            </span>
                                            <span className="product-price__sale-label">
                                              On Sale
                                            </span>
                                          </span>
                                        </div>
                                        <div className="shipcode grid__item large--one-quarter">
                                          <img
                                            src="./assets/images/freeshipicon.svg"
                                            alt="free shipping icon"
                                          />
                                        </div>
                                      </div>
                                      <div className="group-functions">
                                        <div className="rating-star grid__item one-half">
                                          <span
                                            className="spr-badge"
                                            data-rating={5.0}
                                          >
                                            <span className="spr-starrating spr-badge-starrating">
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                            </span>
                                          </span>
                                        </div>
                                        <ul className="action-button grid__item one-half">
                                          <li className="button-wishlist">
                                            <a
                                              className="wish-list wlc wl-1559895403066"
                                              data-wishlistid={1559895403066}
                                              title="Add to Wishlist"
                                            >
                                              <span className="">
                                                <i className="fa fa-heart-o" />
                                              </span>
                                            </a>
                                          </li>
                                          <li className="button-compare">
                                            <a
                                              className="wish-list cmc cm-1559895403066"
                                              data-compareid={1559895403066}
                                              title="Add to Compare"
                                            >
                                              <span className="">
                                                <i className="fa fa-exchange" />
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                                  <div className="grid-view-item">
                                    <div className="grid-normal-display">
                                      <div className="grid__image product-image">
                                        <a
                                          className="grid-view-item__link"
                                          href="./product"
                                        >
                                          <img
                                            className="grid-view-item__image"
                                            src="./assets/images/product3.png"
                                            alt="Consequuntur magni dolores"
                                          />
                                          <img
                                            className="hover-image"
                                            src="./assets/images/product3x.png"
                                            alt="Consequuntur magni dolores"
                                            title="Consequuntur magni dolores"
                                          />
                                        </a>
                                      </div>
                                      <div className="quickbuy">
                                        <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                          <div className="effect-ajax-cart">
                                            <form
                                              action="./product"
                                              method="post"
                                              encType="multipart/form-data"
                                              className="AddToCartForm form-vertical"
                                            >
                                              <input
                                                type="hidden"
                                                name="quantity"
                                                defaultValue={1}
                                              />
                                              <div className="product-single__add-to-cart">
                                                <button
                                                  type="submit"
                                                  name="add"
                                                  className="btn AddToCart"
                                                >
                                                  <span className="AddToCartText">
                                                    Add to Cart
                                                  </span>
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group-information style-">
                                      <div className="grid-view-item__vendor">
                                        KingStone
                                      </div>
                                      <div className="h4 grid-view-item__title">
                                        <a href="./product">
                                          Consequuntur magni dolores
                                        </a>
                                      </div>
                                      <div className="price-and-ship">
                                        <div className="grid-view-item__meta grid__item large--three-quarters">
                                          <s className="product-price__price">
                                            <span className="money">
                                              $24.99 USD
                                            </span>
                                          </s>
                                          <span className="product-price__price product-price__sale">
                                            <span className="money">
                                              $19.99 USD
                                            </span>
                                            <span className="product-price__sale-label">
                                              On Sale
                                            </span>
                                          </span>
                                        </div>
                                        <div className="shipcode grid__item large--one-quarter"></div>
                                      </div>
                                      <div className="group-functions">
                                        <div className="rating-star grid__item one-half">
                                          <span
                                            className="spr-badge"
                                            data-rating={5.0}
                                          >
                                            <span className="spr-starrating spr-badge-starrating">
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                            </span>
                                          </span>
                                        </div>
                                        <ul className="action-button grid__item one-half">
                                          <li className="button-wishlist">
                                            <a
                                              className="wish-list wlc wl-1559895398140"
                                              data-wishlistid={1559895398140}
                                              title="Add to Wishlist"
                                            >
                                              <span className="">
                                                <i className="fa fa-heart-o" />
                                              </span>
                                            </a>
                                          </li>
                                          <li className="button-compare">
                                            <a
                                              className="wish-list cmc cm-1559895398140"
                                              data-compareid={1559895398140}
                                              title="Add to Compare"
                                            >
                                              <span className="">
                                                <i className="fa fa-exchange" />
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                                  <div className="grid-view-item">
                                    <div className="grid-normal-display">
                                      <div className="grid__image product-image">
                                        <a
                                          className="grid-view-item__link"
                                          href="./product"
                                        >
                                          <img
                                            className="grid-view-item__image"
                                            src="./assets/images/product4.png"
                                            alt="Consequuntur magni dolores"
                                          />
                                          <img
                                            className="hover-image"
                                            src="./assets/images/product4x.png"
                                            alt="Consequuntur magni dolores"
                                            title="Consequuntur magni dolores"
                                          />
                                        </a>
                                        <div className="product-label">
                                          <div className="label-element deal-label">
                                            <span
                                              style={{
                                                color: "#ff5722",
                                                backgroundColor: "#ffd839"
                                              }}
                                            >
                                              20% off
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="quickbuy">
                                        <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                          <div className="effect-ajax-cart">
                                            <form
                                              action="./product"
                                              method="post"
                                              encType="multipart/form-data"
                                              className="AddToCartForm form-vertical"
                                            >
                                              <input
                                                type="hidden"
                                                name="quantity"
                                                defaultValue={1}
                                              />
                                              <div className="product-single__add-to-cart">
                                                <button
                                                  type="submit"
                                                  name="add"
                                                  className="btn AddToCart"
                                                >
                                                  <span className="AddToCartText">
                                                    Add to Cart
                                                  </span>
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group-information style-">
                                      <div className="grid-view-item__vendor">
                                        SAMSUNG
                                      </div>
                                      <div className="h4 grid-view-item__title">
                                        <a href="./product">
                                          Consequuntur magni dolores
                                        </a>
                                      </div>
                                      <div className="price-and-ship">
                                        <div className="grid-view-item__meta grid__item large--three-quarters">
                                          <s className="product-price__price">
                                            <span className="money">
                                              $24.99 USD
                                            </span>
                                          </s>
                                          <span className="product-price__price product-price__sale">
                                            <span className="money">
                                              $19.99 USD
                                            </span>
                                            <span className="product-price__sale-label">
                                              On Sale
                                            </span>
                                          </span>
                                        </div>
                                        <div className="shipcode grid__item large--one-quarter"></div>
                                      </div>
                                      <div className="group-functions">
                                        <div className="rating-star grid__item one-half">
                                          <span
                                            className="spr-badge"
                                            data-rating={5.0}
                                          >
                                            <span className="spr-starrating spr-badge-starrating">
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                            </span>
                                          </span>
                                        </div>
                                        <ul className="action-button grid__item one-half">
                                          <li className="button-wishlist">
                                            <a
                                              className="wish-list wlc wl-1559895396466"
                                              data-wishlistid={1559895396466}
                                              title="Add to Wishlist"
                                            >
                                              <span className="">
                                                <i className="fa fa-heart-o" />
                                              </span>
                                            </a>
                                          </li>
                                          <li className="button-compare">
                                            <a
                                              className="wish-list cmc cm-1559895396466"
                                              data-compareid={1559895396466}
                                              title="Add to Compare"
                                            >
                                              <span className="">
                                                <i className="fa fa-exchange" />
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                                  <div className="grid-view-item">
                                    <div className="grid-normal-display">
                                      <div className="grid__image product-image">
                                        <a
                                          className="grid-view-item__link"
                                          href="./product"
                                        >
                                          <img
                                            className="grid-view-item__image"
                                            src="./assets/images/product2.png"
                                            alt="Consequuntur magni dolores"
                                          />
                                          <img
                                            className="hover-image"
                                            src="./assets/images/product2x.png"
                                            alt="Consequuntur magni dolores"
                                            title="Consequuntur magni dolores"
                                          />
                                        </a>
                                      </div>
                                      <div className="quickbuy">
                                        <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                          <div className="effect-ajax-cart">
                                            <form
                                              action="./product"
                                              method="post"
                                              encType="multipart/form-data"
                                              className="AddToCartForm form-vertical"
                                            >
                                              <input
                                                type="hidden"
                                                name="quantity"
                                                defaultValue={1}
                                              />
                                              <div className="product-single__add-to-cart">
                                                <button
                                                  type="submit"
                                                  name="add"
                                                  className="btn AddToCart"
                                                >
                                                  <span className="AddToCartText">
                                                    Add to Cart
                                                  </span>
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group-information style-">
                                      <div className="grid-view-item__vendor">
                                        BOSCH
                                      </div>
                                      <div className="h4 grid-view-item__title">
                                        <a href="./product">
                                          Consequuntur magni dolores
                                        </a>
                                      </div>
                                      <div className="price-and-ship">
                                        <div className="grid-view-item__meta grid__item large--three-quarters">
                                          <s className="product-price__price">
                                            <span className="money">
                                              $24.99 USD
                                            </span>
                                          </s>
                                          <span className="product-price__price product-price__sale">
                                            <span className="money">
                                              $19.99 USD
                                            </span>
                                            <span className="product-price__sale-label">
                                              On Sale
                                            </span>
                                          </span>
                                        </div>
                                        <div className="shipcode grid__item large--one-quarter"></div>
                                      </div>
                                      <div className="group-functions">
                                        <div className="rating-star grid__item one-half">
                                          <span
                                            className="spr-badge"
                                            data-rating={5.0}
                                          >
                                            <span className="spr-starrating spr-badge-starrating">
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                            </span>
                                          </span>
                                        </div>
                                        <ul className="action-button grid__item one-half">
                                          <li className="button-wishlist">
                                            <a
                                              className="wish-list wlc wl-1559895394200"
                                              data-wishlistid={1559895394200}
                                              title="Add to Wishlist"
                                            >
                                              <span className="">
                                                <i className="fa fa-heart-o" />
                                              </span>
                                            </a>
                                          </li>
                                          <li className="button-compare">
                                            <a
                                              className="wish-list cmc cm-1559895394200"
                                              data-compareid={1559895394200}
                                              title="Add to Compare"
                                            >
                                              <span className="">
                                                <i className="fa fa-exchange" />
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="mobile-nav__item column-product grid__item small--one-whole medium-up--one-third one-fifth">
                                  <div className="grid-view-item">
                                    <div className="grid-normal-display">
                                      <div className="grid__image product-image">
                                        <a
                                          className="grid-view-item__link"
                                          href="./product"
                                        >
                                          <img
                                            className="grid-view-item__image"
                                            src="./assets/images/product5.png"
                                            alt="Consequuntur magni dolores"
                                          />
                                          <img
                                            className="hover-image"
                                            src="./assets/images/product5x.png"
                                            alt="Consequuntur magni dolores"
                                            title="Consequuntur magni dolores"
                                          />
                                        </a>
                                      </div>
                                      <div className="quickbuy">
                                        <div className="product-ajax-quickbuy in-stock hidden-xs hidden-sm">
                                          <div className="effect-ajax-cart">
                                            <form
                                              action="./product"
                                              method="post"
                                              encType="multipart/form-data"
                                              className="AddToCartForm form-vertical"
                                            >
                                              <input
                                                type="hidden"
                                                name="quantity"
                                                defaultValue={1}
                                              />
                                              <div className="product-single__add-to-cart">
                                                <button
                                                  type="submit"
                                                  name="add"
                                                  className="btn AddToCart"
                                                >
                                                  <span className="AddToCartText">
                                                    Add to Cart
                                                  </span>
                                                </button>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group-information style-">
                                      <div className="grid-view-item__vendor">
                                        ACME
                                      </div>
                                      <div className="h4 grid-view-item__title">
                                        <a href="./product">
                                          Consequuntur magni dolores
                                        </a>
                                      </div>
                                      <div className="price-and-ship">
                                        <div className="grid-view-item__meta grid__item large--three-quarters">
                                          <s className="product-price__price">
                                            <span className="money">
                                              $24.99 USD
                                            </span>
                                          </s>
                                          <span className="product-price__price product-price__sale">
                                            <span className="money">
                                              $19.99 USD
                                            </span>
                                            <span className="product-price__sale-label">
                                              On Sale
                                            </span>
                                          </span>
                                        </div>
                                        <div className="shipcode grid__item large--one-quarter">
                                          <img
                                            src="./assets/images/freeshipicon.svg"
                                            alt="free shipping icon"
                                          />
                                        </div>
                                      </div>
                                      <div className="group-functions">
                                        <div className="rating-star grid__item one-half">
                                          <span
                                            className="spr-badge"
                                            data-rating={5.0}
                                          >
                                            <span className="spr-starrating spr-badge-starrating">
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                              <i className="spr-icon spr-icon-star" />
                                            </span>
                                          </span>
                                        </div>
                                        <ul className="action-button grid__item one-half">
                                          <li className="button-wishlist">
                                            <a
                                              className="wish-list wlc wl-1559895387337"
                                              data-wishlistid={1559895387337}
                                              title="Add to Wishlist"
                                            >
                                              <span className="">
                                                <i className="fa fa-heart-o" />
                                              </span>
                                            </a>
                                          </li>
                                          <li className="button-compare">
                                            <a
                                              className="wish-list cmc cm-1559895387337"
                                              data-compareid={1559895387337}
                                              title="Add to Compare"
                                            >
                                              <span className="">
                                                <i className="fa fa-exchange" />
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mobile-nav__item mobile-nav__item-menulv1 mega-menu"
                              data-father="none"
                              data-url="/collections/all"
                            >
                              <div className="mobile-nav__has-sublist">
                                <a
                                  href="./collection"
                                  className="mobile-nav__link"
                                >
                                  Special Deals
                                </a>
                                <div className="mobile-nav__toggle">
                                  <button
                                    type="button"
                                    className="mobile-nav__toggle-btn icon-fallback-text mobileNav-menulv1-button"
                                  >
                                    <span className="icon-fallback-text mobile-nav__toggle-open">
                                      <span
                                        className="icon icon-plus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Expand submenu
                                      </span>
                                    </span>
                                    <span className="icon-fallback-text mobile-nav__toggle-close">
                                      <span
                                        className="icon icon-minus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Collapse submenu
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <ul className="mobile-nav__sublist mobile-nav__sublist-menulv1 megamenu__dropdown megamenu_1">
                                <li className="mobile-nav__item column-text grid__item small--one-whole medium-up--one-third one-fifth">
                                  <div className="heading">Text Column</div>
                                  <div className="content">
                                    <ul>
                                      <li>Rings</li>
                                      <li>Hot Earrings</li>
                                      <li>Popular Bracelets</li>
                                      <li>Jewelry Sets</li>
                                      <li>Beads for DIY Jewelry</li>
                                      <li>Men's Brand Watches</li>
                                      <li>Pendant Necklaces</li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="mobile-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                                  <ul>
                                    <li className="site-nav__item site-nav__item-title">
                                      Fashion Collection
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Dresses</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Blouses &amp; Shirts</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Jumpsuits</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Jackets</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Trench Coats</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Tops &amp; Tees</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Hoodies</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mobile-nav__item column-linklist grid__item small--one-whole medium-up--one-third one-fifth">
                                  <ul>
                                    <li className="site-nav__item site-nav__item-title">
                                      Accessories
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Eyewear &amp; Accessories</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Hats &amp; Caps</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Belts &amp; Cummerbunds</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Scarves &amp; Wraps</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Gloves &amp; Mittens</span>
                                      </a>
                                    </li>
                                    <li className="site-nav__item">
                                      <a
                                        href="./collection"
                                        className="site-nav__link"
                                      >
                                        <span>Prescription Glasses</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mobile-nav__item column-image grid__item small--one-whole medium-up--one-third one-fifth">
                                  <a href="./collection">
                                    <img
                                      src="./assets/images/mega-img1.png"
                                      alt=""
                                    />
                                  </a>
                                </li>
                                <li className="mobile-nav__item column-image grid__item small--one-whole medium-up--one-third one-fifth">
                                  <a href="./collection">
                                    <img
                                      src="./assets/images/mega-img1.png"
                                      alt=""
                                    />
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mobile-nav__item mobile-nav__item-menulv1 dropdown-menu"
                              data-father="none"
                              data-url="/collections/all"
                            >
                              <div className="mobile-nav__has-sublist">
                                <a
                                  href="./pageabout"
                                  className="mobile-nav__link"
                                >
                                  Pages
                                </a>
                                <div className="mobile-nav__toggle">
                                  <button
                                    type="button"
                                    className="mobile-nav__toggle-btn icon-fallback-text mobileNav-menulv1-button"
                                  >
                                    <span className="icon-fallback-text mobile-nav__toggle-open">
                                      <span
                                        className="icon icon-plus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Expand submenu
                                      </span>
                                    </span>
                                    <span className="icon-fallback-text mobile-nav__toggle-close">
                                      <span
                                        className="icon icon-minus"
                                        aria-hidden="true"
                                      />
                                      <span className="fallback-text">
                                        Collapse submenu
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <ul className="mobile-nav__sublist mobile-nav__sublist-menulv1 megamenu__dropdown megamenu_1">
                                <li className="mobile-nav__item mobile-nav__item-menulv2">
                                  <div className="mobile-nav__has-sublist">
                                    <a
                                      href="./pageabout"
                                      className="mobile-nav__link"
                                    >
                                      About Us
                                    </a>
                                    <div className="mobile-nav__toggle">
                                      <button
                                        type="button"
                                        className="mobile-nav__toggle-btn icon-fallback-text mobileNav-menulv2-button"
                                      >
                                        <span className="icon-fallback-text mobile-nav__toggle-open">
                                          <span
                                            className="icon icon-plus"
                                            aria-hidden="true"
                                          />
                                          <span className="fallback-text">
                                            Expand submenu
                                          </span>
                                        </span>
                                        <span className="icon-fallback-text mobile-nav__toggle-close">
                                          <span
                                            className="icon icon-minus"
                                            aria-hidden="true"
                                          />
                                          <span className="fallback-text">
                                            Collapse submenu
                                          </span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="mobile-nav__sublist mobile-nav__sublist-menulv2">
                                    <li className="mobile-nav__item">
                                      <a
                                        href="./pageabout"
                                        className="site-nav__link"
                                      >
                                        <span>Services</span>
                                      </a>
                                    </li>
                                    <li className="mobile-nav__item">
                                      <a
                                        href="./pageabout"
                                        className="site-nav__link"
                                      >
                                        <span>Shopping Guide</span>
                                      </a>
                                    </li>
                                    <li className="mobile-nav__item">
                                      <a
                                        href="./pageabout"
                                        className="site-nav__link"
                                      >
                                        <span>Typography</span>
                                      </a>
                                    </li>
                                    <li className="mobile-nav__item">
                                      <a
                                        href="./pageabout"
                                        className="site-nav__link"
                                      >
                                        <span>Store Location</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mobile-nav__item">
                                  <a
                                    href="./pagecontact"
                                    className="site-nav__link"
                                  >
                                    <span>Contact Us</span>
                                  </a>
                                </li>
                                <li className="mobile-nav__item">
                                  <a
                                    href="./page-faq.html"
                                    className="site-nav__link"
                                  >
                                    <span>FAQ</span>
                                  </a>
                                </li>
                                <li className="mobile-nav__item">
                                  <a
                                    href="./pageabout"
                                    className="site-nav__link"
                                  >
                                    <span>Heading</span>
                                  </a>
                                </li>
                                <li className="mobile-nav__item">
                                  <a
                                    href="./pageabout"
                                    className="site-nav__link"
                                  >
                                    <span>Sale Off</span>
                                  </a>
                                </li>
                                <li className="mobile-nav__item">
                                  <a
                                    href="./pagewishlist"
                                    className="site-nav__link"
                                  >
                                    <span>Wishlist</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              className="mobile-nav__item"
                              data-url="/pages/contact-us"
                            >
                              <a
                                href="./pagecontact"
                                className="site-nav__link"
                              >
                                <span>Contact Us</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mobileNav-information">
                          <div className="mobileNav__item nav-customerlink">
                            <a
                              className="site-nav__link site-nav__link--icon js-login-modal"
                              data-mfp-src="#LoginModal"
                            >
                              <span className="text">My Account</span>
                            </a>
                          </div>
                          <div className="mobileNav__item nav-compare">
                            <a href="./pages-compare.html">My Compare</a>
                          </div>
                          <div className="mobileNav__item nav-wishlist">
                            <a href="./pagewishlist">My Wishlist</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <div className="mobile-allcoll small--show large--hide">
            <div className="wrap_allcoll grid__item small--one-whole">
              <div
                id="html-section-home-vertical-menu"
                className="html-section index-section revolution-slider"
              >
                <div className="allcollections-title">
                  <span className="title">Categories</span>
                  <div className="icon-main-toggle navbar-toggle">
                    <i className="fa fa-caret-down" aria-hidden="true" />
                  </div>
                </div>
                <div className="allcollections-content have-icon">
                  <ul className="sdcollections-list">
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-1">
                          <img src="./assets/images/cocktail-dress.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Women’s Clothing
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Hot Categories</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Dresses</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Jackets &amp; Coats
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sweaters</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Jeans</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Suits &amp; Sets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Blouses &amp; Shirts
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Bottoms</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Skirts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Leggings</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Jeans</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Pants &amp; Capris</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Wide Leg Pants</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Shorts</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./collection">
                                  New arrival plus size
                                </a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product1.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Outwear &amp; Jackets
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Basic Jackets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Real Fur</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Down Coats</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Blazers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Trench</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Parkas</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Tops &amp; Sets</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Tank Tops</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Suits &amp; Sets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Jumpsuits</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Rompers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Intimates</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sleep &amp; Lounge</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./collection">Sweater Collection</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="assets/images/product2.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Weddings &amp; Events
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Wedding Dresses</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Evening Dresses</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Prom Dresses</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Bridesmaid Dresses</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Flower Girl Dresses
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Cocktail Dresses</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Accessories</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Eyewear &amp; Accessories
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Hats &amp; Caps</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Belts &amp; Cummerbunds
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Scarves &amp; Wraps
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Gloves &amp; Mittens
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Prescription Glasses
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">
                                  High Quality Formal Dresses
                                </a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="assets/images/product3.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-2">
                          <img src="./assets/images/cotton-polo-shirt.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Men’s Clothing
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Hot Sale</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Hoodies &amp; Sweatshirts
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Jackets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">T-Shirts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Shirts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sweaters</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Socks</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Bottoms</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Skirts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Leggings</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Jeans</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Pants &amp; Capris</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Wide Leg Pants</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Shorts</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">
                                  Workout &amp; Training Clothes
                                </a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product4.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Underwear &amp; Loungewear
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Boxers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Briefs</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Long Johns</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Men's Sleep &amp; Lounge
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Pajama Sets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Robes</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Outwear &amp; Jackets
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Basic Jackets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Real Fur</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Down Coats</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Blazers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Trench</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Parkas</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">3D Printed Hoodies</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product5.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Accessories</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Scarves</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Skullies &amp; Beanies
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Prescription Glasses
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Gloves &amp; Mittens
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Belts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Bomber Hats</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Fedoras</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Berets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Baseball Caps</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Novelty &amp; Special Use
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Cosplay Costumes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Stage &amp; Dance Wear
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Exotic Apparel</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Sunglasses</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product6.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-3">
                          <img
                            src="./assets/images/mobile-phone-popular-model-nexus-5.png"
                            alt=""
                          />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Cellphones &amp; Accessories
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Mobile Phones</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Octa Core</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Deca Core</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Single SIM Card</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Dual SIM Card</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">4GB RAM</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">5.5-inch Display</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Mobile Phone Parts
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Mobile Phone LCDs</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Mobile Phone Batteries
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Mobile Phone Housings
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Mobile Phone Touch Panel
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Flex Cables</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    SIM Card &amp; Tools
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Samsung Smartphones</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product7.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Cases &amp; Covers
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Patterned Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Wallet Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Waterproof Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Leather Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Silicone Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Flip Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">iPhone X Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Cases For iPhone 8/8 Plus{" "}
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Cases For iPhone 7/7 Plus
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Cases For iPhone 6/6 Plus
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Galaxy S8 Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Galaxy S7 Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Xiaomi Cases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Huawei Cases</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">New iPhone</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product8.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Mobile Phone Accessories
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Power Bank</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Screen Protectors</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Mobile Phone Cables
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Mobile Phone Chargers
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Holders &amp; Stands
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Mobile Phone Lenses
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Hot Categories</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Car Chargers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Quick Chargers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">iPhone Cables</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Type C Cables</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    20000mAh Power Bank
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Battery Charger Cases
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Power Bank</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product9.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-4">
                          <img src="./assets/images/web.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Computer, Office, Security
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Laptops</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Gaming Laptops</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Tablets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">2 in 1 Tablets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Phone Call Tablets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">iPad</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Tablet &amp; Laptop Accessories
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Laptop Bags &amp; Cases
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Laptop Batteries</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Tablet Accessories</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Tablet LCD Screens</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Tablet Cases</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Gaming Laptops</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product10.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Security &amp; Protection
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Surveillance Products
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Access Control</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Fire Protection</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Workplace Safety Supplies
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Alarm &amp; Sensor</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Door Intercom</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Storage Devices</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">USB Flash Drives</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Memory Cards</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    External Hard Drives
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">HDD Enclosures</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">SSD</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">IP Cameras</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product11.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Office Electronics
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Printer Supplies</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Office &amp; School Supplies
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">3D Printers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Printers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Scanners</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">3D Pens</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Networking</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Wireless Routers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Network Cards</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">3G Modems</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Modem-Router Combos
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Networking Tools</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Mouse &amp; Keyboards</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product12.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-5">
                          <img src="./assets/images/fan.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Consumer Electronics
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Accessories &amp; Parts
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Digital Cables</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collectionsearch">
                                    Electronic Cigarettes
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Batteries</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Charger</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Home Electronic Accessories
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Digital Gear Bags</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Home Audio &amp; Video
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Television</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">TV Receivers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Projectors</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Audio Amplifiers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">TV Sticks</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Drones</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product13.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Camera &amp; Photo
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Digital Cameras</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Camcorders</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Camera Drones</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Action Cameras</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Photo Studio</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Camera &amp; Photo Accessories
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Portable Audio &amp; Video
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Earphones &amp; Headphones
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Speakers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">MP3 Players</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Microphones</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">VR/AR Devices</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">VR/AR Devices</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product14.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Smart Electronics
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Wearable Devices</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Smart Home Appliances
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Smart Wearable Accessories
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Smart Remote Controls
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Smart Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Smart Wristbands</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Video Games</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Handheld Game Players
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Gamepads</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Joysticks</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Stickers</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Smart Watches</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product15.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-6">
                          <img src="./assets/images/diamond.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Jewelry &amp; Watches
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Fine Jewelry</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    925 Silver Jewelry{" "}
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Diamond Jewelry</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Pearls Jewelry</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Various Gemstones</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">K-Gold</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Fine Earrings</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Fine Jewelry Sets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Men's Fine Jewelry</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Wedding &amp; Engagement
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Bridal Jewelry Sets
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Engagement Rings</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Wedding Hair Jewelry
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Street Style Jewelry</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product16.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Men's Watches</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Mechanical Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Quartz Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Digital Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Dual Display Watches
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sports Watches</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Women's Watches</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Sports Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Women's Bracelet Watches
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Dress Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Lovers' Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Children's Watches</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Creative Watches</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Chinese Brand Watches</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product17.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Fashion Jewelry</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Necklaces &amp; Pendants
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Hot Rings</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Trendy Earrings</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Bracelets &amp; Bangles
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Men's Cuff Links</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Fashion Jewelry Sets
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Charms</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Body Jewelry</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Beads &amp; DIY Jewelry
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Beads</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Jewelry Findings &amp; Components
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Jewelry Packaging &amp; Display
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Religious Jewelry</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product18.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-7">
                          <img src="./assets/images/shovels.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Home &amp; Garden, Appliance
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Arts</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    DIY Apparel Sewing &amp; Fabric
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Needle Arts &amp; Craft
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Scrapbook &amp; Stamping
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    5D DIY Diamond Painting
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Home Decor</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Painting &amp; Calligraphy
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Wall Stickers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Figurines &amp; Miniatures
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Wall Clocks</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Home Textile</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Cushions</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Curtains</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Bedding Set</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Beach Towels</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Pet Supplies</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product19.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Festival</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Event &amp; Party</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Ballons</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Artificial &amp; Dried Flowers
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Gift Bags &amp; Boxes
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Home Storage</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Storage Boxes &amp; Bins
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Laundry Baskets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Drawer Organizers </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Makeup Organizers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Household Merchandises
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Umbrellas</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Bathroom Scales</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Hand Push Sweepers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Dust Covers</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Birthday</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product20.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Kitchen</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Bakeware</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Drinkware</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Kitchen Tools &amp; Gadgets
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Kitchen Knives &amp; Accessories
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Garden Supplies</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Watering Kits</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Flower Pots &amp; Planters
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Repellents</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Garden Water Timers
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Furniture</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Home Furniture</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Office Furniture</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Outdoor Furniture</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Top Furniture Stores
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Hot Small Appliances</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product1.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-8">
                          <img src="./assets/images/shopping-bag.png" alt="" />
                        </span>
                        <a href="h./collection" className="site-nav__text">
                          Bags &amp; Shoes
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Women's Luggage &amp; Bags
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Fashion Backpacks</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Totes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Shoulder Bags</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Wallets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Evening Bags</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Clutches</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Women's Shoes</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Boots</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Snow Boots</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Pumps</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sandals</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">house slippers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Vulcanize Shoes</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Purse</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product2.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Men's Luggage &amp; Bags
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Men's Backpacks</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Crossbody Bags</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Briefcases</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Luggage &amp; Travel Bags
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Wallets</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Men's Shoes</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Basic boots</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Men's Casual Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Chelsea boots</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">motorcycle boots</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Snow Boots</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Vulcanized Shoes</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Ankle Boots</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product3.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Other Bags &amp; Accessories
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Kids &amp; Baby Bags
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Cosmetic Bags &amp; Cases
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Coin Purses &amp; Holders
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Luggage Cover</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Passport Covers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Bag Parts &amp; Accessories
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Bestselling Shoes
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Fashion Sneakers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Flat Sandals</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Chunky Sandals</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Vulcanized Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Men's Loafers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Shoes &amp; Accessories
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Men's Oxfords</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product4.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-9">
                          <img src="./assets/images/horse.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Toys, Kids &amp; Baby
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Baby Clothing</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Baby Dresses</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collectionsearch">Baby Rompers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Clothing Sets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Baby Outerwear</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Baby Pants</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Baby Accessories</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Toys &amp; Hobbies
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">RC Helicopters</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Stuffed &amp; Plush Animals
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Action &amp; Toy Figures
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Blocks</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Electronic Pets</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Marvel's The Avengers</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product5.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Girls Clothing</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Dresses</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Clothing Sets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Tops &amp; Tees</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Sleepwear &amp; Robes
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Accessories</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Family Matching Outfits
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Shoes &amp; Bags
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Baby’s First Walkers
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Girls´ Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Boys’ Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">School Bags</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Kids´ Wallets</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Blocks</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product6.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Boys Clothing</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Clothing Sets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">T-Shirts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Hoodies &amp; Sweatshirts
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Outerwear &amp; Coats
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Jeans</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Accessories</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Baby &amp; Mother
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Nappy Changing</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Activity &amp; Gear
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Baby Care</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Backpacks &amp; Carriers
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Maternity</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Girls’ Clothing Sets</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product7.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3 dropdown-long"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-10">
                          <img src="./assets/images/trophy.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Sports &amp; Outdoors
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Swimming</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Bikini Set</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">One-Piece Suits</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Two-Piece Suits</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Cover-Ups</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Men's Swimwear</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Children's Swimwear
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Cycling</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Bicycles</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Bicycle Frames</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Bicycle Lights</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Bicycle Helmets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Cycling Jerseys</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Cycling Eyewear</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Running Shoes</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product8.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Sneakers</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Running Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Hiking Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Soccer Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Skateboarding Shoes
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Dance Shoes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Basketball Shoes</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Fishing</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Fishing Reels</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Fishing Lures</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Fishing Lines</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Fishing Rods</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Rod Combos</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Fishing Tackle Boxes
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Guitars</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product9.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Sportswear</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Jerseys</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Hiking Jackets</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Pants</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Shorts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sports Bags</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sports Accessories</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Other Sports Equipment
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Camping &amp; Hiking
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Hunting</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Golf</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Fitness &amp; Bodybuilding
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Skiing &amp; Snowboarding
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Musical Instruments
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Bicycles</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product10.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-11">
                          <img src="./assets/images/heart.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Health &amp; Beauty, Hair
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Hair Weaves</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Bundles With Closure
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">3/4 Bundles</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Pre-Colored Weaves</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Closures</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Top Quality Virgin Hair
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Remy Hair Weaves</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Lace Wigs</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collectionsearch">
                                    Lace Front Wigs
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Full Lace Wig</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">360 Lace Wigs</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    250 Density Lace Wigs
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Synthetic Lace Wigs
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Hair Braids</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Clip-in Hair Extensions</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product11.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Makeup</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Beauty Essentials</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Makeup Set</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Makeup Brushes</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Eyeshadow</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Lipstick</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">False Eyelashes</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">
                                Nail Art &amp; Tools
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Nail Art Kits</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Nail Gel</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Nail Dryers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Nail Glitters</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Stickers &amp; Decals
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Nail Decorations</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Fusion Hair Extensions</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product12.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Beauty Tools</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Curling Iron</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Straightening Irons
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Electric Face Cleanser
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Facial Steamer</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Face Skin Care Tools
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Massage &amp; Relaxation
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-2">
                            <ul>
                              <li className="site-nav__heading">Skin Care</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Essential Oil</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Face Mask</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Facial Care</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Sun care</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Body Care</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Razor</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Tape Hair Extensions</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product13.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="site-nav__item site-nav--has-dropdown dropdown megamenu-vertical megacol-3"
                      aria-haspopup="true"
                    >
                      <p className="site-nav__link">
                        <span className="site-nav__icon icon-12">
                          <img src="./assets/images/motorcycle.png" alt="" />
                        </span>
                        <a href="./collection" className="site-nav__text">
                          Automobiles &amp; Motorcycles
                        </a>
                        <span
                          className="fa fa-caret-right click_arrow"
                          aria-hidden="true"
                        />
                      </p>
                      <ul className="site-nav__dropdown" style={{ zIndex: 999 }}>
                        <li className="column-1 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Auto Replacement Parts
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Car Lights</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Interior Parts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Exterior Parts</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Spark Plugs &amp; Ignition System
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Automobiles Sensors
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Brake System</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Windscreen Wipers &amp; Windows
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Other Replacement Parts
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">
                                  ATV,RV,Boat &amp; Other Vehicle
                                </a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product14.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-2 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">Car Electronics</li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Car Multimedia Player
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">DVR/Dash Camera</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Alarm Systems &amp; Security
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">GPS Trackers</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Car Radios</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Car Monitors</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Car Refrigerators</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Vehicle Camera</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Vehicle GPS</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Jump Starter</a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">
                                  Travel &amp; Roadway Product
                                </a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product15.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-3 grid__item one-third">
                          <div className="row-1">
                            <ul>
                              <li className="site-nav__heading">
                                Motorcycle Accessories &amp; Parts
                              </li>
                              <ul className="sub">
                                <li className="site-nav__link">
                                  <a href="./collection">Body &amp; Frame</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Helmet &amp; Protective Gear
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Lighting</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Brake System</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Exhaust &amp; Exhaust Systems
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">Helmet Headset</a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Motorcycle Seat Covers
                                  </a>
                                </li>
                                <li className="site-nav__link">
                                  <a href="./collection">
                                    Other Motorcycle Accessories
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                          <div className="row-3">
                            <div className="box-border">
                              <div className="site-nav__text">
                                <a href="./product">Diagnostic Tools</a>
                              </div>
                              <div className="site-nav__banner">
                                <a href="./product">
                                  <img src="./assets/images/product16.png" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="html-section-cart-template" className="html-section">
            <div id="CartSection">
              <header className="section-header wrapper-breadcrumb">
                <div className="wrapper">
                  <nav
                    className="breadcrumb"
                    role="navigation"
                    aria-label="breadcrumbs"
                  >
                    <a href="/" title="Back to the frontpage">
                      Home
                    </a>
                    <span aria-hidden="true">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </span>
                    <span>Shopping Cart</span>
                  </nav>
                </div>
              </header>
              <div className="wrapper">
                <div className="grid">
                  <div className="grid__item">
                    <form
                      action="./cart"
                      method="post"
                      noValidate=""
                      className="cart"
                    >
                      <div className="cart__row medium-down--hide cart__header-labels">
                        <div className="grid--full">
                          <div className="grid__item">
                            <div className="item-row">
                              <div className="grid__item one-quarter" />
                              <div className="grid__item two-quarters" />
                              <div className="grid__item one-quarter medium-down--half text-center">
                                Quantity
                              </div>
                              <div className="grid__item one-quarter medium-down--half text-right">
                                Total
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart__row">
                        <div className="grid--full cart__row--table-large">
                          <div className="grid__item">
                            <div className="item-row">
                              <div className="grid__item one-quarter grid-product-image">
                                <a href="./product" className="cart__image">
                                  <img
                                    src="./assets/images/product1.png"
                                    alt="Cum sociis natoque - XS / Black"
                                  />
                                </a>
                              </div>
                              <div className="grid__item two-quarters grid-product-name">
                                <a
                                  href="./product"
                                  className="h4 cart__product-name"
                                >
                                  Cum sociis natoque
                                </a>
                                <p className="cart__product-meta">XS / Black</p>
                                <p className="cart__product-meta">
                                  <a href="#">Remove</a>
                                </p>
                              </div>
                              <div className="grid__item one-quarter">
                                <label
                                  htmlFor="updates_12874796892249:075fb03e9d7c5e2791b4ac9b5f113c6b"
                                  className="visually-hidden"
                                >
                                  Quantity
                                </label>
                                <div className="js-qty">
                                  <button
                                    type="button"
                                    className="js-qty__adjust js-qty__adjust--minus icon-fallback-text"
                                    data-id="12874796892249:075fb03e9d7c5e2791b4ac9b5f113c6b"
                                    data-qty={0}
                                    aria-label="Reduce item quantity by one"
                                  >
                                    <span
                                      className="icon icon-minus"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="fallback-text"
                                      aria-hidden="true"
                                    >
                                      −
                                    </span>
                                  </button>
                                  <input
                                    type="text"
                                    className="js-qty__num"
                                    defaultValue={1}
                                    min={1}
                                    data-id="12874796892249:075fb03e9d7c5e2791b4ac9b5f113c6b"
                                    aria-label="quantity"
                                    pattern="[0-9]*"
                                    name="updates[]"
                                    id="updates_12874796892249:075fb03e9d7c5e2791b4ac9b5f113c6b"
                                  />
                                  <button
                                    type="button"
                                    className="js-qty__adjust js-qty__adjust--plus icon-fallback-text"
                                    data-id="12874796892249:075fb03e9d7c5e2791b4ac9b5f113c6b"
                                    data-qty={11}
                                    aria-label="Increase item quantity by one"
                                  >
                                    <span
                                      className="icon icon-plus"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="fallback-text"
                                      aria-hidden="true"
                                    >
                                      +
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="grid__item one-quarter grid-product-price">
                                <span className="cart__price">
                                  <span
                                    className="money"
                                    doubly-currency-usd={9000}
                                    doubly-currency="USD"
                                  >
                                    $90.00 USD
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart__row">
                        <div className="grid--full cart__row--table-large">
                          <div className="grid__item">
                            <div className="item-row">
                              <div className="grid__item one-quarter grid-product-image">
                                <a href="./product" className="cart__image">
                                  <img
                                    src="./assets/images/product2.png"
                                    alt="Corporis suscipit laboriosam - XS / Black"
                                  />
                                </a>
                              </div>
                              <div className="grid__item two-quarters grid-product-name">
                                <a
                                  href="./product"
                                  className="h4 cart__product-name"
                                >
                                  Corporis suscipit laboriosam
                                </a>
                                <p className="cart__product-meta">XS / Black</p>
                                <p className="cart__product-meta">
                                  <a href="#">Remove</a>
                                </p>
                              </div>
                              <div className="grid__item one-quarter">
                                <label
                                  htmlFor="updates_12874846470233:fdb5c2b28dfd06e63b54d29745c9f55b"
                                  className="visually-hidden"
                                >
                                  Quantity
                                </label>
                                <div className="js-qty">
                                  <button
                                    type="button"
                                    className="js-qty__adjust js-qty__adjust--minus icon-fallback-text"
                                    data-id="12874846470233:fdb5c2b28dfd06e63b54d29745c9f55b"
                                    data-qty={0}
                                    aria-label="Reduce item quantity by one"
                                  >
                                    <span
                                      className="icon icon-minus"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="fallback-text"
                                      aria-hidden="true"
                                    >
                                      −
                                    </span>
                                  </button>
                                  <input
                                    type="text"
                                    className="js-qty__num"
                                    defaultValue={1}
                                    min={1}
                                    data-id="12874846470233:fdb5c2b28dfd06e63b54d29745c9f55b"
                                    aria-label="quantity"
                                    pattern="[0-9]*"
                                    name="updates[]"
                                    id="updates_12874846470233:fdb5c2b28dfd06e63b54d29745c9f55b"
                                  />
                                  <button
                                    type="button"
                                    className="js-qty__adjust js-qty__adjust--plus icon-fallback-text"
                                    data-id="12874846470233:fdb5c2b28dfd06e63b54d29745c9f55b"
                                    data-qty={11}
                                    aria-label="Increase item quantity by one"
                                  >
                                    <span
                                      className="icon icon-plus"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="fallback-text"
                                      aria-hidden="true"
                                    >
                                      +
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="grid__item one-quarter grid-product-price">
                                <span className="cart__price">
                                  <span
                                    className="money"
                                    doubly-currency-usd={8900}
                                    doubly-currency="USD"
                                  >
                                    $89.00 USD
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart__row">
                        <div className="grid--full cart__row--table-large">
                          <div className="grid__item">
                            <div className="item-row">
                              <div className="grid__item one-quarter grid-product-image">
                                <a href="./product" className="cart__image">
                                  <img
                                    src="./assets/images/product3.png"
                                    alt="Raesent Scelerisque Dan - XS / Red"
                                  />
                                </a>
                              </div>
                              <div className="grid__item two-quarters grid-product-name">
                                <a
                                  href="./product"
                                  className="h4 cart__product-name"
                                >
                                  Raesent Scelerisque Dan
                                </a>
                                <p className="cart__product-meta">XS / Red</p>
                                <p className="cart__product-meta">
                                  <a href="#">Remove</a>
                                </p>
                              </div>
                              <div className="grid__item one-quarter">
                                <label
                                  htmlFor="updates_12874930225241:d57a78799fbfec2b33057b0eb3554f1d"
                                  className="visually-hidden"
                                >
                                  Quantity
                                </label>
                                <div className="js-qty">
                                  <button
                                    type="button"
                                    className="js-qty__adjust js-qty__adjust--minus icon-fallback-text"
                                    data-id="12874930225241:d57a78799fbfec2b33057b0eb3554f1d"
                                    data-qty={0}
                                    aria-label="Reduce item quantity by one"
                                  >
                                    <span
                                      className="icon icon-minus"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="fallback-text"
                                      aria-hidden="true"
                                    >
                                      −
                                    </span>
                                  </button>
                                  <input
                                    type="text"
                                    className="js-qty__num"
                                    defaultValue={1}
                                    min={1}
                                    data-id="12874930225241:d57a78799fbfec2b33057b0eb3554f1d"
                                    aria-label="quantity"
                                    pattern="[0-9]*"
                                    name="updates[]"
                                    id="updates_12874930225241:d57a78799fbfec2b33057b0eb3554f1d"
                                  />
                                  <button
                                    type="button"
                                    className="js-qty__adjust js-qty__adjust--plus icon-fallback-text"
                                    data-id="12874930225241:d57a78799fbfec2b33057b0eb3554f1d"
                                    data-qty={11}
                                    aria-label="Increase item quantity by one"
                                  >
                                    <span
                                      className="icon icon-plus"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="fallback-text"
                                      aria-hidden="true"
                                    >
                                      +
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="grid__item one-quarter grid-product-price">
                                <span className="cart__price">
                                  <span
                                    className="money"
                                    doubly-currency-usd={8900}
                                    doubly-currency="USD"
                                  >
                                    $89.00 USD
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart__row">
                        <div className="grid--full cart__row--table-large">
                          <div className="grid__item large--five-twelfths text-center large--text-right push--large--seven-twelfths">
                            <div className="grid--full cart__row--table">
                              <div className="grid__item one-half large--two-thirds large--text-center">
                                <p className="cart__subtotal_title">Subtotal</p>
                              </div>
                              <div className="grid__item one-half large--one-third">
                                <p className="cart__subtotal">
                                  <span className="money">$268.00 USD</span>
                                </p>
                              </div>
                            </div>
                            <p>
                              <em>
                                Shipping, taxes, and discounts calculated at
                                checkout.
                              </em>
                            </p>
                            <button
                              type="submit"
                              name="update"
                              className="btn--secondary update-cart"
                            >
                              Update Cart
                            </button>
                            <button
                              type="submit"
                              name="checkout"
                              className="btn cart__checkout"
                            >
                              Check Out
                              <span
                                className="icon icon-arrow-right"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div id="html-section-footer" className="html-section">
          <footer className="site-footer" role="contentinfo">
            <div className="footer-info">
              <div className="wrapper">
                <div className="grid footer-info-inner">
                  <div className="info-element grid__item one-quarter small--one-half">
                    <div className="info-wrapper">
                      <div className="image grid__item one-whole">
                        <img src="./assets/images/icon1.png" alt="" />
                      </div>
                      <div className="text grid__item one-whole">
                        <div className="text1">WORLDWIDE DELIVERY</div>
                        <div className="text2">
                          We ship to over 200 countries &amp; regions.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-element grid__item one-quarter small--one-half">
                    <div className="info-wrapper">
                      <div className="image grid__item one-whole">
                        <img src="./assets/images/icon2.png" alt="" />
                      </div>
                      <div className="text grid__item one-whole">
                        <div className="text1">SAFE PAYMENT</div>
                        <div className="text2">
                          Pay with the world’s most popular and secure payment
                          methods.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-element grid__item one-quarter small--one-half">
                    <div className="info-wrapper">
                      <div className="image grid__item one-whole">
                        <img src="./assets/images/icon3.png" alt="" />
                      </div>
                      <div className="text grid__item one-whole">
                        <div className="text1">SHOP WITH CONFIDENCE</div>
                        <div className="text2">
                          Our Buyer Protection covers your purchase from click to
                          delivery.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-element grid__item one-quarter small--one-half">
                    <div className="info-wrapper">
                      <div className="image grid__item one-whole">
                        <img src="./assets/images/icon4.png" alt="" />
                      </div>
                      <div className="text grid__item one-whole">
                        <div className="text1">24/7 HELP CENTER</div>
                        <div className="text2">
                          Round-the-clock assistance for a smooth shopping
                          experience.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main">
              <div className="wrapper">
                <div className="grid">
                  <div className="link-block grid__item one-fifth">
                    <div className="heading">
                      Buyer Central
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </div>
                    <div className="content">
                      <ul className="grid__link">
                        <li>
                          <a href="./collection">
                            <span>Sign in</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Buyer Protection</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Payment Options</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Shipping Policy</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Return Policy</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="link-block grid__item one-fifth">
                    <div className="heading">
                      Information
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </div>
                    <div className="content">
                      <ul className="grid__link">
                        <li>
                          <a href="./collection">
                            <span>Merchant Central</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Merchant Sign In</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Merchant Registration</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>How Does It Work</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Pricing</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="link-block grid__item one-fifth">
                    <div className="heading">
                      Help
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </div>
                    <div className="content">
                      <ul className="grid__link">
                        <li>
                          <a href="./collection">
                            <span>See all Help</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>My Account</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>FAQs</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Other Services</span>
                          </a>
                        </li>
                        <li>
                          <a href="./collection">
                            <span>Shop Box</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="newsletter-social-block grid__item two-fifths">
                    <div className="newsletter-area">
                      <div className="heading">Subscription</div>
                      <div className="desc">
                        Register now to get updates on promotions and coupons
                      </div>
                      <div className="action">
                        <form
                          method="post"
                          action="#"
                          id="contact_form"
                          acceptCharset="UTF-8"
                          className="contact-form"
                        >
                          <input
                            type="hidden"
                            name="form_type"
                            defaultValue="customer"
                          />
                          <input type="hidden" name="utf8" defaultValue="✓" />
                          <div className="newsletter-box input-group">
                            <input
                              type="hidden"
                              name="contact[tags]"
                              defaultValue="newsletter"
                            />
                            <input
                              type="email"
                              name="contact[email]"
                              id="Email"
                              className="input-group__field newsletter__input"
                              defaultValue=""
                              placeholder="Please enter your email"
                            />
                            <span className="input-group__btn">
                              <button
                                type="submit"
                                className="btn newsletter__submit"
                                name="commit"
                                id="Subscribe"
                              >
                                Subscription
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="social-area">
                      <div className="heading">Stay connected</div>
                      <div className="social">
                        <ul className="socialLinks socialLinks--alt">
                          <li className="socialLinks-item">
                            <a
                              href="./collection"
                              title=""
                              className="icon-social facebook"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="socialLinks-item">
                            <a
                              href="./collection"
                              title=""
                              className="icon-social twitter"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="socialLinks-item">
                            <a
                              href="./collection"
                              title=""
                              className="icon-social google-plus"
                            >
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li className="socialLinks-item">
                            <a
                              href="./collection"
                              title=""
                              className="icon-social pinterest"
                            >
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li className="socialLinks-item">
                            <a
                              href="./collection"
                              title=""
                              className="icon-social instagram"
                            >
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="wrapper">
                <div className="grid">
                  <div className="copyright-block grid__item one-half">
                    <div className="cr-text">
                      <p>© 2019 Megastore. All rights Reserved</p>
                    </div>
                  </div>
                  <div className="payment-block">
                    <ul className="payment-icons list--inline">
                      <li className="payment-icon">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon-visa"
                          viewBox="0 0 27 20"
                        >
                          <path
                            fill="#444"
                            d="M19.16 8.465q-.781-.352-1.621-.332-.605 0-.928.225t-.322.508.283.508.947.557q1.855.84 1.836 2.285 0 1.328-1.035 2.119t-2.773.791q-1.445-.02-2.441-.449l.293-1.914.273.156q1.113.449 2.07.449.527 0 .918-.225t.41-.635q0-.273-.254-.498t-.918-.557q-.371-.195-.654-.371t-.596-.459-.488-.664-.176-.811q.02-1.23 1.064-2.002t2.666-.771q1.035 0 1.953.332l-.273 1.855zm-9.14-1.934l-3.457 8.477H4.258L2.461 8.25q.938.371 1.709 1.133t1.104 1.66Q4.063 7.703.001 6.688l.02-.156h3.535q.82 0 .996.684l.762 3.906.254 1.172 2.129-5.762h2.324zm3.085 0l-1.367 8.477H9.55l1.367-8.477h2.188zm13.946 8.477H25q-.156-.996-.234-1.27l-2.813-.02-.449 1.289H19.18l3.262-7.793q.293-.684 1.152-.684h1.68zM23.77 8.797l-.137.361q-.078.205-.127.342t-.029.117q-.703 1.875-.879 2.383h1.777l-.469-2.461z"
                          />
                        </svg>
                      </li>
                      <li className="payment-icon">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon--wide icon-master"
                          viewBox="0 0 23 15"
                        >
                          <path
                            d="M17.375 8.166c-.537 0-.644.237-.644.437 0 .1.061.276.284.276.437 0 .53-.575.514-.699-.015 0-.03-.015-.154-.015zm-6.301-.975c-.399 0-.476.453-.476.499h.813c-.008-.039.07-.499-.337-.499zm-5.526.975c-.537 0-.645.237-.645.437 0 .1.061.276.285.276.437 0 .53-.575.514-.699-.016 0-.03-.015-.154-.015zm15.45-.899c-.323 0-.576.376-.576.937 0 .346.122.568.384.568.399 0 .583-.515.583-.899.008-.422-.13-.606-.392-.606zM16.292.951a6.7 6.7 0 0 0-4.368 1.62 7.007 7.007 0 0 1 1.88 3.024h-.322a6.772 6.772 0 0 0-1.789-2.817 6.723 6.723 0 0 0-1.788 2.817h-.323A7.004 7.004 0 0 1 11.58 2.47 6.817 6.817 0 0 0 7.097.798 6.859 6.859 0 0 0 .236 7.659a6.86 6.86 0 0 0 11.343 5.196 7.07 7.07 0 0 1-1.872-2.764h.33a6.727 6.727 0 0 0 1.657 2.449 6.731 6.731 0 0 0 1.659-2.449h.33a6.937 6.937 0 0 1-1.759 2.656 6.7 6.7 0 0 0 4.368 1.62c3.699 0 6.708-3.009 6.708-6.709C23 3.958 19.992.95 16.292.95v.001zM3.13 9.44l.414-2.618-.936 2.618h-.499l-.061-2.618-.445 2.618H.897l.584-3.477h1.066l.031 2.133.721-2.133H4.45L3.875 9.44H3.13zm2.495 0l.022-.277c-.015 0-.23.338-.752.338-.268 0-.705-.146-.705-.783 0-.813.66-1.081 1.297-1.081.1 0 .314.015.314.015s.023-.046.023-.184c0-.223-.2-.254-.468-.254-.475 0-.798.13-.798.13l.107-.63s.384-.16.883-.16c.26 0 1.005.03 1.005.882l-.284 2.01h-.644V9.44zm2.709-.89c0 .967-.937.928-1.105.928-.614 0-.799-.085-.822-.092l.1-.636c0-.008.307.107.645.107.199 0 .453-.015.453-.253 0-.354-.913-.269-.913-1.106 0-.737.544-.951 1.09-.951.414 0 .674.053.674.053l-.091.645s-.4-.03-.499-.03c-.26 0-.399.052-.399.237 0 .376.868.191.868 1.098h-.001zM9.4 7.306l-.207 1.266c-.016.1.015.238.268.238.061 0 .138-.023.185-.023l-.092.622c-.077.023-.284.092-.545.092-.338 0-.583-.192-.583-.622 0-.292.414-2.67.43-2.686h.73l-.078.43h.36l-.091.683H9.4zm1.772 1.55c.369 0 .775-.176.775-.176l-.13.705s-.238.123-.768.123c-.583 0-1.258-.246-1.258-1.274 0-.89.544-1.681 1.274-1.681.798 0 1.044.583 1.044 1.067 0 .191-.092.668-.092.668h-1.49c0-.016-.137.567.645.567v.001zm2.426-1.42c-.506-.176-.544.799-.76 2.01h-.752l.453-2.824h.683l-.06.407s.245-.445.567-.445a.92.92 0 0 1 .138.007c-.092.2-.185.376-.269.844v.001zm2.096 1.965s-.392.1-.637.1c-.868 0-1.313-.6-1.313-1.512 0-1.374.822-2.103 1.666-2.103.376 0 .821.176.821.176l-.122.775s-.299-.207-.668-.207c-.498 0-.944.476-.944 1.335 0 .423.208.821.722.821.246 0 .606-.176.606-.176l-.13.79-.001.001zm1.756.039l.023-.277c-.016 0-.23.338-.752.338-.268 0-.706-.146-.706-.783 0-.813.66-1.081 1.297-1.081.1 0 .315.015.315.015s.023-.046.023-.184c0-.223-.2-.254-.468-.254-.476 0-.799.13-.799.13l.108-.63s.384-.16.882-.16c.26 0 1.006.03 1.006.882l-.284 2.01c-.008-.007-.645-.007-.645-.007zm1.512.008h-.752l.453-2.825h.683l-.06.407s.245-.446.567-.446c.091 0 .138.008.138.008-.1.2-.185.376-.269.844-.506-.176-.544.807-.76 2.01v.002zm2.234-.008l.03-.26s-.245.306-.683.306c-.606 0-.906-.583-.906-1.182 0-.929.561-1.735 1.228-1.735.43 0 .706.376.706.376l.16-.975h.73l-.56 3.469h-.706zm1.367-.015a.195.195 0 0 1-.108.03.178.178 0 0 1-.107-.03.226.226 0 0 1-.085-.085.187.187 0 0 1-.03-.108c0-.038.007-.077.03-.107a.226.226 0 0 1 .085-.085.187.187 0 0 1 .107-.03c.039 0 .077.007.108.03.038.016.061.046.085.085.023.038.03.069.03.107a.178.178 0 0 1-.03.108.218.218 0 0 1-.085.085zm-.024-.353a.197.197 0 0 0-.183 0 .156.156 0 0 0-.07.069.197.197 0 0 0 0 .183c.016.03.039.054.07.07a.197.197 0 0 0 .183 0 .151.151 0 0 0 .07-.07.197.197 0 0 0 0-.183.156.156 0 0 0-.07-.07zm-.03.284l-.023-.039a.18.18 0 0 0-.039-.053c-.008-.007-.015-.008-.03-.008h-.023v.1h-.038v-.238h.084c.031 0 .047 0 .062.008.014.008.022.016.03.023.008.007.008.022.008.038s-.008.03-.016.046c-.016.016-.03.023-.046.023.008 0 .016.008.023.016.006.008.022.023.038.046l.03.047h-.06v-.01zm-.015-.17c0-.008 0-.016-.008-.016l-.016-.015c-.008 0-.023-.008-.038-.008h-.047v.069h.047c.022 0 .038 0 .046-.008.016-.008.016-.016.016-.023v.001z"
                            fill="#444"
                            fillRule="evenodd"
                          />
                        </svg>
                      </li>
                      <li className="payment-icon">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon-american_express"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#444"
                            d="M8.373 7.623v-.46H6.606V9.37h1.767v-.453h-1.24v-.44H8.34v-.453H7.133v-.4zm2.487.134c0-.247-.1-.393-.267-.487-.173-.1-.367-.107-.64-.107H8.74v2.213h.527v-.807h.567c.193 0 .307.02.387.093.093.107.087.3.087.433v.28h.533v-.433c0-.2-.013-.293-.087-.407a.629.629 0 0 0-.26-.187.638.638 0 0 0 .367-.593zm-.693.313c-.073.047-.16.047-.26.047h-.64v-.493h.653c.093 0 .187.007.253.04s.113.1.113.193c-.007.1-.047.173-.12.213zm-8.874.813h1.1l.2.493h1.073V7.643l.767 1.733H4.9l.767-1.733v1.733h.54V7.163h-.873l-.633 1.5-.693-1.5h-.86v2.093l-.9-2.093h-.787L.574 9.23v.14h.513l.207-.487zm.547-1.346l.36.88h-.72l.36-.88zm11.22.1h.5v-.473h-.513c-.367 0-.633.08-.8.26-.227.24-.287.533-.287.867 0 .4.093.653.28.847.147.2.413.273.767.247h.62l.2-.493h1.1l.207.493h1.073v-1.66l1 1.66h.747V7.172h-.54v1.54l-.927-1.54h-.807v2.093l-.893-2.093H14l-.747 1.74h-.24c-.14 0-.287-.027-.367-.113-.1-.113-.147-.28-.147-.52 0-.233.06-.407.153-.5.107-.113.213-.14.407-.14zm1.32-.1l.367.88h-.727l.36-.88zm-3.213-.374h.54v2.213h-.54V7.163zm1.96 4.4a.522.522 0 0 0-.273-.493c-.173-.093-.367-.107-.633-.107h-1.22v2.213h.533v-.807h.567c.193 0 .313.02.387.1.1.1.087.3.087.433v.273h.533v-.44c0-.193-.013-.293-.087-.407a.585.585 0 0 0-.26-.187.61.61 0 0 0 .367-.58zm-.694.314a.534.534 0 0 1-.26.047h-.64v-.493h.653c.093 0 .187 0 .253.04.067.033.107.107.107.2s-.047.167-.113.207zM9.86 10.97H8.173l-.673.727-.653-.727h-2.12v2.213H6.82l.673-.733.653.733h1.027v-.74h.66c.46 0 .92-.127.92-.74-.007-.62-.473-.733-.893-.733zm-3.313 1.747H5.254v-.44h1.16v-.453h-1.16v-.4h1.327l.58.647-.613.647zm2.1.26l-.813-.9.813-.873v1.773zm1.206-.987h-.68v-.56h.687c.193 0 .32.08.32.273 0 .187-.127.287-.327.287zm5.327-.567v-.453h-1.76v2.207h1.76v-.46h-1.233v-.44h1.207v-.453h-1.207v-.4zm4.127.647a.171.171 0 0 0-.047-.053c-.12-.12-.313-.173-.6-.18l-.287-.007a.623.623 0 0 1-.207-.027.169.169 0 0 1-.113-.167c0-.073.02-.12.08-.16.053-.033.12-.04.213-.04h.96v-.473h-1.053c-.553 0-.76.34-.76.66 0 .7.62.667 1.113.687.093 0 .147.013.187.047s.067.08.067.147c0 .06-.027.107-.06.147-.04.04-.113.053-.213.053h-1.013v.473h1.02c.34 0 .587-.093.72-.28a.724.724 0 0 0 .113-.413c-.007-.193-.047-.313-.12-.413zm-.774 1.54h-1.367v-.2c-.16.127-.447.2-.72.2h-4.313v-.713c0-.087-.007-.093-.093-.093h-.067v.807h-1.42v-.833c-.24.1-.507.113-.733.107h-.167v.733h-1.72l-.427-.48-.447.48H4.246v-3.087h2.847l.407.473.433-.473H9.84c.22 0 .58.02.747.18v-.18h1.707c.16 0 .507.033.713.18v-.18h2.58v.18c.127-.12.4-.18.633-.18h1.447v.18c.153-.107.367-.18.66-.18h.98V.258H.574v7.78l.573-1.313h1.38l.18.367v-.367H4.32l.353.793.347-.793h5.127c.233 0 .44.047.593.18v-.18h1.407v.18c.24-.133.54-.18.88-.18h2.033l.187.367v-.367h1.507l.207.367v-.367h1.467v3.08h-1.48l-.28-.467v.467h-1.853l-.2-.493h-.453l-.207.493h-.96c-.38 0-.66-.087-.847-.187v.187h-2.28v-.7c0-.1-.02-.107-.08-.107h-.087v.807H5.288v-.38l-.16.38h-.92l-.16-.38v.373H2.275l-.2-.493h-.453l-.207.493h-.84v9.313h18.727v-5.653c-.207.113-.487.153-.767.153zm-2.013-.907h-1.027v.473h1.027c.533 0 .827-.22.827-.7 0-.227-.053-.36-.16-.467-.12-.12-.313-.173-.607-.18l-.287-.007a.623.623 0 0 1-.207-.027.169.169 0 0 1-.113-.167c0-.073.02-.12.08-.16.053-.033.113-.04.213-.04h.967v-.473h-1.06c-.553 0-.753.34-.753.66 0 .7.62.667 1.113.687.093 0 .147.013.187.047.033.033.067.08.067.147 0 .06-.027.107-.06.147-.033.047-.107.06-.207.06z"
                          />
                        </svg>
                      </li>
                      <li className="payment-icon">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon--wide icon-paypal"
                          viewBox="0 0 36 20"
                        >
                          <path
                            fill="#444"
                            d="M33.691 7.141h2.012l-1.66 7.5h-1.992zM5.332 7.16q.918 0 1.553.674t.381 1.865q-.234 1.152-1.064 1.807t-1.963.654H2.696l-.547 2.48H.001l1.641-7.48h3.691zm19.141 0q.918 0 1.563.674t.391 1.865q-.156.762-.596 1.328t-1.074.85-1.396.283h-1.523l-.527 2.48h-2.148l1.641-7.48h3.672zM8.027 9.055q.098-.02.42-.098t.537-.127.566-.098.684-.049q.547-.02 1.025.078t.879.313.566.645.029 1.016l-.82 3.906H9.94l.137-.586q-.41.41-1.035.586t-1.182.088-.889-.615-.176-1.387q.215-1.016 1.221-1.455t2.744-.439q.059-.293-.059-.469t-.352-.244-.625-.049q-.508.02-1.094.156t-.781.254zm19.18 0q.117-.02.342-.078t.42-.107.439-.088.508-.068.537-.029q.566-.02 1.045.078t.879.313.576.645.039 1.016l-.84 3.906H29.16l.137-.586q-.41.41-1.045.586t-1.201.088-.898-.615-.176-1.387q.137-.703.684-1.123t1.348-.596 1.973-.176q.098-.449-.166-.615t-.869-.146q-.352 0-.762.078t-.713.166-.459.166zM4.004 10.734q.273 0 .537-.137t.449-.371.244-.527q.117-.43-.098-.723t-.625-.293H3.476l-.469 2.051h.996zm19.16 0q.41 0 .781-.303t.469-.732-.127-.723-.615-.293h-1.094l-.43 2.051h1.016zm-9.531-1.933l.801 5.879-1.445 2.461h2.207l4.688-8.34h-2.031L15.9 12.278l-.313-3.477h-1.953zm-3.242 3.887q0-.195.098-.527h-.508q-.918 0-1.172.488-.195.352-.01.586t.537.234q.859-.039 1.055-.781zm19.199 0q.039-.332.117-.527h-.488q-.977 0-1.191.488-.195.352-.01.586t.537.234q.879-.039 1.035-.781z"
                          />
                        </svg>
                      </li>
                      <li className="payment-icon">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon-diners_club"
                          viewBox="0 0 17 20"
                        >
                          <path
                            fill="#444"
                            d="M10.156 3.875q1.895 0 3.525.859t2.646 2.471 1.016 3.584q0 1.836-1.006 3.418t-2.666 2.49-3.516.908H6.913q-1.855 0-3.457-.908t-2.529-2.49-.928-3.418q0-1.992.938-3.584t2.51-2.461 3.467-.869h3.242zM6.934 17.02q1.719 0 3.164-.84t2.285-2.285.84-3.164q0-1.699-.84-3.145t-2.285-2.285-3.164-.84q-1.699 0-3.145.84T1.504 7.586t-.84 3.145q0 1.719.84 3.164t2.285 2.285 3.145.84zm-1.426-2.579q-1.133-.43-1.836-1.445t-.723-2.266q.02-1.25.732-2.275t1.826-1.436v7.422zM8.379 7.02q1.113.41 1.826 1.436t.713 2.275-.713 2.266-1.826 1.445V7.02z"
                          />
                        </svg>
                      </li>
                      <li className="payment-icon">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon--wide icon-discover"
                          viewBox="0 0 52 20"
                        >
                          <path
                            fill="#444"
                            d="M22.598 14.617q-1.094.488-2.031.488-1.855 0-3.125-1.26t-1.27-3.115q0-1.797 1.299-3.076t3.135-1.279q1.035 0 1.992.508v1.914q-.957-.938-2.031-.938-1.152 0-1.943.84t-.791 2.031q0 1.27.791 2.07t2.021.801q1.055 0 1.953-.898v1.914zm-8.086-6.152q-.586-.664-1.328-.664-.527 0-.869.264t-.342.654q0 .332.264.557t.986.479q1.406.508 1.914 1.064t.508 1.553q0 1.211-.811 1.973t-2.08.762q-1.816 0-2.891-1.582l1.055-1.016q.586 1.113 1.777 1.113.547 0 .908-.332t.361-.84q0-.527-.488-.859-.273-.176-1.133-.469-1.133-.43-1.592-.938t-.459-1.387q0-1.016.752-1.699t1.846-.684q1.387 0 2.461.957zm13.164-2.051q1.875 0 3.154 1.26t1.279 3.076-1.289 3.086-3.145 1.27q-1.914 0-3.193-1.25t-1.279-3.145q0-1.797 1.309-3.047t3.164-1.25zm-25.293.137q1.973 0 3.232 1.172t1.26 3.008q0 .918-.391 1.768t-1.113 1.455q-1.211.977-2.988.977H0V6.552h2.383zm5.234 0h1.641v8.379H7.617V6.551zm30.43 0h1.777l-3.633 8.574h-.859l-3.535-8.574h1.758l2.227 5.625zm2.5 0h4.629v1.426h-2.988v1.855h2.871v1.406h-2.871v2.266h2.988v1.426h-4.629V6.551zm8.125 0q1.406 0 2.168.645t.762 1.836q0 .957-.479 1.563t-1.396.801l2.617 3.535h-1.992l-2.266-3.398h-.195v3.398H46.25V6.552h2.422zm-.313 3.847q1.582 0 1.582-1.289 0-1.23-1.582-1.23h-.469v2.52h.469zM2.09 13.504q1.484 0 2.207-.664.43-.391.674-.947t.244-1.162q0-1.27-.918-2.07-.742-.684-2.207-.684h-.449v5.527h.449z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="combo-icons medium-down--hide">
        <div id="float-saleoff" title="Special Deals">
          <a href="./page-saleoff.html">
            <i className="fa fa-gift" aria-hidden="true" />
          </a>
        </div>
        <div id="float-wishlist" title="My Wishlist">
          <a href="./pagewishlist">
            <i className="fa fa-heart" aria-hidden="true" />
            <span className="number">
              <span className="wlnumber">0</span>
            </span>
          </a>
        </div>
        <div id="float-compare" title="My Compare">
          <a href="./pagecompare">
            <i className="fa fa-refresh" aria-hidden="true" />
            <span className="number">
              <span className="cpnumber">0</span>
            </span>
          </a>
        </div>
      </div>
      <div id="scroll-to-top" title="Scroll to Top" className="off">
        <i className="fa fa-caret-up" />
      </div>

      <Script src="./assets/js/jquery.min.js" strategy='beforeInteractive'></Script>
      <Script src="./assets/js/jquery-ui.min.js" strategy='beforeInteractive'></Script>
      <Script src="./assets/js/jquery.fancybox.min.js" defer=""></Script>
      <Script src="./assets/js/modernizr.min.js"></Script>
      <Script src="./assets/js/jquery.easytabs.min.js" strategy='beforeInteractive'></Script>
      <Script src="./assets/js/owl.carousel.min.js" strategy='beforeInteractive'></Script>
      <Script src="./assets/js/jquery.themepunch.plugins.min.js" strategy='beforeInteractive'></Script>
      <Script src="./assets/js/jquery.themepunch.revolution.min.js" strategy='beforeInteractive'></Script>
      <Script src="./assets/js/jquery.countdown.plugins.js" type="text/javascript" strategy='beforeInteractive'></Script>
      <Script src="./assets/js/jquery.countdown.js" type="text/javascript"></Script>
      <Script src="./assets/js/slick.min.js" type="text/javascript"></Script>
      <Script src="./assets/js/jquery.elevateZoom-3.0.8.min.js" type="text/javascript"></Script>
      <Script src="./assets/js/tada.js"></Script>

    </>

  )
}
