import type { SVGProps } from "react";
export default function ArrowCircleDownFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M1.999 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.524-4.477-10-10-10s-10 4.476-10 10m14.53-.28a.75.75 0 0 1 .073.976l-.072.084-4.001 4a.75.75 0 0 1-.977.073l-.084-.073-4-4.001a.75.75 0 0 1 .977-1.133l.084.073 2.72 2.722V7.748a.75.75 0 0 1 .649-.743l.101-.007a.75.75 0 0 1 .743.648l.007.102v6.69l2.72-2.72a.75.75 0 0 1 .977-.072l.084.072Z"
      />
    </svg>
  );
}
