const renderVideoURLInText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => 
        urlRegex.test(part) ? (
            <a 
                key={index} 
                href={part} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="post-url"
            >
                {part}
            </a>
        ) : (
            part
        )
    );
};

export default renderVideoURLInText;
