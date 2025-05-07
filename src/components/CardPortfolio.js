// CardPortfolio.js
import React from "react"
import Link from "next/link"
import { Card } from "react-bootstrap"
import Image from "./CustomImage"

const CardPortfolio = (props) => {
  const data = props.data
  return (
    <Card className="h-100 border-0 shadow">
      <div className="card-img overflow-hidden gradient-overlay">
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
    </Card>
  )
}

export default CardPortfolio
