import type { SVGProps } from "react";
export default function StatusFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 3c1.248 0 2.436.254 3.516.713l-1.155 1.166a7.5 7.5 0 1 0 4.781 4.826l1.165-1.174A9 9 0 1 1 12 3m9.163-.427.138.128c.938.938.941 2.456.008 3.398l-6.755 6.816a1 1 0 0 1-.41.25l-4.348 1.37a.2.2 0 0 1-.25-.251l1.371-4.353a1 1 0 0 1 .244-.403l6.758-6.819a2.387 2.387 0 0 1 3.244-.136"
      />
    </svg>
  );
}
