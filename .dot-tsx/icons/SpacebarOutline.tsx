import type { SVGProps } from "react";
export default function SpacebarOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.5 11v2a.25.25 0 0 1-.25.25H3.75A.25.25 0 0 1 3.5 13v-2A.75.75 0 0 0 2 11v2c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 13v-2a.75.75 0 0 0-1.5 0"
      />
    </svg>
  );
}
