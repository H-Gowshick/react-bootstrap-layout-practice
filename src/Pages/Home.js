import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import banner from "../Images/banner-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import "../App.css";
import f1 from "../Images/featured-01.png";
import f2 from "../Images/featured-02.png";
import f3 from "../Images/featured-03.png";
import f4 from "../Images/featured-04.png";
import t1 from "../Images/trending-01.jpg";
import t2 from "../Images/trending-02.jpg";
import t3 from "../Images/trending-03.jpg";
import t4 from "../Images/trending-04.jpg";
import m1 from "../Images/top-game-01.jpg";
import m2 from "../Images/top-game-02.jpg";
import m3 from "../Images/top-game-03.jpg";
import m4 from "../Images/top-game-04.jpg";
import m5 from "../Images/top-game-05.jpg";
import m6 from "../Images/top-game-06.jpg";
function Home() {
  return (
    
      <Container className="">
        <Row className="d-flex justify-content-evenly">
          <Col xs md={6}>
            <div className="home-title-box ">
              <h5 className="text-start ">WELCOME TO UF GAMING</h5>
              <h1 className="text-start mt-2 fw-bold">BEST GAMING SITE EVER</h1>
              <p className="text-start mt-5">
                This code will create a layout where the two columns are evenly
                spaced on all screen sizes, with each column occupying half of
                the available space on extra small and medium screens.
              </p>
              <Form className="mt-5">
                <InputGroup className="mb-3 search-group">
                  <Form.Control
                    type="text"
                    placeholder="Enter your search query"
                    className="search-input"
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className="search-button"
                  >
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </Col>
          <Col md={6} className="home-banner">
            <Image src={banner} className="home-banner-img rounded-5" />
          </Col>
        </Row>
        {/* featured */}
        <Row className="d-flex justify-content-evenly my-5 ">
          <Col md={3}>
            <div className="bg-primary p-4 featured shadow ">
              <Image src={f1} className="featured-img" />
              <p className="pt-4 fw-bold text-center">Free storage</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="bg-primary p-4 featured shadow ">
              <Image src={f2} className="featured-img" />
              <p className="pt-4 fw-bold text-center">User More</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="bg-primary p-4 featured shadow ">
              <Image src={f3} className="featured-img" />
              <p className="pt-4 fw-bold text-center">Reply Ready</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="bg-primary p-4 featured shadow ">
              <Image src={f4} className="featured-img  " />
              <p className="pt-4 fw-bold text-center ">Easy Layout</p>
            </div>
          </Col>
        </Row>
        {/* trending games */}
        <div className="my-5">
          <p className="fs-6 text-danger text-uppercase fw-bold mb-0 ">
            Trending{" "}
          </p>
          <p className="fs-2 fw-bold">Trending Games</p>
          <Row>
            <Col md={3} className="trend-box-container">
              <div className="trend-box rounded-5 shadow">
                <Image src={t1} className="rounded-5 w-100 " />

                <Row className="px-4 py-3">
                  <Col className="trend-game-describtion">
                    <p className="pt-1">Action</p>
                    <p className="fw-bold">Assasin Creed</p>
                  </Col>
                  <Col className="d-flex justify-content-end trending-bag">
                    <FontAwesomeIcon
                      className="trending-bag-icon mt-3"
                      icon={faShoppingBag}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="trend-box rounded-5 shadow">
                <Image src={t2} className="rounded-5 w-100 " />

                <Row className="px-4 py-3">
                  <Col className="trend-game-describtion">
                    <p className="">Action</p>
                    <p className="fw-bold">Assasin Creed</p>
                  </Col>
                  <Col className="d-flex justify-content-end trending-bag">
                    <FontAwesomeIcon
                      className="trending-bag-icon mt-3"
                      icon={faShoppingBag}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="trend-box rounded-5 shadow">
                <Image src={t3} className="rounded-5 w-100 " />

                <Row className="px-4 py-3">
                  <Col className="trend-game-describtion">
                    <p className="pt-1">Action</p>
                    <p className="fw-bold">Assasin Creed</p>
                  </Col>
                  <Col className="d-flex justify-content-end trending-bag">
                    <FontAwesomeIcon
                      className="trending-bag-icon mt-3"
                      icon={faShoppingBag}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="trend-box rounded-5 shadow">
                <Image src={t4} className="rounded-5 w-100 " />

                <Row className="px-4 py-3">
                  <Col className=" trend-game-describtion">
                    <p className="pt-1">Action</p>
                    <p className="fw-bold">Assasin Creed</p>
                  </Col>
                  <Col className="d-flex justify-content-end trending-bag">
                    <FontAwesomeIcon
                      className="trending-bag-icon mt-3"
                      icon={faShoppingBag}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        {/* Top Games */}
        <div className="my-5 ">
          <p className="fs-6 text-danger text-uppercase mb-0 fw-bold">
            Top Games{" "}
          </p>
          <p className="fs-2 fw-bold">Most Played</p>
          <Row className="d-flex justify-content-evenly  mt-3">
            <Col md={2} className="">
              <div className="top-game-box rounded-5 bg-light shadow">
                <Image src={m1} className="w-100 rounded-5" />
                <div className="py-3">
                  <div className="top-games-discribtion">
                    <p className="text-center mb-0 pt-2">Adventure</p>
                    <p className="text-center fw-bold">Assasin Creed</p>
                  </div>
                  <div className="text-center pb-2">
                    <Button
                      className="rounded-5 px-3 border-0 text-uppercase fw-bold"
                      style={{ backgroundColor: "rgb(225, 78, 52)" }}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="top-game-box rounded-5 bg-light shadow ">
                <Image src={m2} className="w-100 rounded-5" />
                <div className="py-3">
                  <div className="top-games-discribtion">
                    <p className="text-center mb-0 pt-2">Adventure</p>
                    <p className="text-center fw-bold">Assasin Creed</p>
                  </div>
                  <div className="text-center pb-2 ">
                    <Button
                      className="rounded-5 px-3 border-0 text-uppercase fw-bold"
                      style={{ backgroundColor: "rgb(225, 78, 52)" }}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="top-game-box rounded-5 bg-light shadow ">
                <Image src={m3} className="w-100 rounded-5" />
                <div className="py-3">
                  <div className="top-games-discribtion">
                    <p className="text-center mb-0 pt-2">Adventure</p>
                    <p className="text-center fw-bold">Assasin Creed</p>
                  </div>
                  <div className="text-center pb-2 ">
                    <Button
                      className="rounded-5 px-3 border-0 text-uppercase fw-bold"
                      style={{ backgroundColor: "rgb(225, 78, 52)" }}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="top-game-box rounded-5 bg-light shadow ">
                <Image src={m4} className="w-100 rounded-5" />
                <div className="py-3">
                  <div className="top-games-discribtion">
                    <p className="text-center mb-0 pt-2">Adventure</p>
                    <p className="text-center fw-bold">Assasin Creed</p>
                  </div>
                  <div className="text-center pb-2 ">
                    <Button
                      className="rounded-5 px-3 border-0 text-uppercase fw-bold"
                      style={{ backgroundColor: "rgb(225, 78, 52)" }}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="top-game-box rounded-5 bg-light shadow ">
                <Image src={m5} className="w-100 rounded-5" />
                <div className="py-3">
                  <div className="top-games-discribtion">
                    <p className="text-center mb-0 pt-2">Adventure</p>
                    <p className="text-center fw-bold">Assasin Creed</p>
                  </div>
                  <div className="text-center pb-2 ">
                    <Button
                      className="rounded-5 px-3 border-0 text-uppercase fw-bold"
                      style={{ backgroundColor: "rgb(225, 78, 52)" }}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="top-game-box rounded-5 bg-light shadow ">
                <Image src={m6} className="w-100 rounded-5" />
                <div className="py-3">
                  <div className="top-games-discribtion">
                    <p className="text-center mb-0 pt-2">Adventure</p>
                    <p className="text-center fw-bold">Assasin Creed</p>
                  </div>
                  <div className="text-center pb-2 ">
                    <Button
                      className="rounded-5 px-3 border-0 text-uppercase fw-bold"
                      style={{ backgroundColor: "rgb(225, 78, 52)" }}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    
  
  );
}

export default Home;
