import Container from "./container";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import AppContext from "../lib/AppContext";
import { useContext } from "react";
import cn from "classnames";
type CardProps = {
  autoResize?: boolean; //auto match screen width or not
};
export default function Card({ autoResize }: CardProps) {
  const appConfig = useContext(AppContext);
  const { t } = useTranslation("card");
  const router = useRouter();
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div
          className={cn(
            "py-28 flex flex-col  items-center",
            autoResize ? "lg:flex-row" : ""
          )}
        >
          <h3
            className={cn(
              "text-4xl font-bold tracking-tighter leading-tight text-center mb-10",
              autoResize
                ? " lg:mb-0 lg:text-5xl  lg:text-left lg:pr-4 lg:w-1/2"
                : ""
            )}
          >
            {t("h3-brief")}
          </h3>
          <div
            className={cn(
              "flex flex-col  justify-center items-center",
              autoResize ? " lg:flex-row lg:pl-4 lg:w-1/2" : ""
            )}
          >
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className={cn(
                "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12  duration-200 transition-colors mb-6",
                autoResize ? " lg:px-8 lg:mb-0" : ""
              )}
            >
              {t("a1")}
            </a>
            <a href={appConfig.GitHub}>{t("a2")}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
