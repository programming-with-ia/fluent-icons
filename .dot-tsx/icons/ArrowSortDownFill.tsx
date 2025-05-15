import type { SVGProps } from "react";
export default function ArrowSortDownFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.883 4.01 12 4.003a1 1 0 0 1 .993.884l.007.116v11.584l2.293-2.294a1 1 0 0 1 1.32-.084l.094.084a1 1 0 0 1 .084 1.32l-.084.094-3.996 4a1 1 0 0 1-1.32.084l-.094-.084-4.004-4a1 1 0 0 1 1.32-1.498l.094.084L11 16.582V5.003a1 1 0 0 1 .883-.993L12 4.003z"
      />
    </svg>
  );
}
