import { useRouter } from "next/router";
import { Result, Button } from "antd";
import Link from "next/link";
export default function Redirect() {
  const router = useRouter();
  const { target } = router.query;

  return (
    <div className=" bg-primary-color min-h-screen w-full">
      <Result
        title="此链接安全性未知。"
        subTitle={`跳转至\n${target}`}
        extra={[
          <Link passHref key={'go'} href={String(target)}>
            <Button type="primary" key="console" className="bg-blue-0">
              Go
            </Button>
          </Link>,
          <Button key="buy" onClick={()=>{history.back()}}>Back </Button>,
        ]}
      />
    </div>
  );
}
