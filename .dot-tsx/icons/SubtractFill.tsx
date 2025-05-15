import type { SVGProps } from "react";
export default function SubtractFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3.997 13H20a1 1 0 1 0 0-2H3.997a1 1 0 1 0 0 2"
      />
    </svg>
  );
}
