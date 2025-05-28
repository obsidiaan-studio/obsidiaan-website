import React from "react";
import Masonry from "react-masonry-css";
import { Container, Row, Col } from "react-bootstrap";
import CardPortfolio from "../../components/CardPortfolio";
import portfolioData from "../../data/portfolio-fussen.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Fussen",
    },
  };
}

const breakpointColumnsObj = {
  default: 3,
  992: 2,
  576: 1,
};

const Fussen = () => {
  return (
    <React.Fragment>
      <Container fluid className="pt-5 pb-3 border-bottom px-lg-5">
        <Row>
          <Col xl="8">
            <h1 className="mb-4">Fussen Portfolio</h1>
            <p className="lead text-muted">Explore our Fussen works.</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5 px-lg-5">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {portfolioData.features?.map((item) => (
            <div key={item.properties.name} className="hover-animate">
              <CardPortfolio
                data={item.properties}
                sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, calc(25vw - 60px)"
              />
            </div>
          ))}
        </Masonry>
      </Container>

      <style jsx global>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -24px;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 24px;
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div {
          margin-bottom: 24px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Fussen;
