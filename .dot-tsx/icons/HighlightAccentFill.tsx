import type { SVGProps } from "react";
export default function HighlightAccentFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.003 4 20 7.75l-.007.102a.754.754 0 0 1-.71.648H4.737l-.089-.006A.75.75 0 0 1 4 7.751V4zm-4.496 9.5H8.5V21l6.576-3.106a.75.75 0 0 0 .424-.572l.008-.107z"
      />
    </svg>
  );
}
