// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Platform detection
function detectPlatform(url) {
    if (url.includes('tiktok.com') || url.includes('vm.tiktok')) {
        return 'tiktok';
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return 'youtube';
    } else if (url.includes('instagram.com')) {
        return 'instagram';
    } else if (url.includes('facebook.com') || url.includes('fb.watch')) {
        return 'facebook';
    }
    return null;
}

// Validate URL
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Process Video
async function processVideo() {
    const urlInput = document.getElementById('videoUrl');
    const url = urlInput.value.trim();
    const loadingSection = document.getElementById('loadingSection');
    const videoPreview = document.getElementById('videoPreview');

    // Validation
    if (!url) {
        alert('Please enter a video URL');
        return;
    }

    if (!isValidUrl(url)) {
        alert('Please enter a valid URL');
        return;
    }

    const platform = detectPlatform(url);
    if (!platform) {
        alert('Please enter a valid URL from TikTok, YouTube, Instagram, or Facebook');
        return;
    }

    // Show loading
    loadingSection.classList.remove('hidden');
    videoPreview.classList.add('hidden');

    // Simulate API call (replace with actual API integration)
    setTimeout(() => {
        loadingSection.classList.add('hidden');
        showVideoPreview(platform, url);
    }, 2000);
}

// Show Video Preview (Mock data - replace with actual API response)
function showVideoPreview(platform, url) {
    const videoPreview = document.getElementById('videoPreview');
    const thumbnailImg = document.getElementById('thumbnailImg');
    const videoTitle = document.getElementById('videoTitle');
    const videoAuthor = document.getElementById('videoAuthor');
    const videoDuration = document.getElementById('videoDuration');
    const audioSection = document.getElementById('audioSection');

    // Mock data based on platform
    const mockData = {
        tiktok: {
            title: 'Amazing TikTok Video',
            author: '@tiktokuser',
            duration: '00:45',
            thumbnail: 'https://via.placeholder.com/640x360/000000/FFFFFF?text=TikTok+Video'
        },
        youtube: {
            title: 'YouTube Video Title',
            author: 'YouTube Channel',
            duration: '10:30',
            thumbnail: 'https://via.placeholder.com/640x360/FF0000/FFFFFF?text=YouTube+Video'
        },
        instagram: {
            title: 'Instagram Reel',
            author: '@instagramuser',
            duration: '00:30',
            thumbnail: 'https://via.placeholder.com/640x360/E1306C/FFFFFF?text=Instagram+Video'
        },
        facebook: {
            title: 'Facebook Video',
            author: 'Facebook Page',
            duration: '05:15',
            thumbnail: 'https://via.placeholder.com/640x360/1877F2/FFFFFF?text=Facebook+Video'
        }
    };

    const data = mockData[platform];
    
    thumbnailImg.src = data.thumbnail;
    thumbnailImg.alt = data.title;
    videoTitle.textContent = data.title;
    videoAuthor.textContent = data.author;
    videoDuration.textContent = data.duration;

    // Show/hide audio section based on platform (YouTube only)
    if (platform === 'youtube') {
        audioSection.classList.remove('hidden');
    } else {
        audioSection.classList.add('hidden');
    }

    videoPreview.classList.remove('hidden');
    
    // Scroll to preview
    videoPreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Download Video
function downloadVideo(quality) {
    // In a real implementation, this would trigger the actual download
    // For demo purposes, we'll show an alert
    alert(`Starting download in ${quality} quality...\n\nIn a real implementation, this would download the video file.`);
    
    // Actual implementation would be:
    // window.location.href = `https://your-api.com/download?url=${encodeURIComponent(url)}&quality=${quality}`;
}

// Download Audio
function downloadAudio(format) {
    alert(`Starting audio download in ${format} format...\n\nIn a real implementation, this would download the audio file.`);
}

// Handle Contact Form Submit
function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // In real implementation, send to your backend or email service
    console.log('Form submitted:', data);
    
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Allow Enter key to submit
document.getElementById('videoUrl')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        processVideo();
    }
});

// Auto-detect paste and show platform indicator
document.getElementById('videoUrl')?.addEventListener('input', function(e) {
    const url = e.target.value;
    const platform = detectPlatform(url);
    
    if (platform) {
        e.target.style.borderColor = getPlatformColor(platform);
    } else {
        e.target.style.borderColor = '';
    }
});

function getPlatformColor(platform) {
    const colors = {
        tiktok: '#000000',
        youtube: '#FF0000',
        instagram: '#E1306C',
        facebook: '#1877F2'
    };
    return colors[platform] || '';
}

// Initialize ads when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Google AdSense ads are automatically initialized by their script
    console.log('Page loaded - Ads should initialize automatically');
});
  
