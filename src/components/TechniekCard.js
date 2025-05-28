import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import data from '../data/techniekcard.json';

const TechniekCards = () => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <Card className="border-0 h-100 shadow hover-animate">
            <div 
              className="img-fluid card-img-top" 
              style={{ 
                height: "200px", 
                backgroundColor: "#e0e0e0", 
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Optionally, you can add a placeholder image here */}
            </div>
            <Card.Body>
              <h5 className="my-2">
                <Link href={item.link} passHref>
                  <a className="text-dark">{item.title}</a>
                </Link>
              </h5>
              <p className="my-2 text-muted text-sm">{item.content}</p>
              <Link href={item.link} passHref>
                <Button className="ps-0" variant="link">
                  Lees meer <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default TechniekCards;
