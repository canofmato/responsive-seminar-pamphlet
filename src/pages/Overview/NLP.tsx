import projectImg1 from "../../assets/test0.jpg";
import projectImg2 from "../../assets/test1.jpg";
import projectImg3 from "../../assets/test2.jpg";
import projectImg4 from "../../assets/test3.jpg";
import projectImg5 from "../../assets/test4.jpg";

function NLP() {
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
        <p className="font-inter text-[16px] lg:text-[32px] leading-[24px] lg:leading-[40px] text-center text-white">한국어 변형 욕설 탐지를 위한<br/>자연어 처리 기반 분류 모델 구축</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bakbak text-[40px] lg:text-[60px] text-[#74CFFB]">Overview</h1>
        <p className="lg:hidden font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 사전 기반 필터링이 변형된 욕설을 놓치는 한계를<br/>
          해결하기 위해, 서브워드·문자 단위 분석과 임베딩 기반<br/>
          학습을 활용한 욕설 탐지 모델을 제안합니다.<br/><br/>

          욕설의 의미와 패턴을 학습하여, 단순한 키워드 매칭을<br/>
          넘어선 강력한 필터링을 목표로 하며, 이를 통해 온라인<br/>
          플랫폼의 욕설 필터링 정확도 향상에 기여하고자 합니다.
        </p>

        {/* 데스크탑 버전 */}
        <p className="hidden lg:block font-inter text-[14px] lg:text-[24px] leading-[24px] lg:leading-[32px] text-center text-white">
          기존 사전 기반 필터링이 변형된 욕설을 놓치는 한계를 해결하기 위해,<br/>
          서브워드·문자 단위 분석과 임베딩 기반 학습을 활용한 욕설 탐지 모델을 제안합니다.<br/><br/>

          욕설의 의미와 패턴을 학습하여, 단순한 키워드 매칭을 넘어선 강력한 필터링을 목표로 하며,<br/>
          이를 통해 온라인 플랫폼의 욕설 필터링 정확도 향상에 기여하고자 합니다.
        </p>
      </div>

      <div className="flex items-center justify-between gap-[32px] lg:w-[600px]">
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Member</h2>
          <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[44px] text-white">권지영 김나경<br/>박소영</p>
        </div>
        <div className="flex flex-col items-center gap-[12px] h-[120px]">
          <h2 className="font-bakbak text-[32px] lg:text-[60px] text-[#74CFFB]">Link</h2>
          <a href="https://github.com/DACOS-Data-Analysis-Club-Of-Sookmyung/25-2-team3" className="font-inter text-[16px] lg:text-[32px] leading-[28px] text-white">🔗</a>
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

export default NLP;
