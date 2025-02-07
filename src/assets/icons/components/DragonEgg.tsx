import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgDragonEgg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    preserveAspectRatio={'xMidYMid meet'}
    ref={ref}
    viewBox={'0 0 512.000000 512.000000'}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g
      fill={'currentColor'}
      stroke={'none'}
      transform={'translate(0.000000,512.000000) scale(0.100000,-0.100000)'}
    >
      <path
        d={
          'M2406 5110 c-319 -51 -634 -230 -942 -535 -523 -520 -883 -1275 -980 -2060 -20 -166 -23 -507 -5 -635 82 -587 347 -1078 761 -1416 624 -508 1501 -608 2238 -254 355 171 639 429 857 780 176 285 285 633 315 1010 28 342 -32 779 -161 1182 -22 70 -50 139 -61 153 -38 48 -128 22 -128 -38 0 -13 15 -69 34 -124 101 -300 158 -610 171 -933 10 -243 30 -240 -234 -40 -136 104 -232 170 -246 170 -13 0 -33 -9 -46 -19 l-24 -19 -5 -356 -5 -356 -150 105 c-86 61 -159 105 -172 105 -30 0 -73 -42 -73 -70 0 -12 9 -56 19 -98 30 -117 41 -189 51 -329 8 -120 10 -129 35 -150 33 -29 57 -29 91 0 25 22 26 26 24 122 -1 55 -7 137 -14 182 -6 46 -9 83 -5 83 3 0 24 -13 45 -28 125 -91 208 -142 228 -142 13 0 34 9 47 19 l24 19 5 350 5 349 185 -139 c132 -100 186 -146 188 -162 5 -37 -36 -219 -79 -349 -72 -222 -206 -468 -349 -642 -62 -76 -217 -229 -290 -287 -61 -49 -213 -149 -218 -143 -2 2 7 19 20 37 86 116 188 381 188 491 0 37 -32 67 -73 67 -45 0 -65 -24 -83 -102 -75 -327 -245 -547 -519 -674 -86 -40 -133 -51 -285 -69 -288 -35 -576 -6 -860 88 -131 43 -323 134 -425 202 l-60 40 125 6 c155 8 199 18 325 79 272 131 417 388 417 745 1 310 -92 544 -326 823 -100 118 -169 182 -199 182 -31 0 -64 -28 -72 -60 -7 -31 8 -52 123 -182 97 -108 199 -256 242 -351 65 -144 96 -331 80 -494 -11 -120 -26 -174 -72 -271 -97 -205 -298 -322 -552 -322 -257 1 -408 91 -576 345 -233 355 -344 729 -344 1170 0 334 48 630 156 965 69 212 67 209 89 121 23 -91 75 -198 131 -273 57 -75 298 -336 436 -470 90 -90 114 -108 139 -108 43 0 74 28 75 67 1 28 -18 52 -167 205 -223 230 -352 375 -397 449 -103 169 -120 391 -47 594 26 72 164 314 200 350 5 5 9 -86 9 -243 0 -239 1 -253 20 -272 28 -28 56 -26 307 20 120 22 221 40 226 40 4 0 7 -112 7 -249 0 -343 -20 -324 294 -266 104 19 195 35 202 35 11 0 14 -41 14 -223 0 -241 4 -260 54 -269 38 -8 221 10 290 28 186 47 336 165 415 324 71 144 106 387 64 439 -14 16 -64 32 -223 69 -155 37 -204 52 -202 63 2 8 39 96 83 196 43 100 79 189 79 197 0 33 -44 64 -115 81 -83 19 -120 11 -136 -32 -14 -38 -3 -72 31 -91 17 -9 30 -21 30 -25 0 -4 -31 -81 -70 -171 -38 -89 -70 -173 -70 -185 0 -13 8 -39 17 -58 22 -47 59 -62 267 -109 105 -24 170 -43 174 -52 9 -25 -28 -185 -58 -248 -73 -152 -220 -247 -418 -270 l-61 -6 -3 205 c-3 229 -6 239 -78 281 l-33 20 -181 -33 c-100 -18 -189 -35 -198 -37 -17 -5 -18 10 -18 216 0 232 -3 253 -48 293 -42 38 -74 38 -270 2 -103 -19 -199 -37 -214 -41 l-28 -6 0 249 c0 136 -4 263 -10 282 -9 32 -7 38 37 90 75 88 241 251 326 319 75 59 79 61 105 48 15 -7 128 -37 252 -65 124 -28 232 -55 241 -59 14 -6 6 -32 -62 -187 -106 -241 -106 -241 -81 -298 22 -51 48 -67 130 -87 46 -10 56 -10 78 5 58 38 46 109 -23 135 l-40 15 99 229 c107 249 112 273 60 300 -15 7 -137 39 -272 71 -135 31 -246 58 -247 59 -2 1 40 24 92 49 257 127 483 156 728 93 476 -122 975 -597 1314 -1253 42 -82 83 -156 91 -165 36 -42 122 -4 122 53 0 30 -101 232 -190 379 -368 613 -845 1020 -1335 1141 -93 23 -308 33 -399 19z'
        }
      />
    </g>
  </svg>
)

const ForwardRef = forwardRef(SvgDragonEgg)
const Memo = memo(ForwardRef)

export default Memo
