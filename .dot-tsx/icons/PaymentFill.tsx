import type { SVGProps } from "react";
export default function PaymentFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2 7.75A2.75 2.75 0 0 1 4.75 5h14.5A2.75 2.75 0 0 1 22 7.75V9.5H2zM2 11h20v5.25A2.75 2.75 0 0 1 19.25 19H4.75A2.75 2.75 0 0 1 2 16.25zm13.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
      />
    </svg>
  );
}
