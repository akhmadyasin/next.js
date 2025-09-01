import React from "react";

export const dynamic = "force-dynamic"; // 🚀 Biar Next.js render saat request

type Props = { params: { segments?: string[] } };

const Page = async ({ params }: Props) => {
  const segments = params.segments || [];

  return (
    <main>
      <p>segments 1: {segments[0] || "N/A"}</p>
      <p>segments 2: {segments[1] || "N/A"}</p>
    </main>
  );
};

export default Page;
