import type { SVGProps } from "react";
export default function DualScreenHeaderFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m21.994 7.996.001 10.253a1.75 1.75 0 0 1-1.75 1.75h-7.248a2 2 0 0 1-.255-.019V7.996zm-10.752 0v11.983a2 2 0 0 1-.245.017H3.75A1.75 1.75 0 0 1 2 18.246V7.996zm-.245-3.995q.126 0 .246.017v2.978H2V5.751c0-.967.783-1.75 1.75-1.75h7.248Zm9.248.002c.967 0 1.75.784 1.75 1.75v1.243H12.74l.001-2.974a2 2 0 0 1 .255-.019h7.248Z"
      />
    </svg>
  );
}
