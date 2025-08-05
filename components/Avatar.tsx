import ProfileImage from "@/assets/images/profile.png";

export function Avatar() {
  return (
    <div className="avatar">
      <div className="w-16 md:w-28 rounded-full">
        <img src={ProfileImage.src} />
      </div>
    </div>
  );
}
