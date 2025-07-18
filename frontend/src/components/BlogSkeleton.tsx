
/* Custom shimmer animation for skeletons */
const shimmerStyle = {
  animation: "shimmer 2s infinite linear",
  background:
    "linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%)",
  backgroundSize: "1000px 100%",
};

/* Inline style for shimmer animation (as React can't use @keyframes directly) */
const globalShimmer = `
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
`;

export default function BlogSkeleton() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Add shimmer animation to the document */}
      <style>{globalShimmer}</style>
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Card Skeleton */}
        <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
          
          {/* Content Skeleton */}
          <div className="space-y-3">
             <div
              className="h-4 w-1/3 rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
           
          </div>
          <div className="flex items-center space-x-4">
            {/* Avatar Skeleton */}
            <div
              className="w-12 h-12 rounded-full"
              style={shimmerStyle}
            ></div>
            {/* Name and Title Skeleton */}
            <div className="space-y-2 flex-1">
              <div
                className="h-4 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
              <div
                className="h-3 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
            </div>
          </div>
        </div>
<div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
          
          {/* Content Skeleton */}
          <div className="space-y-3">
             <div
              className="h-4 w-1/3 rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
           
          </div>
          <div className="flex items-center space-x-4">
            {/* Avatar Skeleton */}
            <div
              className="w-12 h-12 rounded-full"
              style={shimmerStyle}
            ></div>
            {/* Name and Title Skeleton */}
            <div className="space-y-2 flex-1">
              <div
                className="h-4 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
              <div
                className="h-3 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
            </div>
          </div>
        </div><div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
          
          {/* Content Skeleton */}
          <div className="space-y-3">
             <div
              className="h-4 w-1/3 rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
           
          </div>
          <div className="flex items-center space-x-4">
            {/* Avatar Skeleton */}
            <div
              className="w-12 h-12 rounded-full"
              style={shimmerStyle}
            ></div>
            {/* Name and Title Skeleton */}
            <div className="space-y-2 flex-1">
              <div
                className="h-4 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
              <div
                className="h-3 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
            </div>
          </div>
        </div><div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
          
          {/* Content Skeleton */}
          <div className="space-y-3">
             <div
              className="h-4 w-1/3 rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-4 w-full rounded"
              style={shimmerStyle}
            ></div>
           
          </div>
          <div className="flex items-center space-x-4">
            {/* Avatar Skeleton */}
            <div
              className="w-12 h-12 rounded-full"
              style={shimmerStyle}
            ></div>
            {/* Name and Title Skeleton */}
            <div className="space-y-2 flex-1">
              <div
                className="h-4 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
              <div
                className="h-3 w-1/4 rounded"
                style={shimmerStyle}
              ></div>
            </div>
          </div>
        </div>
    
        
      </div>
    </div>
  );
}
