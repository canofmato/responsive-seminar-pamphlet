import link from "../../assets/link.svg";
import ProjectViewer from "../../components/ProjectViewer";

function NLP() {

  return (
    <div className="flex flex-col items-center gap-[35px] lg:gap-[100px] mb-[28px] lg:mb-[90px]">
      <div className="flex flex-col items-center justify-center h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Project Title</h1>
        <p className="font-inter text-[16px] lg:text-[24px] leading-[28px] lg:leading-[36px] text-center text-white">한국어 변형 욕설 탐지를 위한<br/>자연어 처리 기반 분류 모델 구축</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] leading-[24px] text-center text-white">
          기존 사전 기반 필터링이 변형된 욕설을 놓치는 한계를<br/>
          해결하기 위해, 서브워드·문자 단위 분석과 임베딩 기반<br/>
          학습을 활용한 욕설 탐지 모델을 제안합니다.<br/><br/>

          욕설의 의미와 패턴을 학습하여, 단순한 키워드 매칭을<br/>
          넘어선 강력한 필터링을 목표로 하며, 이를 통해 온라인<br/>
          플랫폼의 욕설 필터링 정확도 향상에 기여하고자 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[20px] leading-[28px] text-center text-white">
          기존 사전 기반 필터링이 변형된 욕설을 놓치는 한계를 해결하기 위해,<br/>
          서브워드·문자 단위 분석과 임베딩 기반 학습을 활용한 욕설 탐지 모델을 제안합니다.<br/><br/>

          욕설의 의미와 패턴을 학습하여, 단순한 키워드 매칭을 넘어선 강력한 필터링을 목표로 하며,<br/>
          이를 통해 온라인 플랫폼의 욕설 필터링 정확도 향상에 기여하고자 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[28px] leading-[28px] lg:leading-[40px] text-white">권지영 김나경<br/>박소영</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team3" className="font-inter text-[16px] lg:text-[32px] leading-[40px] text-white">🔗</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Project</h1>
        <ProjectViewer teamName="nlp" totalSlides={18} />
      </div>

      <div className="flex flex-col items-center h-[120px] lg:gap-[8px]">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Q&A</h1>
        <a href="https://padlet.com/smdacos/1-bfj5tuzrp2tb94r9" className="flex justify-center items-center gap-[4px] lg:gap-[8px] font-inter text-[16px] lg:text-[24px] leading-[28px] text-center text-white hover:scale-105">궁금한 점을 남겨주세요
          <img src={link} alt="Link" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" /> 
        </a>

      </div>
    </div>
  );
}

export default NLP;
