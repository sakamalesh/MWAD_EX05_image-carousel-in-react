# MWAD_EX05_image-carousel-in-react
## Date:19/05/2025

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
## APP.jsx:

'''
    import React from 'react';
    import ImageCarousel from './ImageCarousel';

    function App() {
    return (
        <div>
        <h1>React Image Carousel</h1>
        <ImageCarousel />
        </div>
    );
    }

    export default App;

'''
## ImageCarousel.jsx:

'''
    import React, { useState, useEffect } from 'react';
    import car1 from './assets/car1.jpeg';
    import car2 from './assets/car2.jpeg';  
    import car3 from './assets/car3.jpeg';

    const ImageCarousel = () => {
    const images = [car1, car2, car3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Image Carousel</h3>
        <img
            src={images[currentIndex]}
            alt={`carousel-${currentIndex}`}
            width="400"
            height="200"
            style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        />
        <div style={{ marginTop: '12px' }}>
            <button
            onClick={prevImage}
            style={{
                padding: '8px 16px',
                fontSize: '14px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            >
            Previous
            </button>
            <button
            onClick={nextImage}
            style={{
                marginLeft: '10px',
                padding: '8px 16px',
                fontSize: '14px',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            >
            Next
            </button>
        </div>
        </div>
    );
    };

    export default ImageCarousel;

'''


## OUTPUT
![alt text](image.png)
![alt text](imga/public/image.png)
![alt text](image-1.png)
## RESULT
The program for creating Image Carousel using React is executed successfully.
