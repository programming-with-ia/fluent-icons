import type { SVGProps } from "react";
export default function ToggleRightFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7 7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10zm9.75 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
      />
    </svg>
  );
}
