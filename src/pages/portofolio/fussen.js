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
      title: "Fussen",
    },
  }
}

const Fussen = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <h1>Fussen</h1>
                        <p>This is the Fussen page.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Fussen;
