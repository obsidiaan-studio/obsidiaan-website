import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

import Swiper from "./Swiper"

import data from "../data/guides.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Guides = (props) => {
  return (
    <section className={`py-6 ${props.greyBackground ? "bg-gray-100" : ""}`}>
      <Container>
        <Row className="mb-5">
          <Col md="8">
            <p className="subtitle text-primary">{data.subTitle}</p>
            <h2>{data.title}</h2>
          </Col>
        </Row>
        
        {/* Glas in lood Section */}
        <Row className="mb-5">
          <Col md="8">
            <h3>{data.categories.glasInLood.title}</h3>
          </Col>
          <Col
            md="4"
            className="d-lg-flex align-items-center justify-content-end"
          >
            {data.categories.glasInLood.buttonLink && (
              <Link href={data.categories.glasInLood.buttonLink}>
                <a className="text-muted text-sm">
                  {data.categories.glasInLood.button}
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="ms-2" />
                </a>
              </Link>
            )}
          </Col>
        </Row>
        <Swiper
          className="guides-slider mx-n2 pt-3 pb-5"
          perView={1}
          spaceBetween={20}
          imgCards
          loop
          roundLengths
          md={2}
          lg={4}
          xl={5}
          data={data.categories.glasInLood.swiperItems}
        />

        {/* Tiffany Section */}
        <Row className="mb-5">
          <Col md="8">
            <h3>{data.categories.tiffany.title}</h3>
          </Col>
          <Col
            md="4"
            className="d-lg-flex align-items-center justify-content-end"
          >
            {data.categories.tiffany.buttonLink && (
              <Link href={data.categories.tiffany.buttonLink}>
                <a className="text-muted text-sm">
                  {data.categories.tiffany.button}
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="ms-2" />
                </a>
              </Link>
            )}
          </Col>
        </Row>
        <Swiper
          className="guides-slider mx-n2 pt-3 pb-5"
          perView={1}
          spaceBetween={20}
          imgCards
          loop
          roundLengths
          md={2}
          lg={4}
          xl={5}
          data={data.categories.tiffany.swiperItems}
        />

        {/* Glas fusen Section */}
        <Row className="mb-5">
          <Col md="8">
            <h3>{data.categories.glasFusen.title}</h3>
          </Col>
          <Col
            md="4"
            className="d-lg-flex align-items-center justify-content-end"
          >
            {data.categories.glasFusen.buttonLink && (
              <Link href={data.categories.glasFusen.buttonLink}>
                <a className="text-muted text-sm">
                  {data.categories.glasFusen.button}
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="ms-2" />
                </a>
              </Link>
            )}
          </Col>
        </Row>
        <Swiper
          className="guides-slider mx-n2 pt-3 pb-5"
          perView={1}
          spaceBetween={20}
          imgCards
          loop
          roundLengths
          md={2}
          lg={4}
          xl={5}
          data={data.categories.glasFusen.swiperItems}
        />
      </Container>
    </section>
  )
}

export default Guides
