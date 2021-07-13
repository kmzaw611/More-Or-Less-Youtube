import youtube_video from "../api/youtube_video";

const getVideoInfo = async (videoID) => {
  const { data } = await youtube_video.get("", {
    params: {
      id: videoID,
    },
  });

  return data;
};

export default getVideoInfo;
