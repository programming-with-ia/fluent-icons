import type { SVGProps } from "react";
export default function NextFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 4a1 1 0 1 0-2 0v16a1 1 0 1 0 2 0zM3 4.947c0-1.424 1.612-2.252 2.77-1.422l10.47 7.507a1.75 1.75 0 0 1-.075 2.895l-10.47 6.716C4.53 21.39 3 20.554 3 19.17z"
      />
    </svg>
  );
}
