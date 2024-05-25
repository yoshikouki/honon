export const ServerComponent = ({ message }: { message: string }) => {
  return (
    <>
      <h1 className="font-black text-6xl">HonoN</h1>
      <div className="text-2xl tabular-nums">S: {message}</div>
    </>
  );
};
