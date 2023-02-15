import { logDOM } from "@testing-library/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Classes from "./stlye.module.css";
import Child from "./Child";

const Hooks = () => {
  const HooksTypes = [
    "useState",
    "useEffect",
    "useCallback",
    "useContext",
    "useImperativeHandle",
    "useLayoutEffect",
    "useMemo",
    "useReducer",
    "useRef",

    //   want to read
    "useTransition",
    "useDebugValue",
    "useDeferredValue",
    "useId",
    "useInsertionEffect",
    "useSyncExternalStore",
  ];

  const [details, setDetails] = useState([
    {
      id: 661,
      value: "Abidjan",
      country: "Cote D'Ivoire (Ivory Coast)",
      gst_code: null,
      region_id: null,
      country_code: "CI",
    },
    {
      id: 2227,
      value: "Abra",
      country: "Philippines",
      gst_code: null,
      region_id: null,
      country_code: "PH",
    },
    {
      id: 1231,
      value: "Abruzzo",
      country: "Italy",
      gst_code: null,
      region_id: null,
      country_code: "IT",
    },
    {
      id: 212,
      value: "Absheron District",
      country: "Azerbaijan",
      gst_code: null,
      region_id: null,
      country_code: "AZ",
    },
    {
      id: 3216,
      value: "Abu Dhabi Emirate",
      country: "United Arab Emirates",
      gst_code: null,
      region_id: null,
      country_code: "AE",
    },
    {
      id: 2054,
      value: "Abuja Federal Capital Territory",
      country: "Nigeria",
      gst_code: null,
      region_id: null,
      country_code: "NG",
    },
    {
      id: 3406,
      value: "Abyan Governorate",
      country: "Yemen",
      gst_code: null,
      region_id: null,
      country_code: "YE",
    },
    {
      id: 1137,
      value: "Aceh",
      country: "Indonesia",
      gst_code: null,
      region_id: null,
      country_code: "ID",
    },
    {
      id: 2270,
      value: "Açores",
      country: "Portugal",
      gst_code: null,
      region_id: null,
      country_code: "PT",
    },
    {
      id: 2464,
      value: "Acquaviva",
      country: "San Marino",
      gst_code: null,
      region_id: null,
      country_code: "SM",
    },
    {
      id: 366,
      value: "Acre",
      country: "Brazil",
      gst_code: null,
      region_id: null,
      country_code: "BR",
    },
    {
      id: 2055,
      value: "Adamawa",
      country: "  ",
      gst_code: null,
      region_id: null,
      country_code: "NG",
    },
  ]);

  console.log(details);

  const handleState = (e) => {
    console.log(e.target.value);

    details.filter((data) => data.country.includes(e.target.value));
  };

  return (
    <>
      <div>
        <div style={{ marginTop: "1%" }}>
          <div>
            <label>Name</label>
            <input onChange={handleState} />
          </div>

          {/* <Child setColor={setColor} /> */}
        </div>
      </div>
    </>
  );
};

export default Hooks;
