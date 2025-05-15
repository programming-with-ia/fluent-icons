import type { SVGProps } from "react";
export default function CalendarWorkWeekFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M8.5 11V8.5h7V11z" />
      <path
        fill="currentColor"
        d="M17.75 21A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21zm-10-14h8.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-4A.75.75 0 0 1 7.75 7"
      />
    </svg>
  );
}
