import React, { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    get();
  });
  const get = async () => {
    const response = await fetch(
      `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_KEY}&&returnType=json&numOfRows=5&pageNo=1&sidoName=서울&ver=1.0`
    );
    const data = response.json();
    console.log(data);
  };
  return <div></div>;
}
