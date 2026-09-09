import sharp from "sharp"
await sharp("public/social-preview.svg").png().toFile("public/social-preview.png")
