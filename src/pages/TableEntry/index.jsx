
import ListTableEntry from "../../component/AddTableEntry/listoftableentry";
import { useLocation } from 'react-router-dom';

function TableEntry() {

  let location = useLocation();
  let gameType = location.search.split("=")[1]
  console.log("Location ",location,gameType)


  return (
    <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-12 xl:pb-12">
      {/* write your code here */}
      <div className="2xl:flex 2xl:space-x-[48px]">
        <section className="mb-6 2xl:mb-0 2xl:flex-1">
    
          <ListTableEntry pageSize={10} gameType={gameType}/>
        </section>
      </div>
    </main>
  );
}

export default TableEntry;
