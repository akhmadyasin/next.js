import React from "react";

// ⬅️ Ini bikin halaman tidak di-prerender (SSR)
export const dynamic = "force-dynamic";

type Props = { params: { segments?: string[] } };

const Page = ({ params }: Props) => {
  const segments = params?.segments || []; // ⬅️ default array kosong

  return (
    <main>
      <p>segments 1: {segments[0] || "No segment 1"}</p>
      <p>segments 2: {segments[1] || "No segment 2"}</p>
    </main>
  );
};

export default Page;
