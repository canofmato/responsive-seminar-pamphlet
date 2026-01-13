import projectImg1 from "../../assets/test0.jpg";
import projectImg2 from "../../assets/test1.jpg";
import projectImg3 from "../../assets/test2.jpg";
import projectImg4 from "../../assets/test3.jpg";
import projectImg5 from "../../assets/test4.jpg";

function GenAI2() {
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
        <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[40px] text-center text-white">멀티에이전트 학습 어시스턴트</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 AI의 대용량 PDF 표 인식 실패와 단순 조회형<br/>
          문제 생성 한계를 해결하기 위해, 멀티에이전트 구조로<br/>
          PDF를 분할·병렬 처리해 표를 추출하고<br/>
          GPT-4o 기반 비교·분석 문제 출제 및<br/>
          채점·오답 노트를 제공하는 시스템을 구축합니다.<br/><br/>
          이를 통해 강의자료 업로드 시 표 기반 심화 문제를<br/>
          생성하여 교재 문제 부족을 해소하고<br/>
          시험 대비 학습 효율을 높이고자 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 AI의 대용량 PDF 표 인식 실패와 단순 조회형 문제 생성 한계를 해결하기 위해,<br/>
          멀티에이전트 구조로 PDF를 분할·병렬 처리해 표를 추출하고<br/>
          GPT-4o 기반 비교·분석 문제 출제 및 채점·오답 노트를 제공하는 시스템을 구축합니다.<br/><br/>
          이를 통해 강의자료 업로드 시 표 기반 심화 문제를 생성하여 교재 문제 부족을 해소하고 시험 대비 학습 효율을 높이고자 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[44px] text-white">김도연 위지우<br/>원지우 정세빈</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team2" className="font-inter text-[16px] lg:text-[32px] leading-[28px] text-white">🔗</a>
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

export default GenAI2;
