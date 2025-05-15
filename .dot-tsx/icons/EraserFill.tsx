import type { SVGProps } from "react";
export default function EraserFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m15.87 2.669 4.968 4.968a2.25 2.25 0 0 1 0 3.182l-8.681 8.68 6.097.001a.75.75 0 0 1 .744.648l.006.102a.75.75 0 0 1-.648.743l-.102.007-8.41.001a2.24 2.24 0 0 1-1.714-.655l-4.968-4.969a2.25 2.25 0 0 1 0-3.182l9.526-9.526a2.25 2.25 0 0 1 3.182 0m-4.172 15.09-5.955-5.956-1.506 1.467a.75.75 0 0 0 0 1.06l4.945 4.946a.75.75 0 0 0 1.06-.016z"
      />
    </svg>
  );
}
