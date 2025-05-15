import type { SVGProps } from "react";
export default function ThumbDislikeFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15.057 14.183q.691 2.139.693 3.753c0 2.399-.939 4.248-2.5 4.248-.8 0-1.078-.45-1.383-1.547l-.27-1.021q-.15-.539-.526-1.831a.3.3 0 0 0-.03-.065l-2.866-4.486a5.9 5.9 0 0 0-2.855-2.327l-1.257-.48A1.75 1.75 0 0 1 2.97 8.458l.686-3.539A2.25 2.25 0 0 1 5.33 3.163l8.25-2.022a4.75 4.75 0 0 1 5.733 3.44l1.574 6.173a2.75 2.75 0 0 1-2.665 3.429z"
      />
    </svg>
  );
}
