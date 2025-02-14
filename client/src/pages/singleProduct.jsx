import { useEffect } from "react";
import styles from "./singleProduct.module.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../Contexts/ProductContext";
// import AddToCart from "../components/AddToCart"
import MyImage from "../components/MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../components/Star";
import InquiryForm from "../components/InquiryForm";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Contexts/cardcontext";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  console.log("sing",id)
  const {addToCart}=useCartContext()

  const {
    id: alias,
    price,
    service,
    description,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    console.log("aaaaaa",id);
    
    getSingleProduct(id);
  }, []);
  
  

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.grid} ${styles["grid-two-column"]}`}>
        <div className={styles.product_images}>
          <MyImage imgs={image} />
        </div>

        {/* product data */}
        <div className={styles.product_data}>
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews} />

          <p className={styles.product_data_price}>
            MRP:
            <del>
              <FormatPrice price={ 250000} />
            </del>
          </p>
          <p
            className={`${styles.product_data_price} ${styles["product_data_real_price"]}`}
          >
            Deal of the Day: <FormatPrice price={89999} />
          </p>
          <p>{description}</p>
          <div className={styles.product_data_warranty}>
            <div className={styles.product_warranty_data}>
              <TbTruckDelivery className={styles.warranty_icon} />
              <p>Free Delivery</p>
            </div>

            <div className={styles.product_warranty_data}>
              <TbReplace className={styles.warranty_icon} />
              <p>30 Days Replacement</p>
            </div>

            <div className={styles.product_warranty_data}>
              <TbTruckDelivery className={styles.warranty_icon} />
              <p>Delivered</p>
            </div>

            <div className={styles.product_warranty_data}>
              <MdSecurity className={styles.warranty_icon} />
              <p>2 Year Warranty</p>
            </div>
          </div>

          <div className={styles.product_data_info}>
            {/* <p>
              Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
            </p> */}
            <p>
              ID: <span>{id}</span>
            </p>
            <p>
              {/* Brand: <span>{company}</span> */}
            </p>
          </div>
{          console.log("price",price)}
          <NavLink to="/cart" onClick={() => addToCart(id, service, price)}>
  <FaCartPlus className={styles.warranty_icon} />
  <span>Add to Cart</span>
</NavLink>
        </div>
      </div>
      <InquiryForm/>
    </div>
  );
};

export default SingleProduct;
