import Image from "next/image";

export function NepaliFlag({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/flag.svg"
        alt="Nepali flag"
        width={20}
        height={20}
        className="h-full w-full object-contain"
      />
    </div>
  );
}