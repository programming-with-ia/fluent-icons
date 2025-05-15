import type { SVGProps } from "react";
export default function PersonProhibitedFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-5.477 1.999a6.47 6.47 0 0 0-1.023 3.5c0 1.645.61 3.146 1.616 4.29q-1.202.212-2.616.212c-2.89 0-5.128-.657-6.691-2a3.75 3.75 0 0 1-1.305-2.844v-.907A2.25 2.25 0 0 1 4.254 14zm8.786 1.253-5.557 5.557a4 4 0 0 0 5.557-5.557M17.5 13.5a4 4 0 0 0-3.31 6.247l5.558-5.556A4 4 0 0 0 17.5 13.5M10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
      />
    </svg>
  );
}
