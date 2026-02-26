/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Flame, Zap, ShieldCheck, Menu, Plus, Instagram, Linkedin, Github } from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // não envia para lugar nenhum, apenas limpa silenciosamente
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 2000); // volta ao normal após 2 segundos
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-7 w-7 text-brand-orange" />
            <span className="font-bold text-xl tracking-tight">Aquece Já</span>
          </div>
          <button className="text-white/80 hover:text-white transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,149,0,0.15)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
              Aquece <span className="text-heat-gradient">Já</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xs mx-auto"
            >
              A tecnologia que aquece sua refeição por igual, de qualquer lugar.
            </motion.p>

            {/* Hero Image Container */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative mx-auto w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden glow-orange mb-12"
            >
              <img 
                alt="Aquece Já High-Tech Lunch Box" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7grMxazuVjHazFVi9qDYZwO9aG7Axr56wkoT-60KaUfLQ6eahRP7NbCE9u3c-it4DSA8fW6jhLXd5Cigq-BAFpDU8feMWk8aV3pMw3ytf8CC3-mJ_DQ016wH5SBBKKVy_Kl5MCboo-IrP8PFK_p-VD8OV2s8gD9E2mHv2TDd69sKt8r6fZcXFlHyEU5wu85gbmyA5-F6ksgt32lkbF30nbUZGjxMitq2gWbyUXR4KG-BXs57uKdOp1RXSzxDEvzViow_pPybEgTw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
            </motion.div>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full max-w-xs py-4 px-8 bg-[image:var(--background-heat-gradient)] rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-opacity cursor-pointer" 
              href="#newsletter"
            >
              Conheça o Futuro
            </motion.a>
          </div>
        </section>

        {/* Technology Highlight */}
        <section className="bg-brand-gray py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calor Uniforme.<br/>
                <span className="text-brand-orange">Zero pontos frios.</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Nossa tecnologia exclusiva de indução circular garante que cada grama da sua comida receba a mesma temperatura.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="p-6 bg-brand-light-gray rounded-lg border border-white/5 hover:border-brand-orange/30 transition-colors"
              >
                <div className="w-12 h-12 mb-4 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Aquecimento Ultra Rápido</h3>
                <p className="text-sm text-gray-400">
                  Pronta para consumo em menos de 8 minutos, preservando nutrientes e sabor original.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="p-6 bg-brand-light-gray rounded-lg border border-white/5 hover:border-brand-red/30 transition-colors"
              >
                <div className="w-12 h-12 mb-4 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Segurança Inteligente</h3>
                <p className="text-sm text-gray-400">
                  Sensores que evitam superaquecimento e desligam automaticamente após o ciclo.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Integration */}
        <section className="py-20 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
              Controle Total na Palma da Mão
            </motion.h2>
            <motion.p {...fadeIn} className="text-gray-400 max-w-md mx-auto">
              Agende horários e ajuste a temperatura ideal através do nosso aplicativo exclusivo.
            </motion.p>
          </div>

          <div className="relative flex justify-center">
            {/* App Mockup Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full"></div>
            
            {/* Phone Mockup */}
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[6px] border-brand-light-gray overflow-hidden shadow-2xl"
            >
              {/* Screen Content */}
              <div className="flex flex-col h-full bg-brand-dark p-6">
                <div className="h-6 w-24 bg-brand-light-gray rounded-full mx-auto mb-8"></div> {/* Notch */}
                
                <div className="text-center mb-10">
                  <p className="text-xs text-brand-orange font-bold uppercase tracking-widest mb-2">Status do Almoço</p>
                  <h4 className="text-4xl font-bold">55°C</h4>
                  <p className="text-xs text-gray-500">Aquecendo...</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-brand-light-gray p-4 rounded-xl flex items-center justify-between">
                    <span className="text-sm font-medium">Frango com Grelhados</span>
                    <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                      <Plus className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-orange to-transparent"></div>
                  
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 mb-2">AGENDADO PARA</p>
                    <p className="text-xl font-bold">12:30</p>
                  </div>
                </div>

                <div className="mt-auto mb-4">
                  <button className="w-full py-3 bg-brand-orange/20 border border-brand-orange/50 rounded-xl text-brand-orange text-sm font-bold hover:bg-brand-orange/30 transition-colors">
                    Cancelar Aquecimento
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Concept Vision */}
        <section className="bg-brand-gray py-20 px-6 border-y border-white/5">
          <div className="max-w-md mx-auto text-center">
            <motion.div 
              {...fadeIn}
              className="inline-block px-3 py-1 bg-brand-light-gray border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-6"
            >
              Visão de Projeto
            </motion.div>
            <motion.h2 {...fadeIn} className="text-3xl font-bold mb-6">Inovação Acadêmica</motion.h2>
            <motion.p {...fadeIn} className="text-gray-400 leading-relaxed mb-8">
              O <strong>Aquece Já</strong> nasceu como um projeto de inovação focado em resolver um problema comum: a falta de qualidade nutricional nas refeições rápidas. Combinamos hardware de precisão e software intuitivo para criar mais do que uma marmiteira, mas um assistente de saúde.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="p-4 bg-brand-dark rounded-lg"
              >
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-[10px] text-gray-500 uppercase">Eficiência Térmica</p>
              </motion.div>
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="p-4 bg-brand-dark rounded-lg"
              >
                <p className="text-2xl font-bold text-white">IOT</p>
                <p className="text-[10px] text-gray-500 uppercase">Conectividade</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 px-6 bg-brand-dark relative" id="newsletter">
          <div className="absolute inset-0 bg-[image:var(--background-heat-gradient)] opacity-5"></div>
          <div className="relative z-10 max-w-lg mx-auto">
            <div className="text-center mb-10">
              <motion.h2 {...fadeIn} className="text-3xl font-bold mb-4">Acompanhe o Progresso</motion.h2>
              <motion.p {...fadeIn} className="text-gray-400">Seja o primeiro a saber quando o projeto entrar em fase de produção.</motion.p>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div {...fadeIn}>
                <input 
                  className="w-full bg-brand-light-gray border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-brand-orange focus:ring-brand-orange py-4 px-6 outline-none transition-all" 
                  placeholder="Seu melhor e-mail" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
              <motion.button 
                {...fadeIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-bold rounded-lg transition-all duration-300 shadow-lg ${
                  sent 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-white text-brand-dark hover:bg-brand-orange hover:text-white'
                }`} 
                type="submit"
              >
                {sent ? "Enviado!" : "Me Avise"}
              </motion.button>
            </form>
            <p className="text-center text-xs text-gray-600 mt-6 italic">
              *Este é um projeto conceitual em desenvolvimento.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/5 py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[image:var(--background-heat-gradient)] rounded-sm flex items-center justify-center">
              <Flame className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg">Aquece Já</span>
          </div>
          
          <div className="flex justify-center gap-6 mb-8 text-gray-500">
            <a className="hover:text-brand-orange transition-colors" href="#">
              <Instagram className="h-5 w-5" />
            </a>
            <a className="hover:text-brand-orange transition-colors" href="#">
              <Linkedin className="h-5 w-5" />
            </a>
            <a className="hover:text-brand-orange transition-colors" href="#">
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-xs text-gray-600">© 2026 Aquece Já. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
