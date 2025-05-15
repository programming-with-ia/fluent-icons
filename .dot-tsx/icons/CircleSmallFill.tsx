import type { SVGProps } from "react";
export default function CircleSmallFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
    </svg>
  );
}
