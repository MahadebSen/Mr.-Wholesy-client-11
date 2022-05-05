import React, { useEffect, useState } from "react";

import EachPartner from "./EachPartner";

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("FakeDB/FakePartner.json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  return (
    <div className="mt-24 mb-32 mx-10">
      <p className="text-center text-4xl mb-16">Our Partners</p>
      <div className="flex">
        {partners.map((item) => (
          <EachPartner key={item.id} item={item}></EachPartner>
        ))}
      </div>
    </div>
  );
};

export default Partners;
