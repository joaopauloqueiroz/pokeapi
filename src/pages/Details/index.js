import React, { useState, useEffect } from "react";
import api from "../../services";

export default function Details({ location }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await api.get(`/ability/${location.state.id}`);
    setDescription(response.data.effect_entries[0].effect);
  }

  return <div>{description}</div>;
}
