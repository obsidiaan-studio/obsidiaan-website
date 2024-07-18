import React from "react"

import Link from "next/link"

import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap"

import data from "../data/contact.json"
import Image from "../components/CustomImage"
import Icon from "../components/Icon"
import Map from "../components/Map"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Contact",
    },
  }
}

const Contact = () => {
  return (
    <React.Fragment>
      <section className="hero py-6 py-lg-7 text-white dark-overlay">
        {data.img && (
          <Image
            src={`/content/img/photo/${data.img}`}
            alt={data.title}
            className="bg-image"
            loading="eager"
            layout="fill"
          />
        )}
        <Container className="overlay-content">
          <Breadcrumb
            listProps={{
              className: "text-white justify-content-center no-border mb-0",
            }}
          >
            <Link href="/" passHref>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>{data.subtitle}</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="hero-heading">{data.title}</h1>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            {data.address && (
              <Col md="4" className="text-center text-md-start mb-4 mb-md-0">
                <div className="icon-rounded mb-4 bg-primary-light">
                  <Icon
                    icon="map-location-1"
                    className="w-2rem h-2rem text-primary"
                  />
                </div>
                <h3 className="h5">{data.address.title}</h3>
                <p className="text-muted">
                  {data.address.row1}
                  <br />
                  {data.address.row2}
                  <br />
                  <span
                    dangerouslySetInnerHTML={{ __html: data.address.row3 }}
                  />
                </p>
              </Col>
            )}
            {data.mail && (
              <Col md="4" className="text-center text-md-start mb-4 mb-md-0">
                <div className="icon-rounded mb-4 bg-primary-light">
                  <Icon
                    icon="mail-1"
                    className="w-2rem h-2rem text-primary"
                  />
                </div>
                <h3 className="h5">{data.mail.title}</h3>
                <p className="text-muted">{data.mail.content}</p>
                <ul className="list-unstyled text-muted">
                  {data.mail.emails.map((email) => (
                    <li key={email}>{email}</li>
                  ))}
                </ul>
              </Col>
            )}
            {data.phone && (
              <Col md="4" className="text-center text-md-start mb-4 mb-md-0">
                <div className="icon-rounded mb-4 bg-primary-light">
                  <Icon icon="call-1" className="w-2rem h-2rem text-primary" />
                </div>
                <h3 className="h5">{data.phone.title}</h3>
                <p className="text-muted">{data.phone.content}</p>
                <p className="text-muted">
                  <strong>{data.phone.phone}</strong>
                </p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
      <div className="map-wrapper-300">
        <Map
          className="h-100"
          center={[50.8960619, 5.7380380]}
          markerPosition={[50.8960619, 5.7380380]}
          zoom={16}
        />
      </div>
    </React.Fragment>
  )
}

export default Contact
