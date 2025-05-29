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
            <Breadcrumb.Item active>Over mij</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="hero-heading">Over mij</h1>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <div className="text-content">
                <h3 className="text-secondary">"Stijlvolle glaskunst geïnspireerd op eeuwenoud vakmanschap."</h3>
                <h3>Welkom bij glasstudio Obsidiaan</h3>
                <p>
                Welkom bij glasstudio Obsidiaan, waar vakmanschap en creativiteit samenkomen.
                </p>
                <p>
                Ontdek de fascinerende wereld van glas, waarin elk werkstuk een uniek verhaal
                vertelt en creativiteit geen grenzen kent.
                </p>
                <p>
                Bij Obsidiaan ligt onze passie in het creëren van glas-in-loodkunst, het restaureren
                van glas-in-loodobjecten en het werken met de Tiffany-techniek. Van ontwerp tot
                realisatie: elk project is erop gericht om een uniek kunstwerk tot leven te brengen.
                </p>
                <h3>Mijn verhaal</h3>
                <p>
                Sinds 2014 ben ik gefascineerd geraakt door de kunst van het werken met glas.
                </p>
                <p>
                Wat begon als een creatieve droom, groeide uit tot een inspirerende en uitdagende
                reis in dit prachtige ambacht.
                </p>
                <p>
                Mijn enthousiasme groeide naarmate ik ontdekte hoeveel mogelijkheden en
                technieken het werken met dit veelzijdige materiaal biedt.
                </p>
                <p>
                In de loop der jaren heb ik mijn vaardigheden verfijnd door het volgen van talloze
                workshops, cursussen en opleiding op het gebied van glas-in-lood, restauratie en
                Tiffany techniek.
                </p>
                <p>
                Dankzij herhaling, oefening en toewijding heb ik mijn ambachtelijke expertise naar
                een hoger niveau gebracht.
                </p>
                <p>
                Elk werkstuk dat ik maak is met liefde en aandacht ontworpen en vervaardigd.
                </p>
                <p>
                Geen enkel stuk is hetzelfde; elk kunstwerk is uniek en zal nooit exact worden
                gereproduceerd.
                </p>
                <p>
                Bovendien vind ik het belangrijk om dit waardevolle ambacht te behouden voor
                toekomstige generaties. Door mijn passie te delen en kennis over te dragen, draag ik
                bij aan het voortbestaan van dit bijzondere vakmanschap.
                </p>
                <h3>Obsidiaan, de oervorm van glas</h3>
                <p>
                Glas bestaat al zo lang als de aarde zelf. De oudste en meest natuurlijke vorm ervan is
                <strong>obsidiaan</strong>: een vulkanisch glas dat ontstaat wanneer lava bij een uitbarsting extreem snel
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
