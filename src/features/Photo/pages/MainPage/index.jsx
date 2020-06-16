import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./styles.scss";

export default function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={Images.BLUE_BG} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo </Link>
      </Container>
    </div>
  );
}
