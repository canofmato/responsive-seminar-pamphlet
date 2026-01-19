import link from "../../assets/link.svg";
import ProjectViewer from "../../components/ProjectViewer";

function CV() {

  return (
    <div className="flex flex-col items-center gap-[35px] lg:gap-[100px] mb-[28px] lg:mb-[90px]">
      <div className="flex flex-col items-center justify-center h-[120px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Project Title</h1>
        <p className="font-inter text-[16px] lg:text-[24px] leading-[28px] lg:leading-[36px] text-center text-white">한국인 체형 데이터 기반<br/>퍼스널 패션 추천 시스템</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] leading-[24px] text-center text-white">
          기존 의상 추천 및 가상 피팅 시스템의 서구 체형 중심<br/>
          데이터 의존과 추천–시각화 분리로 한국인 체형 적합도<br/>
          판단이 어렵다는 한계를 해결하기 위해, DeepFashion<br/>
          기반 의상 추천 로직과 한국인 체형으로 파인튜닝된<br/>
          SMPL 모델을 결합한 통합 프로토타입을 구축합니다.<br/><br/>

          추천 의상을 3D 인체 모델에 적용해 실제 착용에<br/>
          가까운 시각화를 제공하는 것을 목표로 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[20px] leading-[28px] text-center text-white">
          기존 의상 추천 및 가상 피팅 시스템의 서구 체형 중심 데이터 의존과 추천–시각화 분리로<br/>
          한국인 체형 적합도 판단이 어렵다는 한계를 해결하기 위해,<br/>
          DeepFashion 기반 의상 추천 로직과 한국인 체형으로 파인튜닝된 SMPL 모델을 결합한 통합 프로토타입을 구축합니다.<br/><br/>

          추천 의상을 3D 인체 모델에 적용해 실제 착용에 가까운 시각화를 제공하는 것을 목표로 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[28px] leading-[28px] lg:leading-[40px] text-white">김다은 박소현<br/>서정인 전수영</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[50px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team5" className="font-inter text-[16px] lg:text-[32px] leading-[40px] text-white">🔗</a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="font-bakbak text-[40px] lg:text-[50px] text-[#74CFFB]">Project</h1>
        <ProjectViewer teamName="cv" totalSlides={29} />
      </div>

      <div className="flex flex-col items-center h-[120px] lg:gap-[8px]">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Q&A</h1>
        <a href="https://padlet.com/kmj25b/1-5cg8tjomtvtxl0xd" className="flex justify-center items-center gap-[4px] lg:gap-[8px] font-inter text-[16px] lg:text-[24px] leading-[28px] text-center text-white hover:scale-105">궁금한 점을 남겨주세요
           <img src={link} alt="Link" className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" /> 
        </a>

      </div>
    </div>
  );
}

export default CV;
