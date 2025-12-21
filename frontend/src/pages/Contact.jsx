import { Mail, MapPin, Globe, Github, Linkedin, ExternalLink, MessageSquare, Briefcase } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "harshshah9848@gmail.com",
      link: "mailto:harshshah9848@gmail.com",
      description: "For direct inquiries ",
      action: "Send Email"
    },
    {
      icon: Globe,
      title: "Write To Me",
      value: "",
      link: "https://harshshah.onrender.com/",
      description: "Write to me Directly i reply within 24 hours",
      action: "Visit Site"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/harshshah-2023",
      color: "hover:bg-gray-800 hover:border-gray-600",
      username: "@harshshah-2023"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-shah-9848hs",
      color: "hover:bg-blue-900/30 hover:border-blue-600/30",
      username: "@ Harsh Shah"
    }
  ];

  return (
    <section className="min-h-screen bg-[#0A0B0D] text-white py-28 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#fbbf24]/40" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#fbbf24]">
              Get In Touch
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#fbbf24]/40" />
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Let's Connect
            <span className="block mt-3 font-medium text-white">
              & Build Together
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-400/80 leading-relaxed">
            Interested in discussing Citadel Flow, technical architecture,
            or potential collaboration? Reach out anytime.
          </p>
        </div>

      
          {/* LEFT: Contact Information */}
          <div className="space-y-12">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-gradient-to-b from-[#121316] to-[#0D0E10] border border-white/10 rounded-xl p-6 hover:border-[#fbbf24]/30 transition-all duration-300 hover:translate-y-[-2px]">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-[#fbbf24]/10 flex items-center justify-center">
                            <Icon className="text-[#fbbf24]" size={22} />
                          </div>
                          <div>
                            <h3 className="font-medium text-white group-hover:text-[#fbbf24] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#fbbf24] transition-colors" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold text-white">
                          {item.value}
                        </p>
                        <span className="px-4 py-2 rounded-lg bg-[#fbbf24]/10 text-[#fbbf24] text-sm font-medium">
                          {item.action}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#fbbf24]/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-[#fbbf24]" />
                </div>
                Find Me Online
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-b from-[#121316] to-[#0D0E10] border border-white/10 rounded-xl p-5 ${social.color} transition-all duration-300 hover:translate-y-[-2px]`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">{social.label}</div>
                          <div className="text-sm text-gray-400 mt-1">{social.username}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        
          
     

        {/* Footer Note */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            Looking forward to connecting with you
          </p>
        </div>
      </div>
    </section>
  );
}