import type { SVGProps } from "react";
export default function DocumentLandscapeFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22 12h-6a2 2 0 0 1-2-2V4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
      />
      <path fill="currentColor" d="M21.5 10.5H16a.5.5 0 0 1-.5-.5V4.5z" />
    </svg>
  );
}
