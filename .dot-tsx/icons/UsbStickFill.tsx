import type { SVGProps } from "react";
export default function UsbStickFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15.267 1.997a.75.75 0 0 1 .743.649l.007.101v4.386a2.25 2.25 0 0 1 1.48 1.947l.007.17v10.5a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-6.5a2.25 2.25 0 0 1-2.245-2.096l-.005-.154V9.25a2.25 2.25 0 0 1 1.513-2.126V2.747a.75.75 0 0 1 .647-.743l.102-.007zm-.75 1.5H9.516v3.502h5z"
      />
    </svg>
  );
}
