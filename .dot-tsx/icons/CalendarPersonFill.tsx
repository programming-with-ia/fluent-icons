import type { SVGProps } from "react";
export default function CalendarPersonFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 8.5V11a3.75 3.75 0 1 0-5.55 5h-.95a2.5 2.5 0 0 0-2.5 2.5v.5c0 .7.17 1.379.488 2H6.25A3.25 3.25 0 0 1 3 17.75V8.5zM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3z"
      />
      <path
        fill="currentColor"
        d="M23 18.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5v.5c0 1.971 1.86 4 5 4s5-2.029 5-4zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0"
      />
    </svg>
  );
}
