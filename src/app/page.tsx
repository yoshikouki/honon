import { ClientComponent } from "./client-component";

export default async function HomePage() {
  const response = await fetch("http://localhost:8888/api/time");
  console.log("response.body:", response.body);
  const { message } = await response.json();
  console.log(message);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1 className="font-black text-6xl">HonoN</h1>
      <div className="text-2xl tabular-nums">S: {message}</div>
      <ClientComponent />
    </main>
  );
}
