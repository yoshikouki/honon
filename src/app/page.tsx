import { client } from "@/server/client";
import { ClientComponent } from "./client-component";
import { ServerComponent } from "./server-component";

export default async function HomePage() {
  const res = await client.time.$get();
  const { message } = await res.json();

  return (
    <main className="flex flex-col items-center justify-center gap-10 py-40">
      <ServerComponent message={message} />
      <ClientComponent />
    </main>
  );
}
