import link from "../../assets/link.svg";
import ProjectViewer from "../../components/ProjectViewer";

function GenAI2() {
  return (
    <div className="flex flex-col items-center gap-[35px] lg:gap-[100px] mb-[28px] lg:mb-[90px]">
      <div className="flex flex-col items-center justify-center h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Project Title</h1>
        <p className="font-inter text-[16px] lg:text-[24px] leading-[28px] lg:leading-[36px] text-center text-white">멀티에이전트 학습 어시스턴트</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] leading-[24px] text-center text-white">
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
        <p className="hidden lg:block font-inter text-[20px] leading-[28px] text-center text-white">
          기존 AI의 대용량 PDF 표 인식 실패와 단순 조회형 문제 생성 한계를 해결하기 위해,<br/>
          멀티에이전트 구조로 PDF를 분할·병렬 처리해 표를 추출하고<br/>
          GPT-4o 기반 비교·분석 문제 출제 및 채점·오답 노트를 제공하는 시스템을 구축합니다.<br/><br/>
          이를 통해 강의자료 업로드 시 표 기반 심화 문제를 생성하여<br/>
          교재 문제 부족을 해소하고 시험 대비 학습 효율을 높이고자 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[28px] leading-[28px] lg:leading-[40px] text-white">김도연 위지우<br/>원지우 정세빈</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team2" className="font-inter text-[16px] lg:text-[32px] leading-[40px] text-white">🔗</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Project</h1>
        <ProjectViewer teamName="genAI2" totalSlides={42} />
      </div>

      <div className="flex flex-col items-center h-[120px] lg:gap-[8px]">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Q&A</h1>
        <a href="https://padlet.com/smdacos/ai-2-kctg8gd00clz0fvl" className="flex justify-center items-center gap-[4px] lg:gap-[8px] font-inter text-[16px] lg:text-[24px] leading-[28px] text-center text-white hover:scale-105">궁금한 점을 남겨주세요
          <img src={link} alt="Link" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" /> 
        </a>

      </div>
    </div>
  );
}

export default GenAI2;
