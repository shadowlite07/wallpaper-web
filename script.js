document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('imageGrid');

    const images = [
        { src: 'https://picsum.photos/id/1015/400/600', alt: 'Forest Path' },
        { src: 'https://picsum.photos/id/10/600/400', alt: 'Mountain Landscape' },
        { src: 'https://picsum.photos/id/100/500/700', alt: 'City at Night' },
        { src: 'https://picsum.photos/id/1003/400/500', alt: 'Desert Road' },
        { src: 'https://picsum.photos/id/1018/600/800', alt: 'Lake View' },
        { src: 'https://picsum.photos/id/1020/500/300', alt: 'Abstract Art' },
        { src: 'https://picsum.photos/id/1025/400/400', alt: 'Cute Puppy' },
        { src: 'https://picsum.photos/id/103/700/500', alt: 'Coffee Cup' },
        { src: 'https://picsum.photos/id/1036/400/600', alt: 'Ocean Waves' },
        { src: 'https://picsum.photos/id/1039/500/700', alt: 'Winter Scene' },
        { src: 'https://picsum.photos/id/1040/600/400', alt: 'Building Facade' },
        { src: 'https://picsum.photos/id/1041/400/500', alt: 'Greenery' },
        { src: 'https://picsum.photos/id/1042/500/600', alt: 'Bridge at Sunset' },
        { src: 'https://picsum.photos/id/1043/400/300', alt: 'Street Art' },
        { src: 'https://picsum.photos/id/1044/600/700', alt: 'Book Stack' },
        { src: 'https://picsum.photos/id/1047/500/400', alt: 'Nature Trail' },
        { src: 'https://picsum.photos/id/1050/300/450', alt: 'Skyline' },
        { src: 'https://picsum.photos/id/1051/450/300', alt: 'Road' },
        { src: 'https://picsum.photos/id/1052/350/500', alt: 'Flowers' },
        { src: 'https://picsum.photos/id/1053/500/350', alt: 'Birds' },
        { src: 'https://picsum.photos/id/1054/400/550', alt: 'Waterfall' },
    ];

    function renderImages() {
        images.forEach(image => {
            const imageItem = document.createElement('div');
            imageItem.classList.add('image-item');

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;

            const imageInfo = document.createElement('div');
            imageInfo.classList.add('image-info');

            // Create a span for the image name
            const imageNameSpan = document.createElement('span');
            imageNameSpan.textContent = image.alt;

            // Create the download button (as an anchor tag for direct download)
            const downloadButton = document.createElement('a');
            downloadButton.href = image.src; // Link to the image source
            downloadButton.download = `${image.alt.replace(/\s+/g, '-')}.jpg`; // Suggested filename
            downloadButton.classList.add('download-button');
            downloadButton.textContent = 'Download';

            // Append name and button to imageInfo
            imageInfo.appendChild(imageNameSpan);
            imageInfo.appendChild(downloadButton);

            imageItem.appendChild(img);
            imageItem.appendChild(imageInfo);
            imageGrid.appendChild(imageItem);
        });
    }

    renderImages();
});