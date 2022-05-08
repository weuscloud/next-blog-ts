import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
type LoadingProps={
    text?:string,
}
export default function Loading({text='Loading'}:LoadingProps) {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <div className="grid min-h-screen min-w-full z-50">
            <div className="self-center justify-self-center">
                <Spin indicator={antIcon}/>
                <span className='ml-6'>{text}</span>
            </div>
        </div>
    )
}