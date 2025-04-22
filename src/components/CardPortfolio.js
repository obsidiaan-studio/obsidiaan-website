// CardPortfolio.js
import React from "react"
import Link from "next/link"
import { Card } from "react-bootstrap"
import Image from "./CustomImage"

const CardPortfolio = (props) => {
  const data = props.data
  return (
    <Card className="h-100 border-0 shadow">
      <div className="card-img-top overflow-hidden gradient-overlay">
        <Image
          src={`/content/img/photo/${data.image}`}
          width={1350}
          height={900}
          alt={data.name}
          layout="responsive"
          loading={props.eager ? "eager" : "lazy"}
          className="img-fluid"
          sizes={
            props.sizes
              ? props.sizes
              : "(max-width:576px) 100vw, (max-width:991px) 50vw, (max-width:1149px) 30vw, 280px"
          }
        />
      </div>
      <Card.Body className="d-flex align-items-center">
        <div className="w-100">
          <Card.Title as="h6">
            <Link href="/detail-portfolio">
              <a className="text-decoration-none text-dark">{data.name}</a>
            </Link>
          </Card.Title>
          <Card.Subtitle className="d-flex mb-3" as="div">
            <p className="flex-grow-1 mb-0 text-muted text-sm">
              {data.category}
            </p>
          </Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardPortfolio
