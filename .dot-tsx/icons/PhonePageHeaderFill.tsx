import type { SVGProps } from "react";
export default function PhonePageHeaderFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18 6.005V19.75A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V6.005zM15.75 2A2.25 2.25 0 0 1 18 4.25V5H6v-.75A2.25 2.25 0 0 1 8.25 2z"
      />
    </svg>
  );
}
