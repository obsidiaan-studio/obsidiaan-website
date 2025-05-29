import React from "react";
import Link from "next/link";

import { Card } from "react-bootstrap";

import Image from "./CustomImage";

const CardShop = (props) => {
  const data = props.data;

  // Generate slug from the product name
  const slug = encodeURIComponent(data.name);

  return (
    <Card className="border-0 shadow">
      <div className="card-img-top overflow-hidden gradient-overlay">
        <Image
        src={`/content/img/photo/${data.image}`}
        width={1350}
        height={900}
        alt={data.name}
        layout="responsive"
        loading={props.eager ? "eager" : "lazy"}
        className="img-fluid"
        style={{ objectFit: "cover", height: "220px", width: "100%" }}
        sizes={
            props.sizes
            ? props.sizes
            : "(max-width:576px) 100vw, (max-width:991px) 50vw, (max-width:1149px) 30vw, 280px"
        }
        />
        <Link href={`/shop/${slug}`}>
          <a
            className="tile-link"
            aria-label={`Read more about ${data.name}`}
          />
        </Link>
      </div>
      <Card.Body className="d-flex align-items-center">
        <div className="w-100">
          <Card.Title as="h6">
            <Link href={`/shop/${slug}`}>
              <a className="text-decoration-none text-dark">{data.category}</a>
            </Link>
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardShop;