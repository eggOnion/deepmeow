const renderVideoPreview = (text) => {
    // Regular YouTube Video URL
    const youtubeRegex = /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w-]+))/;

    // YouTube Shorts URL (convert it to embed format)
    const youtubeShortsRegex = /(https?:\/\/(?:www\.)?youtube\.com\/shorts\/([\w-]+))/;

    // Direct Video URL (mp4, webm, ogg)
    const directVideoRegex = /(https?:\/\/.*\.(mp4|webm|ogg))/;

    const youtubeMatch = text.match(youtubeRegex);
    const youtubeShortsMatch = text.match(youtubeShortsRegex);
    const directMatch = text.match(directVideoRegex);

    if (youtubeMatch) {
        return youtubeMatch[1].replace("watch?v=", "embed/");
    } else if (youtubeShortsMatch) {
        return `https://www.youtube.com/embed/${youtubeShortsMatch[2]}`; // Convert Shorts URL to embed
    } else if (directMatch) {
        return directMatch[0]; // Return direct video link
    }
    
    return null; // No video found
};

export default renderVideoPreview;
