export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className="loader z-40">
        <div className="circle"></div>
      </div>
    </div>
  );
}
