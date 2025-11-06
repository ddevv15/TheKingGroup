# Video Hosting Solutions for Hero Background

Since `hero_bg.MP4` (173.62 MB) exceeds GitHub's 100 MB limit, here are the best solutions to host it for Vercel deployment:

---

## Option 1: Vercel Blob Storage (Recommended)

**Best for:** Direct Vercel integration, automatic CDN, easy setup

### Steps:

1. **Install Vercel Blob SDK:**

   ```bash
   npm install @vercel/blob
   ```

2. **Upload video via Vercel Dashboard:**

   - Go to your Vercel project dashboard
   - Navigate to Storage → Create Database → Blob
   - Upload `hero_bg.MP4` directly
   - Copy the blob URL

3. **Use environment variable:**

   - Add `NEXT_PUBLIC_HERO_VIDEO_URL` to your Vercel environment variables
   - Set it to the blob URL

4. **Update code to use environment variable:**
   ```jsx
   <video
     autoPlay
     loop
     muted
     playsInline
     className="absolute inset-0 w-full h-full object-cover z-0"
   >
     <source
       src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "/hero_bg.MP4"}
       type="video/mp4"
     />
   </video>
   ```

**Pros:**

- ✅ Integrated with Vercel
- ✅ Automatic CDN
- ✅ No external dependencies
- ✅ Fast delivery

**Cons:**

- ⚠️ Requires Vercel Pro plan for larger files (free tier has limits)

---

## Option 2: Cloudinary (Free Tier Available)

**Best for:** Free hosting, video optimization, easy setup

### Steps:

1. **Sign up for Cloudinary** (free tier: 25 GB storage, 25 GB bandwidth/month)

2. **Upload video:**

   - Go to Media Library in Cloudinary dashboard
   - Upload `hero_bg.MP4`
   - Copy the video URL (format: `https://res.cloudinary.com/your-cloud/video/upload/v1234567890/hero_bg.mp4`)

3. **Add environment variable:**

   - Add `NEXT_PUBLIC_HERO_VIDEO_URL` to `.env.local` and Vercel
   - Set to Cloudinary URL

4. **Update code:**
   ```jsx
   <video
     autoPlay
     loop
     muted
     playsInline
     className="absolute inset-0 w-full h-full object-cover z-0"
   >
     <source
       src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "/hero_bg.MP4"}
       type="video/mp4"
     />
   </video>
   ```

**Pros:**

- ✅ Free tier available
- ✅ Automatic video optimization
- ✅ CDN included
- ✅ Easy to use

**Cons:**

- ⚠️ Free tier has bandwidth limits
- ⚠️ External dependency

---

## Option 3: Git LFS (Git Large File Storage)

**Best for:** Keeping video in git repository

### Steps:

1. **Install Git LFS:**

   ```bash
   # macOS
   brew install git-lfs

   # Or download from: https://git-lfs.github.com/
   ```

2. **Initialize Git LFS:**

   ```bash
   git lfs install
   ```

3. **Track video file:**

   ```bash
   git lfs track "public/hero_bg.MP4"
   git lfs track "public/hero_bg.mp4"
   ```

4. **Remove from .gitignore and commit:**
   ```bash
   # Remove from .gitignore
   # Then:
   git add .gitattributes public/hero_bg.MP4
   git commit -m "Add hero video using Git LFS"
   git push
   ```

**Pros:**

- ✅ Keeps file in repository
- ✅ Version controlled
- ✅ Works with Vercel (Vercel supports Git LFS)

**Cons:**

- ⚠️ GitHub free tier: 1 GB storage, 1 GB bandwidth/month
- ⚠️ Your file is 173 MB, so you'll use ~17% of free quota per month
- ⚠️ Requires Git LFS installation

---

## Option 4: AWS S3 + CloudFront (Most Scalable)

**Best for:** Production, high traffic, unlimited scaling

### Steps:

1. **Create S3 bucket** and upload video
2. **Set up CloudFront** CDN distribution
3. **Use CloudFront URL** in environment variable

**Pros:**

- ✅ Highly scalable
- ✅ Pay-as-you-go pricing
- ✅ Enterprise-grade reliability

**Cons:**

- ⚠️ More complex setup
- ⚠️ Requires AWS account
- ⚠️ Costs money (but very cheap for small sites)

---

## Option 5: Direct Vercel Upload (Manual)

**Best for:** Quick one-time solution

### Steps:

1. **Compress video** (reduce file size if possible)
2. **Use Vercel CLI** to upload:
   ```bash
   vercel --prod
   # Manually upload large files via Vercel dashboard
   ```

**Note:** This is less ideal as Vercel deployments pull from git, so manual uploads won't persist.

---

## Recommended Solution

**For your use case, I recommend Option 2 (Cloudinary)** because:

- Free tier is sufficient for a single video
- Easy setup (5 minutes)
- Automatic optimization
- Works immediately with Vercel
- No code changes needed (just environment variable)

**Alternative:** If you want to keep it simple and don't mind the setup, **Option 1 (Vercel Blob)** is also excellent.

---

## Quick Implementation (Cloudinary)

1. Upload video to Cloudinary → Get URL
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_HERO_VIDEO_URL=https://res.cloudinary.com/your-cloud/video/upload/v1234567890/hero_bg.mp4
   ```
3. Add same variable in Vercel dashboard (Settings → Environment Variables)
4. Update code to use environment variable (fallback to local file for development)

---

## File Size Optimization Tips

Before uploading, consider compressing the video:

- **Target size:** < 50 MB for faster loading
- **Tools:** HandBrake, FFmpeg, or online compressors
- **Format:** MP4 (H.264 codec) is best for web
- **Resolution:** 1920x1080 is usually sufficient (don't need 4K for background)

Example FFmpeg command:

```bash
ffmpeg -i hero_bg.MP4 -vcodec h264 -acodec aac -crf 28 -preset slow hero_bg_compressed.mp4
```
