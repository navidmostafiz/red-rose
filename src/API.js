import axios from "axios";
import { log } from "./utils";

export async function getNameTraitByTermAsync(term) {
  try {
    const response = await axios.get("dummy_names.json");
    // log("response  ", response);
    const nameTraitList = response.data;
    const newList = nameTraitList.filter((a) => a.name.includes(term));

    return newList;
  } catch (error) {
    return [];
  }
}

export const getDataByString = (term) => {
  log("getDataByString: term=", term);
  const allNameTraits = getData();
  log("allNameTraits", allNameTraits);
  allNameTraits && allNameTraits.forEach((nameTrait) => log(nameTrait.name));
};

export const getData = () => {
  let nameTraits = [];
  axios
    .get("dummy_names.json")
    .then(function (response) {
      const data = response.data;
      //   log("data=", data);
      nameTraits = data;
      return nameTraits;
    })
    .catch(function (error) {
      // handle error
      log(error);
    })
    .finally(function () {
      // always executed
    });
};
