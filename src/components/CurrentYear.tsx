import { cacheLife } from "next/cache";

// Prerendered, but recomputed daily so the footer year rolls over on its own each January.
export default async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
