import type { SVGProps } from "react";
export default function ArrowUpFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.284 10.296A1 1 0 0 0 5.709 11.7L11 6.33V20a1 1 0 1 0 2 0V6.336l5.285 5.364a1 1 0 0 0 1.425-1.404l-6.823-6.924a1.25 1.25 0 0 0-1.78 0z"
      />
    </svg>
  );
}
