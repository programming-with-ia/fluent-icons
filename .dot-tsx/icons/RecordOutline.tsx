import type { SVGProps } from "react";
export default function RecordOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0"
      />
    </svg>
  );
}
