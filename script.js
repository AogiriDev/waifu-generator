document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const waifuImage = document.getElementById("waifuImage");

  if (generateBtn) {
    generateBtn.addEventListener("click", async () => {
      const category = window.location.href.includes("nsfw") ? "nsfw" : "sfw";
      const response = await fetch(`https://api.waifu.pics/${category}/waifu`);
      const data = await response.json();
      waifuImage.src = data.url;
      waifuImage.classList.remove("d-none");
      waifuImage.classList.add("fade-in");
    });
  }
});
