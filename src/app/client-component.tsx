"use client";

import { useEffect, useState } from "react";

export const ClientComponent = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setTime(data.message));
  }, []);

  return (
    <div className="text-2xl tabular-nums">C: {time ? time : "undefined"}</div>
  );
};
