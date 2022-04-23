import useTranslation from 'next-translate/useTranslation';
import { Button } from 'antd';
export default function Index(){
    const { t } = useTranslation('common');
    return (
        <div>
             <Button className='mx-6' type="primary">{t('test')}</Button>
        </div>
    )
}