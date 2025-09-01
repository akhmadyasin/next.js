import React from "react";

export const dynamic = "force-dynamic"; // ⬅️ ini bikin halaman tidak diprerender

type Props = { params: { segments?: string[] } };

const Page = ({ params }: Props) => {
  const segments = params.segments || [];

  return (
    <main>
      <p>segments 1: {segments[0] || "No segment 1"}</p>
      <p>segments 2: {segments[1] || "No segment 2"}</p>
    </main>
  );
};

export default Page;
