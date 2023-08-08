import { faAddressCard, faCity, faCoffee, faEnvelope, faFileZipper, faHotel, faMapLocationDot, faStreetView, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ApiCard = ({ user }) => {
  return (
    <div>
      <Card
        style={{
          width: "23rem",
          textAlign: "left",
          borderRadius: 30,
          marginTop: 20,
        }}
      >
        <Card.Body>
          <Card.Title>
            <h3
              style={{
                backgroundColor: "rgb(177, 248, 224)",
                textAlign: "center",
                padding: 10,
              }}
            >
              {user.name}
            </h3>
          </Card.Title>
          <Card.Title style={{ display: "flex", gap: 50 }}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "rgb(8, 182, 182)" }}
            />
            {user.username}
          </Card.Title>
          <Card.Title style={{ display: "flex", gap: 50 }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "rgb(8, 182, 182)" }}
            />{" "}
            {user.email}
          </Card.Title>{" "}
          <FontAwesomeIcon
            icon={faAddressCard}
            style={{ width: 280, height: 50, color: "rgb(8, 182, 182)" }}
          />
          <Card.Title style={{ display: "flex", gap: 50 }}>
            <FontAwesomeIcon
              icon={faStreetView}
              style={{ color: "rgb(8, 182, 182)" }}
            />
            {user.address.street}
          </Card.Title>
          <Card.Title style={{ display: "flex", gap: 50 }}>
            <FontAwesomeIcon
              icon={faHotel}
              style={{ color: "rgb(8, 182, 182)" }}
            />
            {user.address.suite}
          </Card.Title>
          <Card.Title style={{ display: "flex", gap: 50 }}>
            <FontAwesomeIcon
              icon={faCity}
              style={{ color: "rgb(8, 182, 182)" }}
            />
            {user.address.city}
          </Card.Title>
          <Card.Title style={{ display: "flex", gap: 50 }}>
            <FontAwesomeIcon
              icon={faFileZipper}
              style={{ color: "rgb(8, 182, 182)" }}
            />
            {user.address.zipcode}
          </Card.Title>{" "}
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <FontAwesomeIcon
              icon={faMapLocationDot}
              style={{ color: "rgb(8, 182, 182)", width : 200, height : 70, paddingLeft :54 }}
            />
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "rgb(8, 182, 182)" }}>
            adresse_geo_lat : {user.address.geo.lat}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "rgb(8, 182, 182)" }}>
            adresse_geo_lng : {user.address.geo.lng}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </div>

    // <div>

    //   <td style={{ border: "2px solid black", width: 160 }}>{user.name}</td>
    //   <td style={{ border: "2px solid black", width: 150 }}>
    //     {user.username}
    //   </td>
    //   <td style={{ border: "2px solid black", width: 215 }}>{user.email}</td>
    //   <td style={{ border: "2px solid black", width: 430 }}>
    //     <td style={{ border: "2px solid black", width: 150 }}>
    //       {user.address.street}{" "}
    //     </td>

    //     <td style={{ border: "2px solid black", width: 100 }}>
    //       {user.address.suite}{" "}
    //     </td>
    //     <td style={{ border: "2px solid black", width: 140 }}>
    //       {user.address.city}
    //     </td>
    //     <td style={{ border: "2px solid black", width: 130 }}>
    //       {user.address.zipcode}
    //     </td>
    //   </td>

    //   <td style={{ border: "2px solid black", width: 80 }}>
    //     <td style={{ border: "2px solid black", width: 90 }}>
    //       {user.address.geo.lat}
    //     </td>
    //     <td style={{ border: "2px solid black", width: 90 }}>
    //       {user.address.geo.lng}
    //     </td>
    //   </td>
    // </div>
  );
};

export default ApiCard;
