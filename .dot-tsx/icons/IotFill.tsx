import type { SVGProps } from "react";
export default function IotFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 4.491a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.118A4 4 0 0 1 16 12v.058l1.296.261a2.5 2.5 0 1 1-.279 1.474l-1.32-.265a4 4 0 0 1-1.742 1.963l.495 1.512h.05a2.5 2.5 0 1 1-1.472.478l-.496-1.516a4 4 0 0 1-3.752-1.593l-1.795.848a2.5 2.5 0 1 1-.608-1.372l1.754-.828a4 4 0 0 1 .784-3.567l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.983 1.12A4 4 0 0 1 12 8c.505 0 .99.094 1.434.265l1.245-2.06A2.5 2.5 0 1 1 19 4.492Z"
      />
    </svg>
  );
}
