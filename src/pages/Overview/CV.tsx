import projectImg1 from "../../assets/test0.jpg";
import projectImg2 from "../../assets/test1.jpg";
import projectImg3 from "../../assets/test2.jpg";
import projectImg4 from "../../assets/test3.jpg";
import projectImg5 from "../../assets/test4.jpg";

function CV() {
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
        <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[40px] text-center text-white">한국인 체형 데이터 기반<br/>퍼스널 패션 추천 시스템</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 의상 추천 및 가상 피팅 시스템의 서구 체형 중심<br/>
          데이터 의존과 추천–시각화 분리로 한국인 체형 적합도<br/>
          판단이 어렵다는 한계를 해결하기 위해, DeepFashion<br/>
          기반 의상 추천 로직과 한국인 체형으로 파인튜닝된<br/>
          SMPL 모델을 결합한 통합 프로토타입을 구축합니다.<br/><br/>

          추천 의상을 3D 인체 모델에 적용해 실제 착용에<br/>
          가까운 시각화를 제공하는 것을 목표로 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 의상 추천 및 가상 피팅 시스템의 서구 체형 중심 데이터 의존과 추천–시각화 분리로<br/>
          한국인 체형 적합도 판단이 어렵다는 한계를 해결하기 위해,<br/>
          DeepFashion 기반 의상 추천 로직과 한국인 체형으로 파인튜닝된 SMPL 모델을 결합한 통합 프로토타입을 구축합니다.<br/><br/>

          추천 의상을 3D 인체 모델에 적용해 실제 착용에 가까운 시각화를 제공하는 것을 목표로 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[44px] text-white">김다은 박소현<br/>서정인 전수영</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team5" className="font-inter text-[16px] lg:text-[32px] leading-[28px] text-white">🔗</a>
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

export default CV;
