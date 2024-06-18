// import { Skeleton } from "@/components/ui/skeleton";
import { PacmanLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <PacmanLoader
        color={'#ffffff'}
        size={40}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
            {/* <Skeleton className="w-[100px] h-[20px] rounded-full" /> */}


    </div>
  );
}
