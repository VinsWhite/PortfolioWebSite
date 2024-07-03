import { useTranslation } from "react-i18next"

export default function LanguagesComp() {
    const [t] = useTranslation("global");

  return (
    <>
        <div className="pt-10">
            <h2 className="text-secondary font-bold text-2xl">{t("languages.title")}</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 py-2 gap-3 text-center">
                <div>
                    <h2 className="uppercase text-lg font-semibold">{t("languages.it")}</h2>
                    <p>{t("languages.native")}</p>
                </div>
                <div>
                    <h2 className="uppercase text-lg font-semibold">{t("languages.en")}</h2>
                    <p>B2/C1</p>
                </div>
                <div>
                    <h2 className="uppercase text-lg font-semibold">{t("languages.jp")}</h2>
                    <p>N5/N4</p>
                </div>
            </div>
        </div>
    </>
  )
}
