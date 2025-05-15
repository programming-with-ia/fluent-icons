import type { SVGProps } from "react";
export default function CircleSmallOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
      />
    </svg>
  );
}
