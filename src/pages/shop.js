import React, { useEffect, useRef, useState } from "react";

import UseWindowSize from "../hooks/UseWindowSize";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Select from "react-select";

import {
  Container,
  Row,
  Col,
  Form,
  Collapse,
  Button,
  Overlay,
} from "react-bootstrap";

import Nouislider from "nouislider-react";
import Pagination from "../components/Pagination";

import ResultsTopBar from "../components/ResultsTopBar";
import CardShop from "../components/CardShop";

import data from "../data/category-3-rooms.json";
import geoJSON from "../data/shop-data.json"; // Changed geoJSON source
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";

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
      <Container fluid className="pt-5 pb-3 border-bottom px-lg-5">
        <Row>
          <Col xl="8">
            <h1 className="mb-4">{data.title && data.title}</h1>
            <p className="lead text-muted">{data.content && data.content}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5 px-lg-5">
        <Row>
          <Col>
            <ResultsTopBar sortBy={data.sortby} />
            <Row>
              {geoJSON.features &&
                geoJSON.features.map((glass) => (
                  <Col
                    key={glass.properties.name}
                    sm="6"
                    xl="4"
                    className="mb-5 hover-animate"
                  >
                    <CardShop
                      data={glass.properties}
                      sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, calc(25vw - 60px)"
                    />
                  </Col>
                ))}
            </Row>
            <Pagination />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Shop;
