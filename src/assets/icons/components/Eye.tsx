import { Ref, SVGProps, forwardRef, memo } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={"none"}
    height={24}
    ref={ref}
    width={24}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <g clipPath={"url(#eye_svg__a)"} fill={"currentcolor"}>
      <path d={"M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"} />
      <path
        d={
          "M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1m-9.87 4a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"
        }
      />
    </g>
    <defs>
      <clipPath id={"eye_svg__a"}>
        <path d={"M0 0h24v24H0z"} fill={"currentcolor"} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgEye);
const Memo = memo(ForwardRef);

export default Memo;
