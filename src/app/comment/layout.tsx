export default function CommentLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1>Comment</h1>
        <p className="text-xl font-bold">What is your favorite treat?</p>
      </div>

      {children}
    </section>
  );
}
