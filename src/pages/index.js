import React from "react"
import Link from "next/link"
import Image from "../components/CustomImage"
import { Container, Row, Col, Button } from "react-bootstrap"

import Swiper from "../components/Swiper"
import LastMinute from "../components/LastMinute"
import Guides from "../components/Guides"
import TechniekCard from "../components/TechniekCard"

import SwiperTestimonial from "../components/SwiperTestimonial"

import data from "../data/index.json"
import Icon from "../components/Icon"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Homepage",
    },
  }
}

const Index = () => {
  return (
    <React.Fragment>
      <section className="hero-home">
        <Swiper
          className="hero-slider"
          wrapperClasses="dark-overlay"
          data={data.swiperImages}
          simple
          effect="fade"
          speed={2000}
          autoplay={{
            delay: 10000,
          }}
          priority
        />
        <Container className="py-6 py-md-7 text-white z-index-20">
          <Row>
            <Col xl="10">
              {data.hero && (
                <div className="text-center text-lg-start">
                  <p className="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">
                    {data.hero.subTitle}
                  </p>
                  <h1 className="display-3 fw-bold text-shadow">
                    {data.hero.title}
                  </h1>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      {data.topBlocks && (
        <section className="py-6 bg-gray-100">
          <Container>
            <div className="text-center pb-lg-4">
              <p className="subtitle text-secondary">
                {data.topBlocks.subTitle}
              </p>
              <h2 className="mb-5">{data.topBlocks.title}</h2>
            </div>
            <Row>
              {data.topBlocks.blocks.map((block) => (
                <Col
                  key={block.title}
                  lg="4"
                  className="mb-3 mb-lg-0 text-center"
                >
                  <div className="px-0 px-lg-3">
                    <div className="icon-rounded bg-primary-light mb-3">
                      <Icon
                        icon={block.icon}
                        className="text-primary w-2rem h-2rem"
                      />
                    </div>
                    <h3 className="h5">{block.title}</h3>
                    <p className="text-muted">{block.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
      <Guides />
      <LastMinute greyBackground />
      {data.jumbotron && (
        <section className="py-7 position-relative dark-overlay">
          <Image
            src={`/content/${data.jumbotron.img}`}
            alt=""
            className="bg-image"
            layout="fill"
          />
          <Container>
            <div className="overlay-content text-white py-lg-5">
              <h3 className="display-3 fw-bold text-serif text-shadow mb-5">
                {data.jumbotron.title}
              </h3>
              <Link href={data.jumbotron.link} passHref>
                <Button variant="light">Get started</Button>
              </Link>
            </div>
          </Container>
        </section>
      )}
      {data.testimonials && (
        <section className="py-7">
          <Container>
            <div className="text-center">
              <p className="subtitle text-primary">
                {data.testimonials.subTitle}
              </p>
              <h2 className="mb-5">{data.testimonials.title}</h2>
            </div>
            <SwiperTestimonial data={data.testimonials.swiperItems} />
          </Container>
        </section>
      )}
        <section className="py-6 bg-gray-100">
          <Container>
            <Row className="mb-5">
              <Col md="8">
                <p className="subtitle text-secondary">
                  {data.blogPosts.subTitle}
                </p>
                <h2>{data.blogPosts.title}</h2>
              </Col>
            </Row>
            <Row>
              <Col className="mb-4">
                <TechniekCard/>
              </Col>
            </Row>
          </Container>
        </section>
    </React.Fragment>
  )
}

export default Index
