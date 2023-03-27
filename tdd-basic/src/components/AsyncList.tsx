import React, { useEffect, useState } from "react";

const foodList: string[] = ["Apple", "Pizza", "Hamburger"];

const fakeApiCall = () =>
  new Promise((resolve: any) => setTimeout(resolve(foodList), 200));

export const AsyncList = () => {
  const [foodData, setFoodData] = useState<string[]>([]);

  useEffect(() => {
    fakeApiCall().then((data: any) => setFoodData(data));
  }, []);

  return (
    <>
      {foodData.map((name: string) => (
        <p key={name}>{name}</p>
      ))}
    </>
  );
};
