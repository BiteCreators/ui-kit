import React, { ReactNode } from "react";

import { cn } from "@byte-creators/utils";

const typographyVariants = {
  h1: "text-xl font-bold leading-9", // Заголовок H1 с размером 28px, жирностью и межстрочным интервалом 36px
  h2: "text-lg font-semibold leading-8", // Заголовок H2 с размером 24px, весом 600 и межстрочным интервалом 32px
  h3: "text-base font-medium leading-7", // Заголовок H3 с размером 20px, весом 500 и межстрочным интервалом 28px
  large: "text-[26px] font-bold", // Класс для текста с размером 32px и жирностью bold
  "medium-text": "text-base font-normal leading-6", // Обычный текст 16px с весом 400 и межстрочным интервалом 24px
  "regular-link": "text-sm font-normal cursor-pointer text-blue-500 underline", // Обычная ссылка с размером 14px, весом 400, цветом синий и подчеркиванием
  "regular-text": "text-base font-normal leading-5", // Обычный текст 14px с весом 400 и межстрочным интервалом 20px
  "small-text": "text-xs font-normal leading-4", // Обычный мелкий текст 12px с весом 400 и межстрочным интервалом 16px
};

type Props = {
  children?: ReactNode;
  className?: string;
  variant?: keyof typeof typographyVariants;
};

export function Typography({
  children,
  className,
  variant = "regular-text",
}: Props) {
  const classes = cn(typographyVariants[variant], className);
  const element =
    variant === "h1" || variant === "h2" || variant === "h3" ? variant : "p";

  return React.createElement(element, { className: classes }, children);
}
