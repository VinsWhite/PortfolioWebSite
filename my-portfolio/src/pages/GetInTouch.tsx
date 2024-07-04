import { useEffect } from "react";
import scrollToTop from "../assets/functions/scrollToTop";
import FormComp from "../components/get-in-touch/FormComp";

export default function GetInTouch() {

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <FormComp />
  );
}
