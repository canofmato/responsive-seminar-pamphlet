import projectImg1 from "../../assets/test0.jpg";
import projectImg2 from "../../assets/test1.jpg";
import projectImg3 from "../../assets/test2.jpg";
import projectImg4 from "../../assets/test3.jpg";
import projectImg5 from "../../assets/test4.jpg";

function RecSys() {
const projectImages = [
    { id: 1, src: projectImg1 },
    { id: 2, src: projectImg2 },
    { id: 3, src: projectImg3 },
    { id: 4, src: projectImg4 },
    { id: 5, src: projectImg5 },
  ];
  return (
    <div className="flex flex-col items-center gap-[35px] lg:gap-[100px] mb-[28px] lg:mb-[90px]">
      <div className="flex flex-col items-center justify-center h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[80px] text-[#74CFFB]">Project Title</h1>
        <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[40px] text-center text-white">숙명여대 사용자 데이터 기반<br/>팀원/프로젝트 매칭 추천 알고리즘</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          학생의 관심 분야와 활동 이력을 기반으로 적합한<br/>
          프로젝트를 추천하는 매칭 시스템을 제안합니다.<br/>
          직접 구축한 사용자·프로젝트 데이터셋을 활용해<br/>
          콘텐츠 기반(CBF)과 협업 이력 기반(CF)을 결합한 <br/>
          하이브리드 추천 방식을 적용했습니다.<br/><br/>

          이를 통해 학생들이 자신에게 맞는 프로젝트를<br/>
          효율적으로 탐색하도록 돕는 것을 목표로 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          학생의 관심 분야와 활동 이력을 기반으로 적합한 프로젝트를 추천하는 매칭 시스템을 제안합니다.<br/>
          직접 구축한 사용자·프로젝트 데이터셋을 활용해 콘텐츠 기반(CBF)과 협업 이력 기반(CF)을 결합한 하이브리드 추천 방식을 적용했습니다.<br/><br/>

          이를 통해 학생들이 자신에게 맞는 프로젝트를 효율적으로 탐색하도록 돕는 것을 목표로 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[140px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[44px] text-white">남민서 백서연<br/>제혜림 임소정<br/>윤소영</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[140px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team4" className="font-inter text-[16px] lg:text-[32px] leading-[28px] text-white">🔗</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Project</h1>
        {/* 슬라이더 박스 */}
        <div className="w-full max-w-[340px] lg:max-w-[1000px] overflow-hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4">
            {projectImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full snap-center bg-[#74CFFB]overflow-hidden">
                <img
                  src={image.src}
                  alt={`Project ${image.id}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px] h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Q&A</h1>
        <p className="font-inter text-[16px] lg:text-[24px] leading-[28px] text-center text-white">궁금한 점을 남겨주세요</p>

      </div>
    </div>
  );
}

export default RecSys;
