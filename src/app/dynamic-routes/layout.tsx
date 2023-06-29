export default function CommentDynamicRoutes({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1>Dynamic Routes</h1>
        <h2>Comment</h2>
        <p className="text-xl font-bold">What is your favorite treat?</p>
      </div>

      {children}
    </section>
  );
}
