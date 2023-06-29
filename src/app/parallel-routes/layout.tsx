interface ParallelRoutesLayoutProps {
  children: React.ReactNode;
  one: React.ReactNode;
  two: React.ReactNode;
}

export default function ParallelRoutesLayout({
  children,
  one,
  two,
}: ParallelRoutesLayoutProps) {
  return (
    <>
      {children}
      <div className="flex justify-center m-2">
        {one}
        {two}
      </div>
    </>
  );
}
