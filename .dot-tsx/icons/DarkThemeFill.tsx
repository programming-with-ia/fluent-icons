import type { SVGProps } from "react";
export default function DarkThemeFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2V4a8 8 0 1 1 0 16"
      />
    </svg>
  );
}
