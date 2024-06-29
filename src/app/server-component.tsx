export const ServerComponent = ({ message }: { message: string }) => {
  return (
    <>
      <div className="text-2xl tabular-nums">S: {message}</div>
    </>
  );
};
