"use client"; 

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchBreeds, fetchImagesCount } from "../features/dogs/dogSlice";
import PieChartComponent from "../app/components/PieChart";

export default function Home() {
  const dispatch = useAppDispatch();
  const { breeds, imagesCount, loading, error } = useAppSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(fetchBreeds()).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchImagesCount(result.payload as string[]));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Dog Breeds Image Count</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {Object.keys(imagesCount).length > 0 && <PieChartComponent data={imagesCount} />}
    </div>
  );
}
