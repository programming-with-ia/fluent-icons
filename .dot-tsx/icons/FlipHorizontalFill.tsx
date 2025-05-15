import type { SVGProps } from "react";
export default function FlipHorizontalFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.5 17.5a.75.75 0 0 1-.659-1.108l6.25-11.5a.75.75 0 0 1 1.409.358v11.5a.75.75 0 0 1-.75.75zm15 0a.75.75 0 0 0 .659-1.108l-6.25-11.5a.75.75 0 0 0-1.409.358v11.5c0 .414.336.75.75.75zm-5-2v-5.332l2.898 5.332z"
      />
    </svg>
  );
}
