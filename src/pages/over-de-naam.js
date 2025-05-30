import React from "react"
import Image from "../components/CustomImage"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

import Link from "next/link"
import next from "next"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Over mij",
    },
  }
}

const Terms = (props) => {
  return (
    <React.Fragment>
      <section className="hero py-6 py-lg-7 text-white dark-overlay">
          <Image
            src={`/content/img/photo/obsidiaanBanner.jpg`}
            alt={"Over mij - Glasstudio Obsidiaan"}
            className="bg-image"
            loading="eager"
            layout="fill"
          />
        <Container className="overlay-content">
          <Breadcrumb
            listProps={{
              className: "text-white justify-content-center no-border mb-0",
            }}
          >
            <Link href="/" passHref>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>Over de naam</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="hero-heading">Over de naam</h1>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <div className="text-content">
                <h1>Obsidiaan, de oervorm van glas</h1>
                <p>
                Glas bestaat al zo lang als de aarde zelf. De oudste en meest natuurlijke vorm ervan
                is <strong>obsidiaan</strong>: een vulkanisch glas dat ontstaat wanneer lava bij een uitbarsting extreem snel
                afkoelt. Door deze snelle afkoeling krijgen kristallen geen kans zich te vormen, waardoor een
                hard, glasachtig gesteente ontstaat dat grotendeels uit silica (siliciumdioxide) bestaat.
                </p>
                <p>
                Behalve bij vulkaanuitbarstingen kan glas ook ontstaan door andere extreme hittebronnen,
                zoals blikseminslag of de inslag van meteorieten. In woestijnen kan zand onder zeer hoge
                temperaturen smelten en vervolgens afkoelen tot een glasachtige substantie. Al deze
                processen leveren vormen van natuurlijk glas op, waarvan <strong>obsidiaan</strong> de bekendste is.
                </p>
                <p>
                Vanaf de ontdekking van glas (ongeveer 5000 jaar vóór Christus) begon een fascinerende
                ontwikkeling: van het gebruik van natuurlijke obsidiaan tot de vervaardiging van kunstmatig
                glas voor sieraden, gereedschappen en later ook voor vensters en kunstvoorwerpen.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Terms
