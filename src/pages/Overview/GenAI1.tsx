import link from "../../assets/link.svg";
import ProjectViewer from "../../components/ProjectViewer";

function GenAI1() {
  return (
    <div className="flex flex-col items-center gap-[35px] lg:gap-[100px] mb-[28px] lg:mb-[90px]">
      <div className="flex flex-col items-center justify-center h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Project Title</h1>
        <p className="font-inter text-[16px] lg:text-[24px] leading-[28px] lg:leading-[36px] text-center text-white">DART 사업 보고서를 활용한<br/>기업 재무분석 AI 리포트 시스템</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] leading-[24px] text-center text-white">
          기존 생성형 AI가 사업보고서 PDF를 처리할 때 발생하는<br/>
          재무제표 구조 인식 한계와 수치 계산 오류,<br/>
          그리고 초보 투자자가 공시를 이해하기 어렵다는 문제를<br/>
          해결하기 위해, 계산·검증 파이프라인을 갖춘 DART 사업<br/>
          보고서 기반 재무분석 AI 리포트 시스템을 구축합니다.<br/><br/>
          이를 통해 초보 투자자도 공시 정보를 쉽고 신뢰성 있게<br/>
          활용할 수 있는 금융 보고서를 제공하고자 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[20px] leading-[28px] text-center text-white">
          기존 생성형 AI가 사업보고서 PDF를 처리할 때 발생하는 재무제표 구조 인식 한계와 수치 계산 오류,<br/>
          그리고 초보 투자자가 공시를 이해하기 어렵다는 문제를 해결하기 위해,<br/>
          계산·검증 파이프라인을 갖춘 DART 사업보고서 기반 재무분석 AI 리포트 시스템을 구축합니다.<br/><br/>
          이를 통해 초보 투자자도 공시 정보를 쉽고 신뢰성 있게 활용할 수 있는 금융 보고서를 제공하고자 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[28px] leading-[28px] lg:leading-[40px] text-white">김소영 이소윤<br/>조예린</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team1" className="font-inter text-[16px] lg:text-[32px] leading-[40px] text-white">🔗</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Project</h1>
        <ProjectViewer teamName="genAI1" totalSlides={38} />
      </div>

      <div className="flex flex-col items-center h-[120px] lg:gap-[8px]">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Q&A</h1>
        <a href="https://padlet.com/smdacos/dart-ai-y50vppna1ecppkpm" className="flex justify-center items-center gap-[4px] lg:gap-[8px] font-inter text-[16px] lg:text-[24px] leading-[28px] text-center text-white hover:scale-105">궁금한 점을 남겨주세요
         <img src={link} alt="Link" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" /> 
        </a>
  
      </div>
    </div>
  );
}

export default GenAI1;
