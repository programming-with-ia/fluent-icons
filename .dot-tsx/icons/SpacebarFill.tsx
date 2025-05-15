import type { SVGProps } from "react";
export default function SpacebarFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20 11v2H4v-2a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a1 1 0 1 0-2 0"
      />
    </svg>
  );
}
