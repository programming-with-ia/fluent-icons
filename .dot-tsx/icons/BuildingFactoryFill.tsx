import type { SVGProps } from "react";
export default function BuildingFactoryFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2.924 4.129A2.25 2.25 0 0 1 5.171 2h1.158a2.25 2.25 0 0 1 2.246 2.129l.838 15.5A2.25 2.25 0 0 1 7.167 22H4.333a2.25 2.25 0 0 1-2.247-2.371zM9.512 22c.6-.625.95-1.488.9-2.425L9.855 9.284l4.666-3.862A.75.75 0 0 1 15.75 6v4.24l4.98-4.781A.75.75 0 0 1 22 6v13.75A2.25 2.25 0 0 1 19.75 22zM13 20.5h5V16a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1z"
      />
    </svg>
  );
}
