'use client';
interface ScrollButtonProps {
  targetSectionId?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetSectionId }) => {
  const handleScroll = () => {
    if (targetSectionId) {
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="bg-[#C7B0B1] rounded-full flex justify-center items-center px-6 py-2 text-secondary-600 text-body-4 uppercase">
       {/* {targetSectionId ? 'Scroll to Section' : 'Contact Me'} */}
       Contact Me
    </button>
  )
}

export default ScrollButton
