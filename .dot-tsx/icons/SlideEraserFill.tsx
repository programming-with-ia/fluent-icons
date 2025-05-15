import type { SVGProps } from "react";
export default function SlideEraserFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.748 4A2.75 2.75 0 0 0 2 6.75v10.496a2.75 2.75 0 0 0 2.748 2.749h7.82a2.5 2.5 0 0 1 .17-3.347l4.913-4.916a2.497 2.497 0 0 1 3.532 0l.8.8V6.75a2.75 2.75 0 0 0-2.747-2.749zm15.729 8.439a1.5 1.5 0 0 0-2.12 0l-3.108 3.11 4.204 4.205 3.108-3.11a1.5 1.5 0 0 0 0-2.12zm-7.033 4.916 1.099-1.1 4.203 4.206-1.099 1.1a1.5 1.5 0 0 1-2.12 0l-2.083-2.085a1.5 1.5 0 0 1 0-2.121"
      />
    </svg>
  );
}
