import { wards } from "./wards";

export const farmers = wards.flatMap((ward, index) => [

  {
    id: index * 2 + 1,

    farmerId: `FMR-${String(index * 2 + 1).padStart(3, "0")}`,

    nationalId: `${32547891 + index}`,

    firstName: "John",
    lastName: "Kamau",

    gender: "Male",

    phone: `+254712${String(index).padStart(6, "0")}`,

    email: `john${index}@example.com`,


    county: ward.county,

    subCounty: ward.subCounty,

    ward: ward.name,

    village: `${ward.name} Village`,


    farmId: `FARM-${String(index * 2 + 1).padStart(3,"0")}`,

    status: "Active",
  },


  {
    id: index * 2 + 2,

    farmerId: `FMR-${String(index * 2 + 2).padStart(3, "0")}`,

    nationalId: `${29874563 + index}`,

    firstName: "Mary",
    lastName: "Wanjiku",

    gender: "Female",

    phone: `+254723${String(index).padStart(6, "0")}`,

    email: `mary${index}@example.com`,


    county: ward.county,

    subCounty: ward.subCounty,

    ward: ward.name,

    village: `${ward.name} Area`,


    farmId: `FARM-${String(index * 2 + 2).padStart(3,"0")}`,

    status: "Active",
  }

]);