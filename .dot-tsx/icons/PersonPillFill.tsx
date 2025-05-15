import type { SVGProps } from "react";
export default function PersonPillFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.683 21.998a3.87 3.87 0 0 1 .58-4.735L15.525 14H6.253a2.25 2.25 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.595 1.494 2.097 3.909 3.169 7.169 3.234M17 7.004a5 5 0 1 0-10 0 5 5 0 0 0 10 0m.97 5.966a2.871 2.871 0 1 1 4.06 4.06l-5 5a2.871 2.871 0 1 1-4.06-4.06zm3 1.06a1.37 1.37 0 0 0-1.94 0L17.06 16 19 17.94l1.97-1.97a1.37 1.37 0 0 0 0-1.94m-3.94 6a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"
      />
    </svg>
  );
}
