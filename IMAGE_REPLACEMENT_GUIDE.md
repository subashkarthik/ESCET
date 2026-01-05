# Image Replacement Guide for College Profile Page

## 📍 Where to Replace Images

There are **2 placeholder images** in the College Profile page that need to be replaced:

### 1. Hero Section Background Image
**Location:** Line 76 in `pages/CollegeProfile.tsx`
**Current:** `https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop`
**Purpose:** Large background image behind the "College Profile" title

### 2. Overview Section College Building Image
**Location:** Line 147 in `pages/CollegeProfile.tsx`
**Current:** `https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop`
**Purpose:** Main college building photo in the overview section

---

## 📁 Step-by-Step Instructions

### Step 1: Prepare Your Images

1. **Hero Background Image:**
   - **Recommended size:** 1920x1080 pixels or larger
   - **Format:** JPG or PNG
   - **Content:** Wide-angle shot of your college campus/building
   - **File name suggestion:** `college-campus-hero.jpg` or `campus-background.jpg`

2. **Overview Building Image:**
   - **Recommended size:** 1200x900 pixels or larger
   - **Format:** JPG or PNG
   - **Content:** Main college building or campus view
   - **File name suggestion:** `college-building.jpg` or `main-building.jpg`

### Step 2: Add Images to Project

1. Navigate to the `public/images/` folder in your project
2. Copy your college photos into this folder
3. Your folder structure should look like:
   ```
   public/
   └── images/
       ├── chairman.jpg (existing)
       ├── college-logo.png (existing)
       ├── ESbuild.jpeg (existing)
       ├── founder-chairman.jpg (existing)
       ├── principal.jpg (existing)
       ├── college-campus-hero.jpg (NEW - your hero image)
       └── college-building.jpg (NEW - your building image)
   ```

### Step 3: Update the Code

Open `pages/CollegeProfile.tsx` and replace the image URLs:

#### Replace Hero Image (Line 76):
**Find:**
```tsx
src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop"
```

**Replace with:**
```tsx
src="/images/college-campus-hero.jpg"
```
*(Use your actual filename)*

#### Replace Building Image (Line 147):
**Find:**
```tsx
src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
```

**Replace with:**
```tsx
src="/images/college-building.jpg"
```
*(Use your actual filename)*

---

## 🎨 Image Recommendations

### Hero Section Image:
- **Best shots:** Campus aerial view, main building facade, campus entrance
- **Style:** Bright, professional, showing the scale of the campus
- **Aspect ratio:** 16:9 or wider (landscape)
- **Quality:** High resolution (at least 1920px wide)

### Overview Section Image:
- **Best shots:** Main academic building, library, modern infrastructure
- **Style:** Clear, well-lit, professional photography
- **Aspect ratio:** 4:3 (portrait or square)
- **Quality:** High resolution (at least 1200px wide)

---

## ✅ Quick Reference: Image Paths

In React/Vite projects, images in the `public` folder are accessed with paths starting with `/`:

- ✅ Correct: `/images/college-campus-hero.jpg`
- ❌ Wrong: `./images/college-campus-hero.jpg`
- ❌ Wrong: `../public/images/college-campus-hero.jpg`
- ❌ Wrong: `images/college-campus-hero.jpg`

---

## 🔧 Alternative: Using Existing Images

If you already have suitable images in your `public/images/` folder, you can use them:

**Existing images in your project:**
- `ESbuild.jpeg` - Could be used for the building image
- Other images you may have added

**Example using existing image:**
```tsx
src="/images/ESbuild.jpeg"
```

---

## 📝 Complete Code Example

After replacement, your code should look like this:

```tsx
// Hero Section (around line 76)
<motion.img 
  src="/images/college-campus-hero.jpg" 
  alt="ESCET Campus" 
  className="w-full h-full object-cover brightness-[0.5]"
  // ... rest of props
/>

// Overview Section (around line 147)
<img 
  src="/images/college-building.jpg" 
  alt="College Building" 
  className="w-full h-full object-cover"
/>
```

---

## 🖼️ Image Optimization Tips

1. **Compress images** before adding them (use tools like TinyPNG or ImageOptim)
2. **Use JPG** for photos (smaller file size)
3. **Use PNG** only if you need transparency
4. **Keep file sizes under 500KB** for faster loading
5. **Maintain aspect ratios** to avoid distortion

---

## 🚀 Testing

After replacing images:
1. Save the file
2. The development server should auto-reload
3. Navigate to `/about/profile` to see your images
4. Check both desktop and mobile views

---

## ❓ Troubleshooting

**Image not showing?**
- Check the file path is correct (starts with `/images/`)
- Verify the file exists in `public/images/`
- Check the filename matches exactly (case-sensitive)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Image looks distorted?**
- Check the original image aspect ratio
- The CSS `object-cover` should handle cropping, but very different ratios may look odd

**Image too large/slow to load?**
- Compress the image using an online tool
- Consider using WebP format for better compression


