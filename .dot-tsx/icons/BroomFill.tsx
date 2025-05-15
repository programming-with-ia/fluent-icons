import type { SVGProps } from "react";
export default function BroomFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22.452 1.923a.75.75 0 0 1 0 1.06L16.14 9.296a6.8 6.8 0 0 0-1.067-1.053l6.32-6.32a.75.75 0 0 1 1.06 0Zm-7.424 7.424a5.75 5.75 0 0 0-8.132 0l-.244.244 8.132 8.132.244-.244a5.75 5.75 0 0 0 0-8.132M1.884 12.966l3.613-2.409 8.32 8.321-2.408 3.613a.75.75 0 0 1-1.154.115L1.769 14.12a.75.75 0 0 1 .115-1.154"
      />
    </svg>
  );
}
