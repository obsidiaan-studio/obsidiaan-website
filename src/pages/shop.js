import React, { useEffect, useRef, useState } from "react";

import Head from "next/head";

import "react-day-picker/dist/style.css";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Pagination from "../components/Pagination";

import CardShop from "../components/CardShop";

import data from "../data/category-3-rooms.json";
import geoJSON from "../data/shop-data.json";

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

const Shop = () => {
  return (
    <React.Fragment>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
          integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <Container fluid className="pt-5 pb-3 border-bottom px-lg-5">
        <Row>
          <Col xl="8">
            <h1 className="mb-4">{data.title && data.title}</h1>
            <p className="lead text-muted">{data.content && data.content}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5 px-lg-5">
        <Row
          data-masonry='{"percentPosition": true }' // Masonry data attribute for integration
        >
          {geoJSON.features &&
            geoJSON.features.map((glass) => (
              <Col
                key={glass.properties.name}
                sm="6"
                xl="4"
                className="mb-5 hover-animate masonry-item"
              >
                <CardShop
                  data={glass.properties}
                  sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, calc(25vw - 60px)"
                />
              </Col>
            ))}
        </Row>
        <Pagination />
      </Container>
    </React.Fragment>
  );
};

export default Shop;