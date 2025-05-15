import type { SVGProps } from "react";
export default function ArrowRoutingRectangleMultipleFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.71 2.292a1 1 0 1 0-1.414 1.415l1.292 1.29h-5.592a3 3 0 0 0-3 3v8.999a1 1 0 0 1-1 1H7.828A3.001 3.001 0 0 0 2 19a3 3 0 0 0 5.83.996h1.166a3 3 0 0 0 3-3v-9a1 1 0 0 1 1-1h5.589L17.29 8.287a1 1 0 1 0 1.41 1.417l3.01-3a1 1 0 0 0 0-1.415zM14 16a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm9 1.5a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 0 2.5-2.5z"
      />
    </svg>
  );
}
