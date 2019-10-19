import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services";
// import { Container } from './styles';

export default function List() {
  const [limit, setLimit] = useState(20);
  const [value, setValue] = useState([]);

  useEffect(() => {
    loadInit();
  }, []);

  async function loadInit() {
    let val = [];
    const response = await api.get(`/pokemon?limit=50&offset=${limit}`);
    const dataAll = response.data;
    val = dataAll.results.map(async item => {
      let resp = await api.get(`/pokemon/${item.name}`);
      return resp.data;
    });
    const responsedata = await Promise.all(val);
    setValue(responsedata);
    console.log(responsedata);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexFlow: "row wrap"
      }}
    >
      {value.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
