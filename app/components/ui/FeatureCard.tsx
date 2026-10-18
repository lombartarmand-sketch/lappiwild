import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  subtitle,
}: FeatureCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-transparent
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#C6A46A]/30
        hover:shadow-lg
        cursor-default
      "
    >
      <Icon
        size={24}
        strokeWidth={1.6}
        className="
          mx-auto
          mb-3
          text-[#C6A46A]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <h3 className="text-center text-sm font-medium uppercase tracking-[0.15em] text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-1 text-center text-[13px] text-[#6B6B6B]">
        {subtitle}
      </p>
    </div>
  );
}