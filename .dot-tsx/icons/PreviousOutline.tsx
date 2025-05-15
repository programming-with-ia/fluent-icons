import type { SVGProps } from "react";
export default function PreviousOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 20.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 1 0-1.5 0zm15.23.225c1.158.83 2.77.002 2.77-1.422V4.83c0-1.384-1.53-2.22-2.695-1.473l-10.47 6.716a1.75 1.75 0 0 0-.074 2.895l10.47 7.507Zm1.27-1.422a.25.25 0 0 1-.396.203l-10.47-7.507a.25.25 0 0 1 .011-.413l10.47-6.717a.25.25 0 0 1 .385.21z"
      />
    </svg>
  );
}
