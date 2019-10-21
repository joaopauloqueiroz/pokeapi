import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services";
import InfiniteScroll from "react-infinite-scroll-component";
import image from "../../assets/loader.gif";

export default function List() {
  const [limit, setLimit] = useState(20);
  const [value, setValue] = useState([]);

  useEffect(() => {
    loadInit();
  }, []);

  async function loadInit(limitData = 20) {
    let val = [];
    const response = await api.get(`/pokemon?limit=50&offset=${limitData}`);
    const dataAll = response.data;
    setLimit(limitData + 20);
    val = dataAll.results.map(async item => {
      let resp = await api.get(`/pokemon/${item.name}`);
      return resp.data;
    });
    const responsedata = await Promise.all(val);
    setValue([...value, ...responsedata]);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexFlow: "row wrap"
      }}
    >
      <InfiniteScroll
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexFlow: "row wrap"
        }}
        dataLength={value.length}
        next={() => loadInit(limit)}
        hasMore={true}
        loader={
          <div
            style={{
              width: "100%",
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "1.333em",
              color: "#d9d9d9d9",
              alignItems: "center"
            }}
          >
            <img src={image} alt={"..."} style={{ width: "250px" }} />
          </div>
        }
      >
        {value.map(item => (
          <Card key={String(item.name)} data={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
