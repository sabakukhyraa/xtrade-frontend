export default function ProfileSection() {
  return (
    <div className="flex items-center self-end gap-x-6 p-12">
      <div className="flex flex-col items-end">
        <h2 className="text-gray text-2xl font-semibold">Ali Kerem Ata</h2>
        <p className="text-darkgray text-xl font-semibold">#12345</p>
      </div>
      <img className="object-cover rounded-full aspect-square w-10 h-10 md:w-20 md:h-20" src="/assets/exampleAvatar.jpg" alt="" />
    </div>
  );
}