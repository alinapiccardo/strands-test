"use client"; 

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchBreeds, fetchImagesCount } from "../store/actions";
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
    <div className="flex flex-col h-screen text-center">
    <h1 className="text-2xl font-bold py-10">Top 10 Dog Breeds With Most Images</h1>
    {loading && <p className="text-gray-500">Loading...</p>}
    {error && <p className="text-red-500">Error: {error}</p>}
    {Object.keys(imagesCount).length > 0 && <PieChartComponent data={imagesCount} />}
  </div>
  
  );
}
