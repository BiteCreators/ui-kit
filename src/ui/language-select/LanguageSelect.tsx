import { useScopedTranslation } from "@byte-creators/utils";
import { FlagRussia, FlagUnitedKingdom } from "../../assets/icons/components";
import { Select, SelectItem } from "../select/Select";
import { useRouter } from "next/router";

export const LanguageSelect = () => {
  const { asPath, defaultLocale, locale, pathname, push, query } = useRouter();

  const t = useScopedTranslation("Internationalization");

  const handleChange = (value: string) => {
    push({ pathname, query }, asPath, { locale: value });
  };

  return (
    <Select
      defaultValue={defaultLocale}
      icon={locale === "en" ? <FlagUnitedKingdom /> : <FlagRussia />}
      onValueChange={handleChange}
      responsive
      value={locale}
    >
      <SelectItem value={"ru"}>{t.ru}</SelectItem>
      <SelectItem value={"en"}>{t.en}</SelectItem>
    </Select>
  );
};
