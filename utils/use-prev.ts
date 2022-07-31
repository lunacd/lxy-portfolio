import { useRouter } from "next/router";

const usePrev = () => {
  const router = useRouter();
  const { prev } = router.query;
  return prev && typeof prev === "string" ? (prev as string) : "";
};

export default usePrev;
