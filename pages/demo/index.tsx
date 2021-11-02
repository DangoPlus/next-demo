import React, { FC, useEffect, useState } from "react";
import { NextPage } from "next";
import { Card } from "antd";
import styles from "./index.module.less";

interface Props {
  nameList?: any;
}

const Demo: NextPage<Props> = (props) => {
  // const [nameList, setNameList] = useState([]);
  // useEffect(() => {
  //   fetch("/api/hello", { method: "POST" })
  //     .then((res) => res.json())
  //     .then((response: any) => {
  //       console.log(response);
  //       setNameList(response.data);
  //     });
  // }, []);

  return (
    <div className={styles.Demo}>
      {props.nameList.map((item: any, index: any) => {
        return (
          <Card
            key={index}
            title={item.name}
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Gender: {item.gender}</p>
            <p>Address: {item.address}</p>
          </Card>
        );
      })}
    </div>
  );
};

Demo.getInitialProps = async (ctx) => {
  if (ctx.req) {
    // ctx.req exists server-side only
    // call docker-host:port
    const res = await fetch("http://lunatek.xyz:3000/api/hello", { method: "POST" });
    const json = await res.json();
    return { nameList: json.data };
  } else {
    // call localhost:port
    const res = await fetch("/api/hello", { method: "POST" });
    const json = await res.json();
    return { nameList: json.data };
  }
};

export default Demo;
