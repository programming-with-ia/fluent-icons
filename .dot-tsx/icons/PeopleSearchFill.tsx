import type { SVGProps } from "react";
export default function PeopleSearchFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.91 14h7.843a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 20.696 20C19.13 21.344 16.89 22 14 22h-.179a1.75 1.75 0 0 0-.221-1.897l-.111-.12-2.23-2.224a5.48 5.48 0 0 0 .65-3.76ZM6.5 10.5a4.5 4.5 0 0 1 3.46 7.376l2.823 2.814a.75.75 0 0 1-.975 1.135l-.085-.073-2.903-2.896A4.5 4.5 0 1 1 6.5 10.5m0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M14 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
      />
    </svg>
  );
}
