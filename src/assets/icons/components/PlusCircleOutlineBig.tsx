import { Ref, SVGProps, forwardRef, memo } from "react";
const SvgPlusCircleOutline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    fill={"none"}
    height={36}
    ref={ref}
    width={36}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <g clipPath={"url(#clip0_306_6176)"}>
      <path
        d={
          "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.39341 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4812 30.7229 28.8238 28.8003 30.4721 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3311 7.8365 11.1929 9.51473 9.51472C11.193 7.83649 13.3312 6.6936 15.6589 6.23058C17.9867 5.76755 20.3995 6.00519 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3065 30 15.6266 30 18C30 21.1826 28.7357 24.2348 26.4853 26.4853C24.2349 28.7357 21.1826 30 18 30V30Z"
        }
        fill={"white"}
      />
      <path
        d={
          "M22.5 16.5H19.5V13.5C19.5 13.1022 19.342 12.7206 19.0607 12.4393C18.7794 12.158 18.3978 12 18 12C17.6022 12 17.2206 12.158 16.9393 12.4393C16.658 12.7206 16.5 13.1022 16.5 13.5V16.5H13.5C13.1022 16.5 12.7206 16.658 12.4393 16.9393C12.158 17.2206 12 17.6022 12 18C12 18.3978 12.158 18.7794 12.4393 19.0607C12.7206 19.342 13.1022 19.5 13.5 19.5H16.5V22.5C16.5 22.8978 16.658 23.2794 16.9393 23.5607C17.2206 23.842 17.6022 24 18 24C18.3978 24 18.7794 23.842 19.0607 23.5607C19.342 23.2794 19.5 22.8978 19.5 22.5V19.5H22.5C22.8978 19.5 23.2794 19.342 23.5607 19.0607C23.842 18.7794 24 18.3978 24 18C24 17.6022 23.842 17.2206 23.5607 16.9393C23.2794 16.658 22.8978 16.5 22.5 16.5Z"
        }
        fill={"currentColor"}
      />
    </g>
    <defs>
      <clipPath id={"clip0_306_6176"}>
        <rect fill={"white"} height={"36"} width={"36"} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgPlusCircleOutline);
const Memo = memo(ForwardRef);

export default Memo;
