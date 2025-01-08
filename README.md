# Florian Gächter's blog

<!--toc:start-->

- [Florian Gächter's blog](#florian-gächters-blog)
  - [Creating new blog posts](#creating-new-blog-posts)
  - [Optimizing images](#optimizing-images)
  <!--toc:end-->

## Creating new blog posts

That's super simple: just add a new `.md` file in the `./src/posts` directory.

## Optimizing images

- Crop original image to 1200x679
- Optimize image and remove EXIF data with `mogrify -format jpg -sampling-factor 4:2:0 -strip -quality 85 -interlace line -colorspace RGB FILENAME.jpg` (beware, this overwrites original image)
