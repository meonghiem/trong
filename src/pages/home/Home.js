import * as React from "react";
import CardContainer from "../../components/card/CardContainer";
// import Header from "../../components/common/header";
// import { Modal, Box, Typography } from "@mui/material";
import styles from "./Home.module.css";
export default function Home() {
  //Memo
  const cards = React.useMemo(() => {
    return [
      {
        id: 1,
        imgUrl:
          "https://soict.daotao.ai/asset-v1:SoICT+IT4272+2022-1+type@asset+block@Capture.JPG",
        name: "Hệ thống máy tính - Thi cuối kỳ 2022-1",
        maHp: "IT4272",
        endDate: "01/03/2023",
      },
      {
        id: 2,
        imgUrl:
          "https://soict.daotao.ai/asset-v1:SoICT+IT4272+2022-1+type@asset+block@Capture.JPG",
        name: "abc",
        maHp: "IT4272",
        endDate: "01/03/2023",
      },
      {
        id: 3,
        imgUrl:
          "https://soict.daotao.ai/asset-v1:SoICT+IT4272+2022-1+type@asset+block@Capture.JPG",
        name: "Hệ thống máy tính - Thi cuối kỳ 2022-1",
        maHp: "IT4272",
        endDate: "01/03/2023",
      },
      {
        id: 4,
        imgUrl:
          "https://soict.daotao.ai/asset-v1:SoICT+IT4272+2022-1+type@asset+block@Capture.JPG",
        name: "Hệ thống máy tính - Thi cuối kỳ 2022-1",
        maHp: "IT4272",
        endDate: "01/03/2023",
      },
      {
        id: 5,
        imgUrl:
          "https://soict.daotao.ai/asset-v1:SoICT+IT4272+2022-1+type@asset+block@Capture.JPG",
        name: "Hệ thống máy tính - Thi cuối kỳ 2022-1",
        maHp: "IT4272",
        endDate: "01/03/2023",
      },
      {
        id: 6,
        imgUrl:
          "https://soict.daotao.ai/asset-v1:SoICT+IT4272+2022-1+type@asset+block@Capture.JPG",
        name: "Hệ thống máy tính - Thi cuối kỳ 2022-1",
        maHp: "IT4272",
        endDate: "01/03/2023",
      },
    ];
  }, []);

  //STATE
  const [searchText, setSearchText] = React.useState("");
  const [cardList, setCardList] = React.useState([]);

  //EFFECT
  React.useLayoutEffect(() => {
    setCardList(cards);
  }, [cards]);

  //EVENT
  const handleSearch = (text) => {
    setCardList(cards.filter((e) => e.name.includes(text)));
  };

  return (
    // <div>
    //   <Header />
    // </div>
    <div className={`${styles.homeContainer}`}>
      <div className="header font-weight-bold font h1">My Cources</div>
      <div className={`${styles.content}`}>
        <div className="row">
          <div className="col-7">
            {cardList.map((card, i) => {
              return (
                <div className="mt-3">
                  <CardContainer
                    imgUrl={card.imgUrl}
                    name={card.name}
                    maHp={card.maHp}
                    endDate={card.endDate}
                    key={card.name + i}
                  />
                </div>
              );
            })}
          </div>
          <div className="col-5">
            <div className="h3 mt-2">Search Your Cources</div>
            <div className="form-inline">
              <input
                className="form-control mr-sm-2 w-75 mr-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={() => handleSearch(searchText)}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
