import type { SVGProps } from "react";
export default function FlagPrideFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M4 4.25h16v1.5H4z" />
      <path fill="currentColor" d="M4 5.75h16v1.5H4z" />
      <path fill="currentColor" d="M4 7.25h16V9H4z" />
      <path fill="currentColor" d="M4 9h16v1.5H4z" />
      <path fill="currentColor" d="M4 10.5h16v1.75H4z" />
      <path fill="currentColor" d="M4 12.25h16v1.5H4z" />
      <path fill="currentColor" d="M4 13.75h17v1.5H4z" />
      <path
        fill="currentColor"
        d="M3.75 3a.75.75 0 0 0-.75.75v17.5a.75.75 0 0 0 1.5 0V16.5h15.75a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75zm.75 1.5h15V15h-15z"
      />
    </svg>
  );
}
