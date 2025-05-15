import type { SVGProps } from "react";
export default function RewindFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m21.002 4.75-.002 14a.75.75 0 0 1-1.21.592l-7.29-5.67v5.078a.75.75 0 0 1-1.21.592l-9-7a.75.75 0 0 1 0-1.184l9.001-7a.75.75 0 0 1 1.21.592L12.5 9.827l7.291-5.67a.75.75 0 0 1 1.21.593Z"
      />
    </svg>
  );
}
