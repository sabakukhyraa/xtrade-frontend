export default function ProfileSection() {
  return (
    <div className="flex items-center self-end p-6 gap-x-6 lg:p-8">
      <div className="flex flex-col items-end">
        <h2 className="text-xl font-semibold text-gray lg:text-2xl">Ali Kerem Ata</h2>
        <p className="text-lg font-semibold text-darkgray lg:text-xl">#12345</p>
      </div>
      <img className="object-cover w-12 h-12 rounded-full aspect-square lg:w-20 lg:h-20" src="/assets/exampleAvatar.png" alt="" />
    </div>
  );
}