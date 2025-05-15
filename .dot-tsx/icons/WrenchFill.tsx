import type { SVGProps } from "react";
export default function WrenchFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M16.75 2.001a5.25 5.25 0 0 0-5.005 6.84l-9.068 9.38a2.344 2.344 0 1 0 3.37 3.257l8.963-9.272A5.25 5.25 0 0 0 21.797 5.8a.75.75 0 0 0-1.25-.323L17.36 8.66 15.3 6.6l3.16-3.162a.75.75 0 0 0-.333-1.254 5.3 5.3 0 0 0-1.378-.183Z"
      />
    </svg>
  );
}
