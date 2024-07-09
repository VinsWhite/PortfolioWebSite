import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import scrollToTop from "../assets/functions/scrollToTop";

export default function PrivacyPolicyComp() {
    const [t] = useTranslation("global");

    useEffect(() => {
        scrollToTop()
    }, [])

  return (
    <div className="h-full py-20 bg-almostWhite px-10 md:px-20">
        <h2 className="font-semibold text-secondary text-4xl pb-6">{t("privacy-policy.title")}</h2>
        <p>{t("privacy-policy.welcome")}</p>
        <h4 className="text-xl pt-3 font-semibold">{t("privacy-policy.information")}</h4>
        <p>{t("privacy-policy.collect")}</p>
        <h4 className="text-xl pt-3 font-semibold">{t("privacy-policy.how-info")}</h4>
        <p>{t("privacy-policy.purpose")}</p>
        <h4 className="text-xl pt-3 font-semibold">{t("privacy-policy.legal")}</h4>
        <p>{t("privacy-policy.process")}</p>
        <h4 className="text-xl pt-3 font-semibold">{t("privacy-policy.third")}</h4>
        <p>{t("privacy-policy.no-share")}</p>
        <h4 className="text-xl pt-3 font-semibold">{t("privacy-policy.international-users")}</h4>
        <p>{t("privacy-policy.international")}</p>
        <h4 className="text-xl pt-3 font-semibold">{t("privacy-policy.changes")}</h4>
        <p>{t("privacy-policy.update")}</p>
        <h4 className="text-xl pt-3 font-semibold">{t("privacy-policy.contact-us")}</h4>
        <p>{t("privacy-policy.contacts")}</p>
        <h4 className="text-xl mt-6 text-white px-3 py-1 rounded-md bg-secondary font-semibold">{t("privacy-policy.date")}</h4>
    </div>
  )
}
