export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col justify-center items-center">
      <p className="font-bold">{params.slug}</p>
    </main>
  );
}
