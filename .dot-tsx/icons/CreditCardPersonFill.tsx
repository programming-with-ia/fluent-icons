import type { SVGProps } from "react";
export default function CreditCardPersonFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M5.25 4A3.25 3.25 0 0 0 2 7.25v.25h13.45c.67-.62 1.566-1 2.55-1 .985 0 1.88.38 2.55 1H22v-.25A3.25 3.25 0 0 0 18.75 4zM2 14.75V9h12.463a3.7 3.7 0 0 0-.213 1.25 3.74 3.74 0 0 0 1.2 2.75h-.95a2.5 2.5 0 0 0-2.5 2.5v.5c0 .7.17 1.379.488 2H5.25A3.25 3.25 0 0 1 2 14.75m21 .75a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5v.5c0 1.971 1.86 4 5 4s5-2.029 5-4zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0"
      />
    </svg>
  );
}
