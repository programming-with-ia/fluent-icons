import type { SVGProps } from "react";
export default function DocumentMarginsOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7.75 15.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-.75.75m8.5 0a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-.75.75"
      />
      <path
        fill="currentColor"
        d="M4 4.5v15A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2h-11A2.5 2.5 0 0 0 4 4.5m13-1h.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H17v-2.75a.75.75 0 0 0-1.5 0v2.75h-7v-2.75a.75.75 0 0 0-1.5 0v2.75h-.5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1H7v2.75a.75.75 0 0 0 1.5 0V3.5h7v2.75a.75.75 0 0 0 1.5 0z"
      />
    </svg>
  );
}
