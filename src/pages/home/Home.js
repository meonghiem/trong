import * as React from "react";
import CardContainer from "../../components/card/CardContainer";
import styles from "./Home.module.css";
import Header from "../../components/common/header/Header";

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

  //EVENT SEARCH
  const handleSearch = (text) => {
    setCardList(cards.filter((e) => e.name.includes(text)));
  };

  return (
    <>
      <div>
        <Header page="Home" />
      </div>
      <div className={`${styles.homeContainer}`} style={{ paddingTop: '30px' }}>
        <div className={`${styles.content}`}>
          <div className="row">
            <div className="col-7">
              <div className="header font-weight-bold font h2" style={{ color: "white" }}>List of participated exams</div>
              {/* Hiển thị danh sách các bài thi */}
              {cardList.map((card, id) => {
                return (
                  <div className="mt-3" key={id}>
                    <CardContainer
                      imgUrl={card.imgUrl}
                      name={card.name}
                      maHp={card.maHp}
                      endDate={card.endDate}
                      key={card.name + id}
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-5">
              <div className="header font-weight-bold font h2" style={{ color: "white" }}>Search for exams</div>
              <div className="form-inline" style={{ paddingTop: '10px' }}>
                <input
                  className="form-control mr-sm-2 w-75 mr-4"
                  type="search"
                  placeholder="Enter information of the course to search"
                  aria-label="Search"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  id={`${styles.myInput}`}
                  title="Enter information of the course to search"
                />
                <button
                  className="btn btn-outline-primary my-2 my-sm-0"
                  onClick={() => handleSearch(searchText)}
                  id={`${styles.buttonSearch}`}
                  title="Click to search"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
