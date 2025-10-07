import { DepsProvider } from "@/config/DepsContext";
import StoryRouteClient from "./StoryRouteClient";
import { storiesIndex } from "@/data/stories";

// make this whole route static
export const dynamic = "force-static";
export const dynamicParams = false;

// pre-generate every story page
export function generateStaticParams() {
  return storiesIndex.map(({ slug }) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ works in export
  return (
    <DepsProvider>
      <StoryRouteClient slug={slug} />
    </DepsProvider>
  );
}
