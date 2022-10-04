import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col} from 'reactstrap';
import '../styles/hero-section.css';
import '../styles/home.css';
import products from '../assets/database/products.js';
import ProductCard from '../components/UI/product-card/ProductCard.jsx'; 

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  const [hotQuick_and_Easy, setHotQuick_and_Easy] = useState([]);

  useEffect(() => {
    const filteredQuick_and_Easy = products.filter((item) => item.category === 'Quick_and_Easy');
    const sliceQuick_and_Easy = filteredQuick_and_Easy.slice(0, 4);
    setHotQuick_and_Easy(sliceQuick_and_Easy);
  }, []);
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'Duolicious_dishes') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Duolicious_dishes'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'Quick_and_Easy') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Quick_and_Easy'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'Healty_Choices') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Healty_Choices'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            {allProducts.map((item) => {
              return (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
 
    </Helmet>
  );
};

export default Home;
