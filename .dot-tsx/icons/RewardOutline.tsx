import type { SVGProps } from "react";
export default function RewardOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.25 2c.966 0 1.75.783 1.75 1.75v3.042a2.75 2.75 0 0 1-1.477 2.438l-6.282 3.28a5 5 0 1 1-4.482 0L3.477 9.23A2.75 2.75 0 0 1 2 6.792V3.75C2 2.783 2.784 2 3.75 2zM12 13.48a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m3.5-9.98h-7v6.662l3.384 1.767a.25.25 0 0 0 .232 0L15.5 10.16zM7 3.5H3.75a.25.25 0 0 0-.25.25v3.043c0 .466.259.893.671 1.108L7 9.377zm13.25 0H17v5.878L19.829 7.9a1.25 1.25 0 0 0 .671-1.108V3.75a.25.25 0 0 0-.25-.25"
      />
    </svg>
  );
}
