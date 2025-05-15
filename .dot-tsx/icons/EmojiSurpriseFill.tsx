import type { SVGProps } from "react";
export default function EmojiSurpriseFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2.005c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10M12 13a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M9 8.751a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499m6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499"
      />
    </svg>
  );
}
