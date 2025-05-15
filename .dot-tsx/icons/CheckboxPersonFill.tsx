import type { SVGProps } from "react";
export default function CheckboxPersonFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17 2a3 3 0 0 1 3 3v7.154a3 3 0 0 0-3.236 4.83H16.5a2.5 2.5 0 0 0-2.5 2.5q0 .263.027.516H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l7-7a.75.75 0 0 0-1.06-1.06M19 12.984a2 2 0 1 1 .002 3.998A2 2 0 0 1 19 12.984m-2.5 5h5a1.5 1.5 0 0 1 1.5 1.5c0 1.116-.459 2.01-1.212 2.614-.741.595-1.735.886-2.788.886s-2.047-.29-2.788-.886A3.2 3.2 0 0 1 15.034 20a4 4 0 0 1-.034-.516 1.5 1.5 0 0 1 1.5-1.5"
      />
    </svg>
  );
}
