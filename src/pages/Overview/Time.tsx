function Time() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)] lg:h-[calc(100vh-100px)]">
      <div className="flex flex-col w-[320px] h-[420px] lg:w-[900px] lg:h-[650px] px-[30px] py-[25px] lg:py-[40px] lg:gap-[30px] rounded-[20px] bg-[#74CFFB] border border-[#6BCBF3] items-center justify-center">
        <h1 className="font-bakbak text-[36px] lg:text-[80px] ">TIME TABLE</h1>
        <div className="flex gap-[22px] lg:gap-[60px]">
          <div className="lg:hidden flex flex-col font-bakbak text-[20px] leading-[35px]">
            <p>18:00</p>
            <p>19:00</p>
            <p>19:10</p>
            <p>19:50</p>
            <p>20:00</p>
            <p>20:15</p>
            <p>20:30</p>
            <p>20:45</p>
          </div>
          <div className="hidden lg:block flex flex-col font-bakbak text-[30px] leading-[50px] items-center">
            <p>18:00 ~ 19:00</p>
            <p>19:00 ~ 19:10</p>
            <p>19:10 ~ 19:50</p>
            <p>19:50 ~ 20:00</p>
            <p>20:00 ~ 20:15</p>
            <p>20:15 ~ 20:30</p>
            <p>20:30 ~ 20:45</p>
            <p>20:45 ~ 21:00</p>
          </div>
    
          <div className="flex flex-col font-inter font-medium text-[15px] lg:text-[30px] leading-[35px] lg:leading-[50px] items-center">
            <p>3팀 발표</p>
            <p>쉬는 시간</p>
            <p>2팀 발표</p>
            <p>4기 커리 안내</p>
            <p>외부인원 퇴장 및 쉬는 시간</p>
            <p>3기 우수부원 발표</p>
            <p>내부 럭키드로우</p>
            <p>행사 마무리</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
