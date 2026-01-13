import { Link} from 'react-router-dom';
import folderImg from "../../assets/macosIcon.svg";

const folders = [
  {id: 'time', name: 'TIME' },
  {id: 'dacos', name: 'DACOS' },
  {id: 'genai1', name: 'GenAI 1' },
  {id: 'genai2', name: 'GenAI 2' },
  {id: 'nlp', name: 'NLP' },
  {id: 'cv', name: 'CV' },
  {id: 'recsys', name: 'RecSys' },
  {id: 'cmt', name: 'Cmt.' },
]

function Overview() {

  return (
    <main className="w-full h-[calc(100vh-70px)] lg:h-[calc(100vh-100px)] bg-black flex justify-center items-center">
      <div className="relative w-[300px] lg:w-[1100px] -mt-[80px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[40px] gap-y-[30px] lg:gap-x-[100px] lg:gap-y-[60px]">
          {folders.map((folder) => (
            <Link 
              key={folder.id} 
              to={`/overview/${folder.id}`} 
              className="flex flex-col items-center group"
            >
              <div className="relative w-[130px] lg:w-[200px] transition-transform group-hover:scale-105">
                <img src={folderImg} alt="folder" className="w-full h-auto" />
                
                <div className="absolute inset-0 flex items-center justify-center pt-4 lg:pt-6">
                  <span className="font-bakbak text-black text-[25px] lg:text-[36px] text-center">
                    {folder.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </main>
  );
}

export default Overview;
