import { useRouter } from "next/router";
import { Result, Button } from "antd";
import Link from "next/link";
import AppContext from "../lib/AppContext";
import { useContext } from "react";
import useTranslation from "next-translate/useTranslation";
import Meta from "../components/meta";

export default function Redirect() {
  const router = useRouter();
  const { safe_sites } = useContext(AppContext);
  const { target } = router.query;
  const { t } = useTranslation("redirect");
  const reg_site = new RegExp("");
  return (
    <>
    <Meta titleTKey={t("locate_to")} />
      <div className="flex h-screen align-items-center">
        <div className="mx-auto my-auto">
          <Result
            status={"success"}
            title={t("status_safe")}
            subTitle={`${t("locate_to")}\n${target}`}
            extra={[
              <Link passHref key={"go"} href={String(target)}>
                <Button type="primary" key="console" className="bg-blue-0">
                  {t("go")}
                </Button>
              </Link>,
              <Button
                key="buy"
                onClick={() => {
                 history.length? window.history.back():window.history.go(-1);
                }}
              >
                {t("back")}
              </Button>,
            ]}
          />
        </div>
      </div>
    </>
  );
}
