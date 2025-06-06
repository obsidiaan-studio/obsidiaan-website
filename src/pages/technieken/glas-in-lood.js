import React from "react"
import Link from "next/link"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

import TechniekCard from "../../components/TechniekCard"
import data from "../../data/glas-in-lood.json"
import Image from "../../components/CustomImage"
import data2 from "../../data/index.json" 


export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Glas in lood",
    },
  }
}

const GlasInLood = () => {
    return (
        <React.Fragment>
      <section className="hero py-6 py-lg-7 text-white dark-overlay">
        {data.hero && (
          <Image
            src={`/content/img/photo/${data.hero}`}
            alt=""
            className="bg-image"
            loading="eager"
            layout="fill"
            priority={true}
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

          <h1 className="hero-heading">{data.title && data.title}</h1>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <p
                className="lead mb-5"
                dangerouslySetInnerHTML={{ __html: data.excerpt }}
              />
            </Col>
          </Row>
          {data.img && (
            <Row>
              <Col xl="10" className="mx-auto mb-5">
                <Image
                  src={`/content/img/photo/${data.img}`}
                  alt=""
                  width={1501}
                  height={834}
                  className="img-fluid"
                  layout="responsive"
                  sizes="(max-width: 1199px) 100vw, 920px"
                />
              </Col>
            </Row>
          )}
          {data.content && (
            <Row>
              <Col xl="8" lg="10" className="mx-auto">
                <div
                  className="text-content"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </Col>
            </Row>
          )}
          {data.img && (
            <Row>
              <Col xl="10" className="mx-auto mb-5">
                <Image
                  src={`/content/img/photo/${data.img2}`}
                  alt=""
                  width={1501}
                  height={834}
                  className="img-fluid"
                  layout="responsive"
                  sizes="(max-width: 1199px) 100vw, 920px"
                />
              </Col>
            </Row>
          )}
          {data.content && (
            <Row>
              <Col xl="8" lg="10" className="mx-auto">
                <div
                  className="text-content"
                  dangerouslySetInnerHTML={{ __html: data.content2 }}
                />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <section className="py-6 bg-gray-100">
        <Container>
          <Row className="mb-5">
            <Col md="8">
              <p className="subtitle text-secondary">
                {data2.blogPosts.subTitle}
              </p>
              <h2>{data2.blogPosts.title}</h2>
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

export default GlasInLood;
