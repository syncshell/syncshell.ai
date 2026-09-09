import sharp from "sharp"
await sharp("public/social-preview.svg", { density: 384 })
  .resize(1200, 630, { fit: "fill" })
  .png({ compressionLevel: 9, effort: 10 })
  .toFile("public/social-preview.png")
