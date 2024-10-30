// fussen.js
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import CardPortfolio from "../../components/CardPortfolio"
import portfolioData from "../../data/portfolio-tiffany.json" // Replace with actual JSON data for Fussen

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
  }
}

const Fussen = () => {
  return (
    <React.Fragment>
      <Container fluid className="pt-5 pb-3 border-bottom px-lg-5">
        <Row>
          <Col xl="8">
            <h1 className="mb-4">Tiffany Portfolio</h1>
            <p className="lead text-muted">Explore our Tiffany works.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5 px-lg-5">
        <Row
          data-masonry='{"percentPosition": true }'
        >
          {portfolioData.features &&
            portfolioData.features.map((item) => (
              <Col
                key={item.properties.name}
                sm="6"
                xl="4"
                className="mb-5 hover-animate masonry-item"
              >
                <CardPortfolio
                  data={item.properties}
                  sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, calc(25vw - 60px)"
                />
              </Col>
            ))}
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Fussen
