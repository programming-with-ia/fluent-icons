import type { SVGProps } from "react";
export default function PreviousFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2.75 20a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0zm18-.947c0 1.424-1.612 2.252-2.77 1.422L7.51 12.968a1.75 1.75 0 0 1 .075-2.895l10.47-6.716c1.165-.748 2.695.089 2.695 1.473z"
      />
    </svg>
  );
}
