import axios from "axios";
import {SourceData} from './source-data-model';

const URL = "https://api.airboxr.com/data/dataSources";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVXVpZCI6IjUxMzc3OGZmLWQxYWYtNDNjNC1iYzRkLTkzYjRjMmI5YTYwYiIsImlhdCI6MTU5OTgwNjk1MSwiZXhwIjoxNTk5ODEwNTUxfQ.w1d3E-EVywpvttPqYUCAYUIGXduR2CG1mnxPYK-GAZ0";
const config = {
  headers: { Authorization: `Bearer ${TOKEN}` }
};

export default async function getData() {
  let response: {data: SourceData[]};
  let APIData: SourceData[] = [];

  try {
    response = await axios.get(URL, config);
    APIData = response.data;
  } catch (e) {
    console.log("something went wrong");
  }

  return APIData;

}
