# Videos Directory

This directory contains video files for the OKgo website.

## Required Video Files

### Homepage - "How it Works" Video
- **File:** `how-it-works.mp4` (primary format)
- **File:** `how-it-works.webm` (fallback format)
- **Poster:** `how-it-works-poster.jpg` (thumbnail image shown before video plays)
- **Recommended specs:**
  - Resolution: 1920x1080 (Full HD) or 1280x720 (HD)
  - Format: MP4 (H.264 codec) and WebM (VP9 codec)
  - Duration: 2-4 minutes
  - File size: Under 50MB for good loading performance

## Video Naming Convention

Use descriptive, kebab-case naming:
- `how-it-works.mp4` - Main "How it Works" video
- `product-demo.mp4` - Product demonstration videos
- `testimonial-[company].mp4` - Customer testimonial videos
- `case-study-[industry].mp4` - Industry-specific case studies

## Poster Images

Each video should have a corresponding poster image:
- Same name as video file but with `.jpg` extension
- Aspect ratio: 16:9
- Resolution: 1920x1080 recommended
- File size: Under 500KB

## Browser Support

The website includes multiple video formats for broad browser compatibility:
- MP4 (H.264) - Primary format, supported by most browsers
- WebM (VP9) - Fallback format for browsers that don't support MP4

## File Organization

```
public/videos/
├── how-it-works.mp4
├── how-it-works.webm
├── how-it-works-poster.jpg
├── product-demo.mp4
├── product-demo.webm
├── product-demo-poster.jpg
└── README.md
```

## Adding New Videos

1. Add video files in both MP4 and WebM formats
2. Create a poster image
3. Update the relevant page component to reference the new video
4. Test across different browsers and devices 