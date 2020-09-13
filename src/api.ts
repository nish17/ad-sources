import axios from "axios";
import { DataSourceDto } from './types';

const URL = process.env.REACT_APP_URL || '';
const TOKEN = process.env.REACT_APP_TOKEN || '';
const config = {
  headers: { Authorization: `Bearer ${TOKEN}` }
};

export default async function getData() {
  let response: { data: DataSourceDto[] };
  let APIData: DataSourceDto[] = [];

  try {
    response = await axios.get(URL, config);
    APIData = response.data;
  } catch (e) {
    console.log("something went wrong");
  }

  return APIData;

}
