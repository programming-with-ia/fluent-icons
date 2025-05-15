import type { SVGProps } from "react";
export default function XboxConsoleFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M5.75 2a.75.75 0 0 0-.75.75v18.5c0 .414.336.75.75.75H8V11.75a.75.75 0 0 1 1.5 0V22h8.75a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75zM9.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      />
    </svg>
  );
}
