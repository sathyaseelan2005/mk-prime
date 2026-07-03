import { Trophy, Users, Award, UserCheck } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

const stats = [
  {
    icon: Trophy,
    end: 150,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    end: 100,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: Award,
    end: 2,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: UserCheck,
    end: 15,
    suffix: '+',
    label: 'Expert Team',
  },
];

function StatCard({ icon: Icon, end, suffix, label }) {
  const { count, ref } = useCounter(end, 2000);

  return (
    <div ref={ref} className="flex flex-col sm:flex-row xl:flex-row items-center sm:items-start xl:items-center gap-3 p-5 lg:p-4 xl:p-6 text-center sm:text-left">
      <Icon className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
      <div>
        <div className="text-2xl md:text-3xl font-bold text-white mb-1">
          {count}{suffix}
        </div>
        <div className="text-white/70 text-xs md:text-sm">{label}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-primary py-6 lg:py-8">
      <div className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 xl:gap-12">
            
            {/* Left - Image */}
            <div className="w-full lg:w-1/3 relative h-[350px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl shrink-0">
              <img
                src="https://picsum.photos/seed/painting-team/800/800"
                alt="Professional painting team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Middle - Text Content */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center py-4">
              <h3 className="text-secondary font-bold text-3xl md:text-4xl tracking-widest uppercase mb-4">About Us</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                MK Prime Coating & Contractor
              </h2>
              <p className="text-white/70 leading-relaxed mb-8 text-base">
                We are a professional painting and waterproofing contractor with years of experience. Our mission is to deliver high quality work, on time, with perfect finishing and customer satisfaction.
              </p>

            </div>

            {/* Right - Stats Grid */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center">
              <div className="grid grid-cols-2 border border-secondary/30 rounded-xl overflow-hidden bg-primary shadow-2xl w-full">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className={`
                      relative bg-primary
                      ${index === 0 ? 'border-b border-r border-secondary/30' : ''}
                      ${index === 1 ? 'border-b border-secondary/30' : ''}
                      ${index === 2 ? 'border-r border-secondary/30' : ''}
                    `}
                  >
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
