import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SingleProduct as singlePro, addToCartv } from "./action";
const SingleProduct = () => {
  const [pro, setPro] = useState([]);
  let location = useLocation();
  let dispatch = useDispatch()
  useEffect(() => {
    let a = location.state;
    console.log(a);
    setPro(a);

    console.log(pro);
  }, []);

  return (
    <>
      <br />
      <div style={{margin:"1rem"}}>
        <h1>{pro.productName}</h1>

        <br />
        <div style={{float:"left" ,margin:"3rem" ,}}>
          <img src={pro.imgUrl} style ={{height :"30rem",width:"30rem"}}alt="" />
        </div>
        <div style = {{marginTop:"3rem"}}>
          <h2>{pro.productName}</h2>
          <br />
          <h3>{pro.productDescription}</h3>
          <br />
          <br />
          <h1>Price ₹ {pro.price}</h1>
          <Button  size="lg" variant="outline-dark" style = {{width :"16rem",borderRadius: "0px",
                  
                  borderColor: "black",marginTop:"1rem"}}
                  onClick={() => {
                    dispatch(singlePro(pro));
                    dispatch(addToCartv());
                  }}>
           Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
