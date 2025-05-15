import type { SVGProps } from "react";
export default function DualScreenGroupFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.253 4.003c.966 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-7.248q-.13 0-.256-.018V4.022q.127-.018.256-.019zm-9.248-.002a2 2 0 0 1 .245.017V19.98a2 2 0 0 1-.245.017H3.757a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.784-1.75 1.75-1.75z"
      />
    </svg>
  );
}
