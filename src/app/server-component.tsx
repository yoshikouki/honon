import { url } from "@/lib/url";

export const ServerComponent = async () => {
  const reqUrl = `http://localhost:8888${url.time}`;
  const res = await fetch(reqUrl, { cache: "no-store" });
  const { message } = await res.json();

  return (
    <>
      <div className="text-2xl tabular-nums">S: {message}</div>
    </>
  );
};
