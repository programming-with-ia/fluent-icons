import type { SVGProps } from "react";
export default function DualScreenMirrorFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.252 4.003c.966 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-7.248a2 2 0 0 1-.255-.018V4.022a2 2 0 0 1 .255-.019zm-2.081 5.411a.75.75 0 0 0-1.342 0l-2.25 4.5a.75.75 0 0 0 .67 1.086h4.5a.75.75 0 0 0 .672-1.086zm-7.167-5.413q.126 0 .246.017V19.98q-.12.017-.246.017H3.757a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.783-1.75 1.75-1.75zM7.171 9.414a.75.75 0 0 0-1.342 0l-2.25 4.5A.75.75 0 0 0 4.249 15h4.5a.75.75 0 0 0 .672-1.086z"
      />
    </svg>
  );
}
