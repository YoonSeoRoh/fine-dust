import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGlobe,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const TabContainer = styled.section`
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  padding: 0 20px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const TabList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    color: #333;
    font-size: 14px;
    font-weight: 540;
  }
  div {
    text-align: center;
    font-size: 20px;
    padding-bottom: 4px;
  }
`;

export default function Tab() {
  return (
    <TabContainer>
      <TabList>
        <Link to="/myregion">
          <li>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            내 지역보기
          </li>
        </Link>
        <Link to="/entireregions">
          <li>
            <div>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            전체 시도보기
          </li>
        </Link>
        <Link to="/bookmark">
          <li>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            즐겨찾기
          </li>
        </Link>
      </TabList>
    </TabContainer>
  );
}
