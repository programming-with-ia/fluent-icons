import type { SVGProps } from "react";
export default function ArrowRoutingFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.71 2.292a1 1 0 1 0-1.414 1.415l1.292 1.29h-5.592a3 3 0 0 0-3 3v8.999a1 1 0 0 1-1 1H7.828A3.001 3.001 0 0 0 2 19a3 3 0 0 0 5.83.996h1.166a3 3 0 0 0 3-3v-9a1 1 0 0 1 1-1h5.589L17.29 8.287a1 1 0 1 0 1.41 1.417l3.01-3a1 1 0 0 0 0-1.415z"
      />
    </svg>
  );
}
