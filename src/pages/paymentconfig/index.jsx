import PaymentConfig from "../../component/paymentConfiuration/paymentconfig";
import { useLocation } from 'react-router-dom';

function paymentConfig() {

  let location = useLocation();
  let gameName = location.search.split("=")[1]
  console.log("Location ", location, gameName)

  return (
    <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-12 xl:pb-12">
      {/* write your code here */}
    
      <div className="2xl:flex 2xl:space-x-[48px]">
        <section className="mb-6 2xl:mb-0 2xl:flex-1">
          <PaymentConfig />
        </section>
      </div>
    </main>
  );
}

export default paymentConfig;
