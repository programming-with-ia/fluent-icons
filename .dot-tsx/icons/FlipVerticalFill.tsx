import type { SVGProps } from "react";
export default function FlipVerticalFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17.5 4.5a.75.75 0 0 0-1.108-.659l-11.5 6.25A.75.75 0 0 0 5.25 11.5h11.5a.75.75 0 0 0 .75-.75zm-2 5h-5.332L15.5 6.602zm2 10a.75.75 0 0 1-1.108.659l-11.5-6.25A.75.75 0 0 1 5.25 12.5h11.5a.75.75 0 0 1 .75.75z"
      />
    </svg>
  );
}
