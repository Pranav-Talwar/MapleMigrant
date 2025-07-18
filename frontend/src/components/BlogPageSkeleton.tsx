
export default function BlogPageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Wide Centered Header Skeleton */}
      <header className="flex flex-col items-center justify-center ">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl animate-pulse">
            {/* Fake blog title bar */}
            <div className="h-4 bg-gray-300 rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded-lg mb-4"></div>

            {/* Optional: author/date skeleton below */}
            <div className="h-4 w-90 mx-auto bg-gray-200 rounded"></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-30">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>

        <div className="animate-pulse space-y-4 mt-12">
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
