import DocsLayout from "@/components/DocsLayout";
import ImageHotspotsClient from "./ImageHotspotsClient";

export default async function ImagePointingPage() {
  // Server Component: add data fetching here if needed
  return (
    <DocsLayout>
      <ImageHotspotsClient />
    </DocsLayout>
  );
}
