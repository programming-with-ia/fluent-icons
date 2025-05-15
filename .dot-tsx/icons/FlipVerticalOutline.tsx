import type { SVGProps } from "react";
export default function FlipVerticalOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17.133 3.855a.75.75 0 0 1 .367.645v6.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.358-1.409l11.5-6.25a.75.75 0 0 1 .741.014M8.201 10H16V5.761L8.2 10Zm9.299 9.5a.75.75 0 0 1-1.108.659l-11.5-6.25A.75.75 0 0 1 5.25 12.5h11.5a.75.75 0 0 1 .75.75z"
      />
    </svg>
  );
}
