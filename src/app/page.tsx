import { getAllSummaries, getBodyPartCounts } from "@/lib/exercises";
import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  const bodyPartCounts = getBodyPartCounts();
  const featured = getAllSummaries().slice(0, 8);

  return <HomeContent bodyPartCounts={bodyPartCounts} featured={featured} />;
}
