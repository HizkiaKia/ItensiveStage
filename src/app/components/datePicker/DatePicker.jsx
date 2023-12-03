"use client"
import { useState } from "react";


export default function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        closeOnScroll={true}
        onChange={(date) => setStartDate(date)}
        isClearable
        placeholderText="Tanggal Keberangkatan"
      />
    </>
  );
}
