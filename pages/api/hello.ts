// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import faker from "faker";
faker.setLocale("zh_CN");
type Data = {
  code: number;
  data: any;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const list = () => {
    let list: any[] = [];
    for (let index = 0; index < 100; index++) {
      list.push({
        name: faker.name.lastName() + faker.name.lastName(),
        gender: faker.name.gender(),
        address: faker.address.streetAddress(),
      });
    }
    return list;
  };
  if (req.method === "POST") {
    // Process a POST request
    res.status(200).json({
      code: 200,
      data: list(),
      message: "success",
    });
  } else {
    // Handle any other HTTP method
    res.status(200).json({
      code: 100,
      data: "xixi",
      message: "get",
    });
  }
}
