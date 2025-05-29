import React from "react";
import Masonry from "react-masonry-css";

import "react-day-picker/dist/style.css";
import { Container, Row, Col } from "react-bootstrap";

import CardShop from "../../components/CardShop";

import data from "../../data/category-3-rooms.json";
import geoJSON from "../../data/shop-data.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Glass Shop | Types - No map",
    },
  };
}

const breakpointColumnsObj = {
  default: 3,
  992: 2,
  576: 1,
};

const Shop = () => {
  return (
    <React.Fragment>
      <Container fluid className="pt-5 pb-3 border-bottom px-lg-5">
        <Row>
          <Col xl="8">
            <h1 className="mb-4">{data.title}</h1>
            <p className="lead text-muted">{data.content}</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5 px-lg-5">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {geoJSON.features?.map((glass) => (
            <div key={glass.properties.id} className="hover-animate">
              <CardShop
                data={glass.properties}
                link={`/shop/${glass.properties.id}`} // Use id as slug
                sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, calc(25vw - 60px)"
              />
            </div>
          ))}
        </Masonry>
      </Container>

      {/* Inline global styles for masonry */}
      <style jsx global>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -24px; /* gutter size offset */
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 24px; /* gutter size */
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div {
          margin-bottom: 24px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Shop;