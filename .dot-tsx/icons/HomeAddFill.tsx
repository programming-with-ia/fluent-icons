import type { SVGProps } from "react";
export default function HomeAddFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 11.978a6.5 6.5 0 0 1-8.298-9.864 2.25 2.25 0 0 0-2.153.419L3.8 8.227a2.25 2.25 0 0 0-.8 1.72v9.803c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75v-5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 21 19.75z"
      />
      <path
        fill="currentColor"
        d="M17.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.501 8.504V7h2.502a.5.5 0 1 0 0-1H18V3.5a.5.5 0 0 0-1 0V6h-2.504a.5.5 0 0 0 0 1h2.505v2.504a.5.5 0 0 0 1 0"
      />
    </svg>
  );
}
