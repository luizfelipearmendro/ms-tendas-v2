import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, RefreshCcw } from 'lucide-react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { getWhatsAppUrl } from '../config/site';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=MS+Tendas+R.+Nova+Andradina+130+Cuiab%C3%A1';

const inputClass =
  'w-full rounded-2xl border border-ink/10 bg-paper px-5 py-4 text-ink placeholder:text-ink/35 outline-none transition-all focus:border-lona focus:bg-white focus:ring-4 focus:ring-lona/15';

const labelClass = 'flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-ink/70';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    assunto: 'Orçamento — Tenda 3x3',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá, Júlio! Me chamo *${formData.nome}*.\n\n*Assunto:* ${formData.assunto}\n\n*Mensagem:* ${formData.mensagem}\n\n*Telefone:* ${formData.whatsapp}`;
    const url = getWhatsAppUrl(msg);

    setWhatsappUrl(url);
    setIsSubmitted(true);

    // Abre o WhatsApp automaticamente
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const formatPhone = (value) => {
    value = value.replace(/\D/g, "");

    value = value.slice(0, 11);

    if (value.length <= 10) {
      return value
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return value
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "whatsapp") {
      newValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const contacts = [
    {
      icon: Phone,
      label: 'Telefone / WhatsApp',
      lines: [
        { text: '(65) 99904-7060', href: 'tel:+5565999047060' },
        { text: '(65) 99208-7365', href: 'tel:+5565992087365' },
      ],
    },
    {
      icon: Mail,
      label: 'E-mail',
      lines: [{ text: 'mstendas2016@gmail.com', href: 'mailto:mstendas2016@gmail.com' }],
    },
    {
      icon: MapPin,
      label: 'Endereço',
      lines: [{ text: 'R. Nova Andradina, 130 - Jd. Presidente I, Cuiabá - MT, 78090-130', href: MAPS_URL, external: true }],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos montar seu evento?"
        subtitle="Preencha o formulário e nossa equipe entrará em contato o quanto antes com a melhor proposta."
      />

      <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 pb-32 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-40px_rgba(12,15,20,0.35)] lg:col-span-7"
        >
          <div className="p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-display text-3xl font-extrabold tracking-tight">Envie sua mensagem</h2>
                    <p className="mt-2 text-ink/60">A mensagem vai pronta direto para o nosso WhatsApp.</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="nome" className={labelClass}>
                        Seu nome <span className="text-lona">*</span>
                      </label>
                      <input
                        required
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        type="text"
                        className={inputClass}
                        placeholder="Ex: Júlio Armendro"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="whatsapp" className={labelClass}>
                        Telefone / WhatsApp <span className="text-lona">*</span>
                      </label>
                      <input
                        required
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        type="tel"
                        className={inputClass}
                        placeholder="(65) 99904-7060"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="assunto" className={labelClass}>
                      Assunto / Tipo de Evento <span className="text-lona">*</span>
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option>Orçamento — Tenda 3x3</option>
                      <option>Orçamento — Tenda 4x4</option>
                      <option>Orçamento — Tenda 5x5</option>
                      <option>Festa Particular</option>
                      <option>Evento Corporativo</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className={labelClass}>
                      Mensagem <span className="text-lona">*</span>
                      <span className="ml-auto text-xs font-normal normal-case tracking-normal text-ink/40">
                        {formData.mensagem.length} caracteres
                      </span>
                    </label>
                    <textarea
                      required
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={4}
                      className={inputClass}
                      placeholder="Descreva seu evento ou as medidas que precisa"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group relative isolate flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25D366] py-5 text-lg font-bold text-ink"
                    >
                      <span className="absolute inset-0 -z-10 translate-y-[101%] bg-ink transition-transform duration-500 ease-out-expo group-hover:translate-y-0" />
                      <span className="flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                        <MessageCircle size={22} />
                        Enviar pelo WhatsApp
                      </span>
                    </button>
                    <p className="mt-4 text-center text-sm text-ink/40">
                      Ao enviar, o WhatsApp será aberto com sua mensagem pronta para envio.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.1 }}
                    className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#25D366] text-ink"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="font-display text-4xl font-bold tracking-tight">Mensagem pronta!</h3>
                  <p className="mx-auto mb-10 mt-4 max-w-sm text-lg text-ink/60">
                    O WhatsApp foi aberto com sua mensagem. Caso não tenha aberto, clique no botão abaixo.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button href={whatsappUrl} variant="whatsapp" size="md" icon={<MessageCircle size={18} />}>
                      Abrir WhatsApp
                    </Button>
                    <Button onClick={() => setIsSubmitted(false)} variant="ghost" size="md" arrow={false} icon={<RefreshCcw size={18} />} className="text-ink">
                      Enviar outra mensagem
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 lg:col-span-5"
        >
          {contacts.map((contact) => (
            <div key={contact.label} className="flex gap-5 rounded-[2rem] border border-ink/10 bg-white/60 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lona text-white">
                <contact.icon size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink/50">{contact.label}</p>
                {contact.lines.map((line) => (
                  <a
                    key={line.text}
                    href={line.href}
                    {...(line.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="mt-1 block break-words text-lg font-bold transition-colors hover:text-lona"
                  >
                    {line.text}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="relative overflow-hidden rounded-[2rem] bg-lona p-8 text-white">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lona/50 blur-3xl" />
            <div className="relative">
              <h4 className="font-display text-2xl font-bold">Prefere falar direto?</h4>
              <p className="mb-6 mt-2 text-white/60">Chame a nossa equipe no WhatsApp e tire suas dúvidas.</p>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img src="/images/marcos.jpeg" alt="Marcos, da equipe MS Tendas" className="h-12 w-12 rounded-full border-4 border-lona object-cover" />
                  <img src="/images/julio.jpeg" alt="Júlio, da equipe MS Tendas" className="h-12 w-12 rounded-full border-4 border-lona object-cover" />
                </div>
                <p className="text-sm text-white/70">Marcos e Júlio</p>
              </div>
              <Button
                href={getWhatsAppUrl('Olá! Vim pelo site e gostaria de tirar uma dúvida.')}
                variant="whatsapp"
                size="md"
                icon={<MessageCircle size={18} />}
              >
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </motion.aside>
      </section>
    </>
  );
};

export default Contato;
