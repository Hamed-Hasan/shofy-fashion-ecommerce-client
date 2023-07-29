import React from "react";
import ModalVideo from "react-modal-video";

const PopupVideo = ({ isVideoOpen, setIsVideoOpen, videoId }) => {
  return (
    <ModalVideo
      channel="youtube"
      autoplay
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default PopupVideo;
