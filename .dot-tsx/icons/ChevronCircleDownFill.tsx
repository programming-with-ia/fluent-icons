import type { SVGProps } from "react";
export default function ChevronCircleDownFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M7.47 9.97a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L12 13.44 8.53 9.97a.75.75 0 0 0-1.06 0"
      />
    </svg>
  );
}
