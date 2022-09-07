import './card.scss';
import cartIcon from '../../public/icon-cart.svg';

const Card = () => {
  return (
    <section className="card">
      <picture>
        <source srcSet="image-product-desktop.jpg" media="(min-width: 450px)" />
        <img
          className="card-image"
          src="image-product-mobile.jpg"
          alt="product-img"
        />
      </picture>
      <div className="card-text-container">
        <h4>Perfume</h4>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
        <div className="card-pricing">
          <span className="card-pricing-original">$149.99</span>
          <span className="card-pricing-discount">169.99</span>
        </div>
        <button>
          <img src={cartIcon} alt="cart-icon" />
          <span>Add to Cart</span>
        </button>
      </div>
    </section>
  );
};
export default Card;
