import React, { FC, useEffect, useState } from "react";
import { Card } from "antd";
import styles from "./index.module.less";

const Demo: FC = () => {
  const [nameList, setNameList] = useState([]);
  useEffect(() => {
    fetch("/api/hello", { method: "POST" })
      .then((res) => res.json())
      .then((response: any) => {
        console.log(response);
        setNameList(response.data);
      });
  }, []);

  return (
    <div className={styles.Demo}>
      {nameList.map((item: any, index: any) => {
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

export default Demo;
