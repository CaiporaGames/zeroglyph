import * as React from "react";
import { DepsProvider } from "@/config/DepsContext";
import StoryRouteClient from "./StoryRouteClient"; // client component below

// In Next latest, `params` is a Promise. Unwrap with React.use (or await).
export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params); // ✅ unwrap the promise
  return (
    <DepsProvider>
      <StoryRouteClient slug={slug} />
    </DepsProvider>
  );
}
