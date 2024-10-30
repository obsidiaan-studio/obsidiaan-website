import React, { useEffect, useRef, useState } from "react"

import "react-day-picker/dist/style.css"

import {
  Container,
  Row,
  Col,
} from "react-bootstrap"
import UseWindowSize from "../hooks/UseWindowSize"
import Swiper from "../components/Swiper"

import data from "../data/detail-rooms.json"

import Map from "../components/Map"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Rooms detail",
    },
  }
}

const DetailRooms = () => {
  const size = UseWindowSize()
  const [range, setRange] = useState({
    from: false,
    to: false,
  }) 

  // const groupedAmenities = data.amenities && groupByN(4, data.amenities)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const fromRef = useRef()
  const toRef = useRef()
  useEffect(() => {
    if (range?.from && (!range?.to || range.to !== range.from)) {
      const timer = setTimeout(() => setShowDatePicker(false), 200)
      return () => clearTimeout(timer)
    }
  }, [range])
  return (
    <React.Fragment>
      <section>
        <Container className="py-5">
          <Row>
            <Col lg="8">
              <div className="text-block">
                {data.title && <h1>{data.title}</h1>}
                {data.category && (
                  <div className="text-muted text-uppercase mb-4">
                    {data.category}
                  </div>
                )}
                <p className="text-muted fw-light">
                  Our garden basement apartment is fully equipped with
                  everything you need to enjoy your stay. Very comfortable for a
                  couple but plenty of space for a small family. Close to many
                  wonderful Brooklyn attractions and quick trip to Manhattan.{" "}
                </p>
                <h6 className="mb-3">Geïntreseerd?</h6>
                <p className="text-muted fw-light">
                  Contact.{" "}
                </p>
              </div>
              <div className="text-block">
                <h3 className="mb-4">Location</h3>
                <div className="map-wrapper-300 mb-3">
                  <Map
                    className="h-100"
                    center={[40.732346, -74.0014247]}
                    circlePosition={[40.732346, -74.0014247]}
                    circleRadius={500}
                    zoom={14}
                  />
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div
                style={{ top: "100px" }}
                className="p-4 shadow ms-lg-4 rounded sticky-top"
              >
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {data.similar && (
        <section className="py-6 bg-gray-100">
          <Container>
            <h5 className="mb-0">{data.similar.title}</h5>
            <p className="subtitle text-sm text-primary mb-4">
              {data.similar.subtitle}
            </p>
            <Swiper
              className="swiper-container-mx-negative items-slider pb-5"
              perView={1}
              spaceBetween={20}
              loop={true}
              roundLengths={true}
              md={2}
              lg={3}
              xl={4}
              data={data.similar.items}
              cards
              pagination
            />
          </Container>
        </section>
      )}
    </React.Fragment>
  )
}

export default DetailRooms
