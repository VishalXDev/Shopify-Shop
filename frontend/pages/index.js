"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Disable SSR for ProductList
const ProductList = dynamic(() => import("../components/ProductList"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Welcome to Shop Sense</h1>
      <ProductList />
    </div>
  );
}
