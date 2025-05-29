import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

import geoJSON from "../../data/shop-data.json";
import Map from "../../components/Map"; // Assuming you have a Map component

export async function getStaticPaths() {
  const paths = geoJSON.features.map((glass) => ({
    params: { slug: String(glass.properties.id) }, // Use id as string
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Find the product data based on the slug (id as string)
  const product = geoJSON.features.find(
    (glass) => String(glass.properties.id) === params.slug
  );

  return {
    props: {
      product: product ? product.properties : null,
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
    },
  };
}

const ProductPage = ({ product }) => {
  const router = useRouter();

  // If no product is found, show a fallback (shouldn't happen with fallback: false)
  if (!product) {
    return <p>Product niet gevonden</p>;
  }

  return (
    <React.Fragment>
      <section>
        <Container className="py-5">
          <Row>
            {/* Main Content */}
            <Col lg="8">
              {/* Title */}
              <div className="text-block mb-5">
                <h1 className="display-4"><strong>{product.name || `Product #${product.id}`}</strong></h1>
              </div>

              {/* Image */}
              <div className="text-block mb-5">
                <h3 className="mb-4">Foto</h3>
                <img
                  src={`/content/img/photo/${product.image || "placeholder.jpg"}`}
                  alt={product.name || `Product #${product.id}`}
                  className="img-fluid rounded"
                />
              </div>

              {/* Location */}
              <div className="text-block mb-5">
                <h3 className="mb-4">Locatie</h3>
                <div className="map-wrapper-300 mb-3">
                  <Map
                    className="h-100"
                    center={[50.8960619, 5.7380380]} // Replace with actual coordinates if available
                    markerPosition={[50.8960619, 5.7380380]} // Replace with actual coordinates if available
                    zoom={16}
                  />
                </div>
              </div>
            </Col>

            {/* Sidebar */}
            <Col lg="4">
              <div
                style={{ top: "100px" }}
                className="p-4 shadow ms-lg-4 rounded sticky-top"
              >
                <h4 className="mb-4">Product informatie</h4>
                <p>
                  <strong>Categorie:</strong> {product.category || "N/A"}
                </p>
                <p>
                  <strong>Ge&iuml;nteresseerd?</strong> <br /> Ga naar onze{" "}
                  <a href="/contact">contact pagina</a> om een werk te kopen.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ProductPage;