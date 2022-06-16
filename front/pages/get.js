import { Layout } from '../components/Layout/Layout';
import useTranslation from 'next-translate/useTranslation';

const layoutProps = {
  title: 'Madeamaze'
}

export default function Home() {
const { t } = useTranslation("request");
const copyHandler = function(){
    alert('copied!')
}
  return (
    <Layout {...layoutProps}>
      <section className="mixer">
        <div className="container">
          <div className="mixer__body">
            <h1 className="mixer__title">Заявка №228</h1>
          </div>
          <div className='mixer__table'>
            <div className='mixer__status'>
              <div>Статус заявки:</div>  
              <div> Исполняется</div>
            </div>
            <div className='mixer__status'>
               <div>Адрес для отправки средств:</div> 
               <div className='bitcoin' onClick={copyHandler}>3MQTRzttkMtsMEy9dRq4Sf1xiSsWKgQkyH</div>
            </div>
            <div className='mixer__status'>
               <div>Количество для отправки:</div> 
               <div>3 BTC</div>
            </div>
            
          </div>
        </div>
      </section>
    </Layout >
  );
}