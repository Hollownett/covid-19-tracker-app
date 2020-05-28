import axios from "axios";
import { DialogContent } from "@material-ui/core";
import { CountryPicker } from "../components";
import { common } from "@material-ui/core/colors";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changableUrl = url;

  if (country) {
    changableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changableUrl);

    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log(console.error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      data: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(console.error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
