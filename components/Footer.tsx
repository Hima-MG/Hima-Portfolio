import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { Mail } from "lucide-react";

const socials = [
  { href:"https://github.com/Hima-MG",                        Icon:GithubIcon,  label:"GitHub"   },
  { href:"https://www.linkedin.com/in/hima-m-g-954878259",    Icon:LinkedInIcon,label:"LinkedIn" },
  { href:"mailto:himaammu656@gmail.com",                       Icon:Mail,        label:"Email"    },
];

export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)",padding:"40px 0" }}>
      <div className="container" style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"18px",textAlign:"center" }}>

        {/* Logo */}
        <span style={{ fontWeight:900,fontSize:"1rem",letterSpacing:"-0.025em",color:"rgba(255,255,255,0.3)" }}>
          Hima{" "}
          <span style={{ background:"linear-gradient(135deg,#3B82F6,#8B5CF6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>MG</span>
        </span>

        {/* Social icons */}
        <div style={{ display:"flex",gap:"4px" }}>
          {socials.map(({ href,Icon,label })=>(
            <a
              key={label}
              href={href}
              target={href.startsWith("http")?"_blank":undefined}
              rel={href.startsWith("http")?"noopener noreferrer":undefined}
              aria-label={label}
              className="btn-ghost"
            >
              <Icon width={15} height={15} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize:"0.8125rem",color:"rgba(255,255,255,0.2)" }}>
          © 2025 Hima MG · Thrissur, Kerala, India 🇮🇳
        </p>
      </div>
    </footer>
  );
}
