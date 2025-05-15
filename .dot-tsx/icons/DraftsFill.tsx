import type { SVGProps } from "react";
export default function DraftsFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M13.939 5 19 10.06 9.062 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999zm-7.414 6-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm14.352-8.174.153.144.145.153a3.58 3.58 0 0 1-.145 4.908L20.06 9l-5.061-5.06.97-.97a3.58 3.58 0 0 1 4.908-.144M10.525 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm4-4-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"
      />
    </svg>
  );
}
