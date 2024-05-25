import { client } from "@/server/client";
import { ClientComponent } from "./client-component";
import { ServerComponent } from "./server-component";

export default async function HomePage() {
  const res = await client.time.$get();
  const { message } = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <ServerComponent message={message} />
      <ClientComponent />
    </main>
  );
}
