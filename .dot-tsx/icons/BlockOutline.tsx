import type { SVGProps } from "react";
export default function BlockOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2.001c5.524 0 10 4.477 10 10s-4.476 10-10 10c-5.522 0-10-4.477-10-10s4.478-10 10-10m0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m-4.25 7.75h8.5a.75.75 0 0 1 .102 1.492l-.102.007h-8.5a.75.75 0 0 1-.102-1.493l.102-.007h8.5-8.5Z"
      />
    </svg>
  );
}
