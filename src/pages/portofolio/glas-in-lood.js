import React from "react"
import Link from "next/link"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

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
            <Container>
                <Row>
                    <Col>
                        <h1>Glas in lood</h1>
                        <p>This is the Glas in Lood page.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default GlasInLood;
