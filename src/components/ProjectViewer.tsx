interface ProjectViewerProps {
  teamName: string;
  totalSlides: number;
}

function ProjectViewer({ teamName, totalSlides }: ProjectViewerProps){
  // 이미지 경로 생성
  const projectImages = Array.from({ length: totalSlides }, (_, i) => ({
    id: i + 1,
    src: `/${teamName}/${i + 1}.png`,
  }));

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* 2. 이미지 슬라이더 영역 */}
      <div className="w-full max-w-[340px] lg:max-w-[1000px]">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-default">
          {projectImages.map((image) => (
            <div key={image.id} className="flex-shrink-0 w-full snap-center">
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                loading="lazy"
                className="w-full h-auto object-contain rounded-lg shadow-md"
                onError={(e) => { 
                  (e.target as HTMLImageElement).style.display = 'none'; 
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectViewer;