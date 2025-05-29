import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

import Swiper from "./Swiper"

import data from "../data/lastminute.json"
import shopData from "../data/shop-data.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

// Convert shop-data to array of card items, filtering out incomplete entries
const shopSwiperItems = shopData.features
  .filter(
    (item) =>
      item.properties &&
      item.properties.id &&
      item.properties.image &&
      item.properties.category
  )
  .map((item) => ({
    id: item.properties.id,
    title: item.properties.category || "Glas in lood",
    subtitle: "",
    img: `/img/photo/${item.properties.image}`,
    price: item.properties.price,
    link: `/shop/${item.properties.id}`,
    image: item.properties.image,
    category: item.properties.category,
    name: item.properties.name,
  }))

const LastMinute = (props) => {
  return (
    <section className={`py-6 ${props.greyBackground ? "bg-gray-100" : ""}`}>
      <Container>
        <Row className="mb-5">
          <Col md="8">
            <p className="subtitle text-secondary">{data.subtitle}</p>
            <h2>{data.title}</h2>
          </Col>
          <Col
            md="4"
            className="d-lg-flex align-items-center justify-content-end"
          >
            {data.buttonLink && (
              <Link href={data.buttonLink}>
                <a className="text-muted text-sm">
                  {data.button}
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="ms-2" />
                </a>
              </Link>
            )}
          </Col>
        </Row>
        <Swiper
          className="swiper-container-mx-negative pt-3 pb-5"
          perView={1}
          spaceBetween={20}
          roundLengths
          md={2}
          lg={3}
          xl={4}
          data={shopSwiperItems}
          cards
          loop
          pagination
        />
      </Container>
    </section>
  )
}

export default LastMinute