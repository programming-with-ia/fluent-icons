import type { SVGProps } from "react";
export default function ChevronUpDownFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.79 8.387a1 1 0 0 1-1.497 1.32L12 4.414 6.707 9.707l-.094.083a1 1 0 0 1-1.32-1.497l6-6 .094-.083a1 1 0 0 1 1.32.083l6 6zM5.21 15.613a1 1 0 0 1 1.497-1.32L12 19.586l5.293-5.293.094-.083a1 1 0 0 1 1.32 1.497l-6 6-.094.083a1 1 0 0 1-1.32-.083l-6-6z"
      />
    </svg>
  );
}
