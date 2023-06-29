export default function CommentDynamicRoutes({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1>Dynamic Routes</h1>
        <hr className="w-[100%] my-2 border-black" />
        <h2>Comment what is your favorite treat?</h2>
      </div>

      {children}
    </section>
  );
}
