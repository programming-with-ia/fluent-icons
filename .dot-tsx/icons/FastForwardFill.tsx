import type { SVGProps } from "react";
export default function FastForwardFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m12.71 4.158 9 7a.75.75 0 0 1 0 1.184l-9.001 7a.75.75 0 0 1-1.21-.592v-5.077l-7.29 5.67a.75.75 0 0 1-1.21-.593L3 4.75a.75.75 0 0 1 1.21-.592l7.288 5.669.002-5.077a.75.75 0 0 1 1.21-.592"
      />
    </svg>
  );
}
