"use client";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col justify-center items-center">
      <p className="font-bold text-4xl">{params.slug}</p>
      <button className="dynamic-routes-button" onClick={() => history.go(-1)}>
        Back
      </button>
    </main>
  );
}
