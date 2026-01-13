import folderImg from "../../assets/macosIcon.svg";
import mouseImg from "../../assets/Mouse-pointer.svg";
import { Link } from "react-router-dom";

function Home() {
  const subFolders = Array(5).fill(null);

  return (
    <main className="w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      <div className="lg:hidden relative w-[340px] h-[750px] bg-black">

        <div className="absolute left-[50px] top-[60px] rotate-[55deg]">
          <img src={folderImg} alt="folder" className="w-[300px] min-w-[300px] h-auto" />
        </div>

        <div className="absolute left-[10px] top-[406px] rotate-[15deg] z-10 flex items-center justify-center">
          <img src={folderImg} alt="folder" className="w-[300px] min-w-[300px] h-auto" />

          <div className="absolute right-[30px] bottom-[80px] text-black translate-y-[10px]">
            <p className="font-inter font-medium text-[24px] leading-[1.2]">2026.01.19 <br/>명신관 703</p>
          </div>
        </div>

        <Link to="/overview" className="absolute top-[214px] -rotate-[13deg] z-10 flex items-center justify-center">
          <img src={folderImg} alt="folder" className="w-[300px] min-w-[300px] h-auto" />

          <div className="absolute flex flex-col justify-center gap-[4px] text-black rotate-[13deg] translate-y-[35px]">

            <div className="flex flex-col items-center text-black ">
              <h1 className="font-bakbak text-[50px] leading-[0.8] text-stroke-1">DACODAY</h1>
              <div className="w-full h-[4px] bg-black mt-1" />
            </div>

            <div className="flex items-center text-black">
              <img src={mouseImg} alt="mouse" className="w-[45px] h-[45px]"/>
              <p className="font-inter font-medium text-[15px] ">click here!!</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex relative w-full h-full items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
          <div className="flex animate-loop-scroll min-w-max gap-[70px]">
            {[...subFolders, ...subFolders].map((_, index) => (
              <div className="w-[200px] flex-shrink-0">
                <img src={folderImg} alt="folder" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        <Link to="/overview" className="z-20 flex flex-col items-center justify-center">
          <img src={folderImg} alt="folder" className="w-[500px] h-auto" />
          <div className="absolute flex flex-col justify-center gap-[4px] text-black translate-y-[55px]">

            <div className="flex flex-col items-center text-black ">
              <h1 className="font-bakbak text-[80px] leading-[0.8] text-stroke-1">DACODAY</h1>
              <div className="w-full h-[4px] bg-black mt-1" />
            </div>

            <div className="flex items-center text-black">
              <img src={mouseImg} alt="mouse" className="w-[60px] h-[60px]"/>
              <p className="font-inter font-medium text-[24px] ">click here!!</p>
            </div>
          </div>
        </Link>
      </div>
     
    </main>

  );
}

export default Home;
