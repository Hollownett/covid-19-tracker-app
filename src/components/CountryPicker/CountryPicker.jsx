import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedfetchCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedfetchCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedfetchCountries]);

  console.log(fetchedCountries);
  return (
    <FormControl classNam={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
